# Queue-Beanstalkd
 
:::
<strong>特別感謝</strong>  此為 `rainlay` 大分享技術筆記, 在此感謝! @https://github.com/rainlay
:::


## 名詞說明

* `beanstalkd` -> 一個PHP用的 Queue (但僅是queue, 需要用工具去寫入和取出)
* `supervisor` -> 對queue 進行操作的工具
* `pheanstalkd` -> To be updated.

### PHP 連接 beanstalkd 設定

依照環境設定分為

1. development
2. testing
3. production

皆位於 `application/config/{environment}/COMPANY.php

而專案讀取的檔案位置於 `application/config/COMPANY.php`，因此在部屬時，需將對應環境的 COMPANY.php 複製到 `application/config/COMPANY.php`，才可以讓 PHP 正確的連接。

### environment.env

這裡 `env` File 儲存著 DB 連線資訊等敏感資料，因此要設定正確 beanstalkd 才能正確的連線到資料庫。

env file 不會進入 git, 如果是新的專案部屬或修改參數，請參考 environment.example 去新增或修改 environment.env 檔案。

## Project Supervisor Config

當今天想要新增一個 php worker 去處理 queue 的相關事務時，除了撰寫 php 程式碼以外，還要設定好相對應的 supervisor config，才能讓 supervisor 將 php 執行起來成 daemon process。

### 路徑

依據開發環境如：

1. `local`
1. `development`
1. `production`
1. `testing`

皆位於 `supervisor/` 下。

### config 解說

基本上一個 program worker 就會對應到一個相對應的 config, config 可參考下面範例與解釋

```bash
[program:push_task_consumer]
directory = /home/ubuntu/beanstalkd_worker/current
command=sudo php index.php push_task_consumer
process_name = %(program_name)s_%(process_num)02d
numprocs = 20 ;執行的線程數
autostart = true ;自動啟動
autorestart = true ;自動重新啟動
startsecs = 3 ;啟動 n 秒後 如果沒有結束 表示正常啟動
startretries = 3 ;啟動失敗重試次數
user = root
redirect_stderr = true
stdout_logfile_maxbytes = 20MB ;Log 大小
stdout_logfile_backups = 3 ;Log 備份數量
stopasgroup=true
killasgroup=true
```

### supervisor config 部屬

Config 路徑

```bash
`/etc/supervisor/conf.d`
```

如果是 deployer 部屬的話，會將上述專案裡面的 `/supervisor/*.conf` 複製到 `/etc/supervisor/conf.d` 裡面，這樣 supervisor 才能正確讀取，如果要手動部屬的話，請記得手動複製對應環境的 config 至 `/etc/supervisor/conf.d`

## Beanstalkd Config

位置

```bash
/etc/default/beanstalkd
```

這邊可能會調整到的參數

```bash
# listen address 預設應該是 127.0.0.1
BEANSTALKD_LISTEN_ADDR=0.0.0.0

# listen port
BEANSTALKD_LISTEN_PORT=11300
```


## beanstalkd 指令

查看 beanstalkd 狀態

```bash
service beanstalkd status
```

重啟 beanstalkd

```bash
service beanstalkd restart
```

停止 beanstalkd

```bash
service beanstalkd stop
```

啟動 beanstalkd

```bash
service beanstalkd start
```

## Supervisor 指令

服務啟動

```bash
sudo service supervisor start 
```

OR

```bash
sudo service supervisord start
```

服務狀態

```bash
sudo service supervisor status 
```

OR

```bash
sudo service supervisord status
```

服務關閉

```bash
sudo service supervisor stop 
```

OR

```bash
sudo service supervisord stop
```

## Supervisorctl 管理線程

查看 supervisor 線程狀態

```bash
sudo supervisorctl status
```

重新讀取 supervisor config

```bash
sudo supervisorctl reread
```

更新 supervisor 線程

```bash
sudo supervisorctl update
```

重啟 supervisor 線程

```bash
sudo supervisorctl restart all
```

啟動 supervisor 線程

```bash
sudo supervisorctl restart all
```

### 每次有新的程式部屬時 執行以下指令

```bash
sudo supervisorctl reread
sudo supervisorctl update
```

### 監控頁面

* 已移除, 待補上


### 簡單錯誤排除

* 檢查線程狀態
  ```
  $ sudo supervisorctl status
  chat_message_consumer:chat_message_consumer_00   FATAL     Exited too quickly (process log may have details)
  chat_message_consumer:chat_message_consumer_01   FATAL     Exited too quickly (process log may have details)
  chat_message_consumer:chat_message_consumer_02   RUNNING   pid 175, uptime 20 days, 1:39:42
  chat_message_consumer:chat_message_consumer_03   RUNNING   pid 205, uptime 20 days, 1:36:20
  chat_message_consumer:chat_message_consumer_04   RUNNING   pid 29932, uptime 19 days, 10:36:33
  chat_message_consumer:chat_message_consumer_05   FATAL     Exited too quickly (process log may have details)
  chat_message_consumer:chat_message_consumer_06   FATAL     Exited too quickly (process log may have details)
  chat_message_consumer:chat_message_consumer_07   FATAL     Exited too quickly (process log may have details)
  ...
  ```

* 清掉 queue 裡的 todo (重開就可以了)
  ```
  sudo service beanstalkd restart
  ``` 

* 如果 supervisorctl 有線程掛掉，重開就可以了
  ```
  sudo supervisorctl restart all
  ```

* 搜尋 log
  ```
  # log 目錄
  cd /var/log/supervisor

  # 搜尋
  grep -inR '你要找的關鍵字' .

  # 看你要的 log
  vim chat_message_consumer_13-stdout---supervisor-m2aQ6P.log
  ```

### 本機安裝 queue server
#### clone 程式
```
cd ~/Code
git clone git@bitbucket.org:COMPANY_rd/beanstalkd_worker.git
```

#### 複製 config 檔
先登入進 vagrant 
```
vagrant ssh
```

複製設定並重開服務
```
# 再複製設定
cp /home/vagrant/Code/beanstalkd_worker/supervisor/local/* /etc/supervisor/conf.d/

# 重開服務
sudo service supervisor restart
sudo supervisorctl reread
sudo supervisorctl update
```

查看狀態
```
$ sudo supervisorctl status
chat_message_consumer:chat_message_consumer_00   RUNNING   pid 217, uptime 0:00:13
notice_consumer:notice_consumer_00               RUNNING   pid 21, uptime 0:00:13
```

看到 RUNNING 就代表執行成功，失敗的話請到 `/var/log/supervisor/` 隨便找一個 log 看錯誤

#### 補充筆記

1. beanstalkd 改完設定之後，一定要重開機
2. 會架 `beanstalkd-ha` 是因為 gcp loadbalancer 只支援 80 443
3. `beanstalkd-ha` 機器裡放的是 `haproxy`, 設定放在 `/etc/haproxy/haproxy.cfg`
4. 記得 `beanstalkd-1` 目前沒有在 haproxy 裡面，如果太忙的話要把 `beanstalkd-1` 打開並修改 `haproxy` 設定
