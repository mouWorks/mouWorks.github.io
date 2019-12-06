# deployer

:::
<strong>特別感謝</strong>  此為 `rainlay` 大分享技術筆記, 在此感謝! @https://github.com/rainlay
:::


官方網站
https://deployer.org/

## 使用 deployer 部屬的專案與目錄

deployer 在部屬時所需要的連線資訊都需設定好才可進行部署

### Socket 部屬與一般專案不同的地方

因為 socket 在執行後就已經是一個 Daemon Procress 在背景執行了，
因此他對應到的路徑就是當初執行的那個路徑，而如果用deployer 部屬的話，
每次都會產生一個新版本並且 symbol link 過去，這樣將導致每次部屬反而是去執行另一個 socket，反而會導致部屬失敗。

## deployer 流程教學

### 安裝

```bash
curl -LO https://deployer.org/deployer.phar
mv deployer.phar /usr/local/bin/dep
chmod +x /usr/local/bin/dep
```

### 在你的專案目錄下初始化 deployer

```bash
dep init
```

### 在你要部屬的 server 上，先建立好專案目錄，ex:

```bash
cd /home/ubuntu
sudo mkdir PROJECT
sudo chown COMPANY:www-data ./PROJECT.
sudo chmod g+s ./PROJECT
```

### 在執行 deployer 的機器設定好 ssh config

請參考 ssh config 文件說明

### 撰寫你的 deploy.php

請參考官方文件 [https://deployer.org/docs/getting-started.html](https://deployer.org/docs/getting-started.html)

### 執行部屬

```bash
dep deploy {your_stage}
```

::: tip BlackBeltTip: 

#### 如果是 nginx server，一定要加上的設定
#### Deployer Nginx SymLink 的坑

nginx server 如果 server root 使用 symbol link 的方式，有時會發生程式碼已經更新，但網頁讀取依然是舊版的問題。

解決方式: 在 nginx config `location \.php` 裡面加上，注意設定要在 `include fastcgi_params;` 後面

```bash
fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
fastcgi_param DOCUMENT_ROOT $realpath_root;
```

:::

> A simple change from $document_root to $realpath_root in NGINX configuration would make NGINX pass the actual script path(resolved after following symlinks). Since PHP-FPM now gets the actual(always new on each build) path of the script, all caching issues would go away since paths of all files will be new now.
