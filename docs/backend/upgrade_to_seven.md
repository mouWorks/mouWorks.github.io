# Php系統升級

* 系統升級:  php5-> php7
* `14.04` 不支援7, 故需要
	* 	`14.04` -> `16.04` Ubuntu 系統升級

## 執行步驟

### ubuntu 內系統 Upgrade -> 先將系統由`14.04` 升到 `16.04`

	```
	sudo su
	apt-get update
	apt-get upgrade
	apt-get dist-upgrade
	do-release-upgrade
	```
	* 指令如上, 中間會跳一些問題供選擇

    * 線上機器 Abort phpAdmin upgrade
      
* 此時 php為7.0      
* 裝完之後會有 `mariadb` 設定的問題
    `Errors were encountered while processing: mariadb-server-10.0`
    
### 除錯
    * `apt-get install mysql-server` -> 改裝 mysql 看起來就會把 mariadb 刪掉
    * 需要確認到底用的是 mysql 還是 mariadb
        * 線上機器用的是 `mariadb`
   
    * `apt-get remove mysql-server` -> 再把她移除, 會有問題
    * `apt-get install php7.1` -> 安裝相關的
    * `apt-get autoremove && apt-get autoclean` -> 資源回收
    * `apt-get install php7.1-fpm` -> 安裝 7.1 FPM
   
### 此時狀態為 php7.0
   * 升級到 7.1   
   * `apt-get install php7.1`
        * 若找不到, 需要更新
            * `apt-get install software-properties-common`
            * `add-apt-repository ppa:ondrej/nginx`
   * 安裝相依的套件: 看缺什麼裝什麼

    apt-get install php7.1-fpm
    apt-get install php7.1-common 
    apt-get install php7.1-cli
    apt-get install libpcre3
    apt-get install mysql-server-5.7
    apt-get install php7.1
    
   * Mariadb 問題:
        * `Package mariadb-server-10.0 is not configured yet.`
   * 估計需要重裝
    
    apt-get remove --purge mariadb-server mariadb-client
    apt-get autoremove
    apt-get autoclean
    apt-get install mariadb-server mariadb-client

### 安裝 php7.1-fpm
	* 注意 `Nginx` 會指向新的位置
	* 原先 `fastcgi_pass 127.0.0.1:9000;`
	* 改為 `fastcgi_pass unix:/var/run/php/php7.1-fpm.sock;`
   
3. 檢查 `/var/log/nginx/debug.log` 看哪裡會有問題

* 502 Bad Gateway -> 上面那個 `php7.1-fpm.sock` 沒有設定好
* 空白頁 -> `sites-avaliable/PROJECT.conf` 內部需要加上一行 `cgi_param` 
* `fastcgi_param SCRIPT_FILENAME $document_root/$fastcgi_script_name;`
* 最底下那行要補上, 白頁就消失了

	```
	location ~ \.php$ {
	    include /path/to/fastcgi_params;
	    fastcgi_pass  127.0.0.1:9000;
	    fastcgi_index index.php;
	    fastcgi_param SCRIPT_FILENAME $document_root/$fastcgi_script_name;
	}
	```	
	
### 登進去了, DB卻連線不到: 看起來是 Curl 問題
	`fastCGI sent in stderr: "PHP message: PHP Fatal error:  Un
caught ErrorException: cURL library is not loaded in /home/ubuntu/PROJECT/vendor/php-curl-class/php-curl-cl
ass/src/Curl/Curl.php:103`	

* 重裝 curl 
	* `sudo apt-get update && sudo apt-get install curl`
	* `sudo apt-get install php7.1-curl`
* 重啟 Nginx
	* `/etc/init.d/nginx restart` 

### Update

* 圖片上傳失敗問題
    * 要裝 php-gd
        * `sudo apt-get install php7.1-gd`
        * `/etc/init.d/nginx restart`
        
### Issue in production        
* 線上 mysqli 連不到的問題
    * ubuntu 要裝 `php-mysql`
        * `apt-get install php7.1-mysqli` (php 7.1 的版本)              
      
### 結論:

* 主要幾個需要重裝的
* `apt-get install php7.1-mysqli` (php 7.1 的版本) - 資料庫才能正確連接
* `apt-get install php7.1-gd` (圖片上傳功能) - php7.1-gd 需要重裝
* `apt-get install php7.1-curl` CURL 連接問題 - php7.1-curl 要裝
* `apt-get install php7.1-fpm` FPM 相關 - 裝完要設定
* `apt-get install php7.1-mbstring` 否則點進去會看不到文章

#### 幾個可能要注意的點:

* `sudo apt-get upgrade` 升級當下系統可能會很慢, loading 飆高

      