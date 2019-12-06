# Socket - GatewayWorker

:::  tip
<strong>特別感謝</strong>  此為 `rainlay` 大分享技術筆記, 在此感謝! @https://github.com/rainlay
:::

## 名詞說明

### `workerman/gatewayworker` 是一套 Socket 框架

[官方文件](http://doc2.workerman.net/gateway-worker-separation.html)

* `gateway`
* `register`
* `worker` 

```
當初為了維持 HA 以及 Scalable, 台灣的 socket Server 架設的方式為 
Master-worker 分散式部屬方式，
Master 負責的部分為 gateway, register,
Worker 的部分則為 Business Worker,因此如果發生系統瓶頸時, 
看是在 gateway的部分或者 worker 的部分 loading 較高，
即可新增 Master 或 Worker 的機器即可
```

因TH目前只有作答監控且使用者人數較低的原因，因此 Server 並沒有以分散式架構進行部屬，
全部服務皆為同一台。

## Socket Server 操作

這邊只介紹常用的幾個指令

### 啟動

至專案目錄執行

```bash
sudo php start.php start -d
```

`start` 就是啟動socket server,並且會顯示 log、以及 error 等資訊，
適合 debug 使用，`-d` 則表示以 daemon 方式啟動,因此正式環境下啟動請務必加上 `-d`。

### 重載 Reload

```bash
sudo php start.php reload
```

reload 會讓 socket 重新讀取程式碼，但不會中斷服務，因此非常適合新功能上線時使用。

### 重啟

```bash
sudo php start.php restart
```

### 查看 socket 狀態

狀態的說明可參考[官方文件](http://doc.workerman.net/315185)

```bash
sudo php start.php status
```

## 專案架構

### COMPANYConfig.php

專案目錄有以下設定檔案:

* ConfigDev.php
* ConfigLocal.php
* ConfigTesting.php
* ConfigMaster.php
* ConfigWorkerOne.php

基本上這些 Config 會在部屬時因為不同的環境而去轉換成 COMPANYConfig.php
ex: websocket-master 的 COMPANYConfig 等於 ConfigMaster.php
    websocket-worker1 的 COMPANYConfig 等於 ConfigWorkerOne.php

裡面的 Config 參數決定了 Socket Server 如何啟動

#### 參數說明

##### $machineType

以什麼服務啟動 ex: Register/Gateway, BusinessWorker，像 master 的機器就是 Register/Gateway, worker 機器則是 BusinessWorker，測試機或本地環境則是 All。

##### $lanIp

該 server 的內網 IP，非分散式部屬通常就是 127.0.0.1

##### $registerAddress

register 的 server ip, 例如 worker的config 必須指到 master 機器的 ip, 否則會設定錯誤。

##### $stageMode

stageMode 主要是用在給程式判斷是否要開啟 wss 所使用(start_gateway.php)。

### 泰國 Socket DB 連線資訊

台灣的 Socket 目前並不直接連線 Database, 故跳過。

#### dotenv

鑑於保護敏感資訊，有別於較的專案，泰國 Socket 這邊導入了 env file[(phpdotenv)](https://github.com/vlucas/phpdotenv) 機制，將敏感資訊如 DB, Firebase token等類型資訊以 .env file 方式儲存，所以此 env file 不會存在 git 裡面，在開發以及部署正式環境時記得手動設定檔案。

檔案路徑:

```bash
/home/ubuntu/PROJECT/Applications/PROJECTApp/project_app.env
```

範例檔案路徑:

```bash
/home/ubuntu/PROJECT/Applications/PROJECTApp/project_app_example.env
```

## 程式部屬

部屬可以用兩個方式

### 一般方式

ssh 至 socket 主機，至專案目錄執行

```bash
# 更新程式碼
git pull origin master
# 讓 workerman reload 程式碼
sudo php start.php reload
```

手動部屬須注意的是 Master, Worker 等不同主機都需上去手動執行，如果以後有相關 Config 調整，必須記得手動處理。

```bash
dep deploy production
```

即可自動部屬程式碼，不管是 Master, Worker 的 config, Workerman 的 reload,等繁雜設定皆可自動完成。

