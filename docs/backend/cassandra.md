# Cassandra

::: tip 
<strong>特別感謝</strong>  此為 `rainlay` 大分享技術筆記, 在此感謝! @https://github.com/rainlay
:::


## 安裝教學

公司使用 Cassandra 的方式為 Docker + Cassandra，Cassandra 版本為 3.11.3，所以請先安裝 Docker.

## Required:

* 參考 [Docker安裝文件 @docker文件](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
* 參考 [Pull Cassandra Docker Image 文件](https://hub.docker.com/_/cassandra/)

### 安裝 Docker + Cassandra

可至專案目錄下執行

```bash
sudo sh resources/cassandra_docker/cassandra-install.sh
```

* cassandra-install.sh

```bash
#!/usr/bin/env bash

# ------ install docker ------
sudo apt-get update

sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo apt-key fingerprint 0EBFCD88

sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

sudo apt-get update

sudo apt-get install docker-ce

# ------ install cassandra ------

sudo docker pull cassandra
```

### 本機運行 

可使用執行指令啟動

    sudo docker run --name COMPANY-cassandra --net=host -v /data/cassandra:/var/lib/cassandra -d --ulimit nofile=100000:100000 --ulimit nproc=32768 --ulimit memlock=-1:-1  --restart=on-failure:10 cassandra:3.11.3

或使用 Script執行

    sudo sh resources/cassandra_docker/localhost/cassandra-run.sh

* cassandra-run.sh
```bash
#!/usr/bin/env bash
sudo docker run --name COMPANY-cassandra --net=host -e "TZ=Asia/Taipei" -v /data/cassandra:/var/lib/cassandra -d --ulimit nofile=100000:100000 --ulimit nproc=32768 --ulimit memlock=-1:-1  --restart=on-failure:10 cassandra:3.11.3

```


## 安裝 Cassandra PHP PECL Extension

需注意 PHP 版本, Cassandra PHP DRIVER 最高只支援到 7.1

參考下列指令安裝（安裝方式可能因環境不同而不同）

    sudo apt-get -y install libgmp-dev

    wget http://downloads.datastax.com/cpp-driver/ubuntu/16.04/dependencies/libuv/v1.23.0/libuv1-dev_1.23.0-1_amd64.deb

    wget http://downloads.datastax.com/cpp-driver/ubuntu/16.04/dependencies/libuv/v1.23.0/libuv1_1.23.0-1_amd64.deb

    sudo dpkg -i libuv1_1.23.0-1_amd64.deb

    sudo dpkg -i libuv1-dev_1.23.0-1_amd64.deb

    wget http://downloads.datastax.com/cpp-driver/ubuntu/16.04/cassandra/v2.10.0/cassandra-cpp-driver_2.10.0-1_amd64.deb

    wget http://downloads.datastax.com/cpp-driver/ubuntu/16.04/cassandra/v2.10.0/cassandra-cpp-driver-dev_2.10.0-1_amd64.deb

    sudo dpkg -i cassandra-cpp-driver_2.10.0-1_amd64.deb

    sudo dpkg -i cassandra-cpp-driver-dev_2.10.0-1_amd64.deb

    rm libuv1_1.23.0-1_amd64.deb

    rm libuv1-dev_1.23.0-1_amd64.deb

    rm cassandra-cpp-driver_2.10.0-1_amd64.deb

    rm cassandra-cpp-driver-dev_2.10.0-1_amd64.deb

    # 安裝 cassandra extenstion
    sudo pecl install cassandra

    sudo su

    # 設定 php cassandra
    echo -e "; DataStax PHP Driver\nextension=cassandra.so" >> `php --ini | grep "Loaded Configuration" | sed -e "s|.*:\s*||"`

    echo -e "; DataStax PHP Driver\nextension=cassandra.so" >> /etc/php/7.1/fpm/php.ini

    # 檢查 cassandra extension 有無安裝成功
    php -m | grep cassandra
    php -i | grep -A 10 "^cassandra$"

### 安裝 php 套件

安裝 `moarty/cassandra-php-stubs` 套件

```
composer install
```

說明文件

[https://docs.datastax.com/en/developer/php-driver/1.3/](https://docs.datastax.com/en/developer/php-driver/1.3/)

[https://github.com/datastax/php-driver](https://github.com/datastax/php-driver)

### 命令列執行 cassandra

先進入 cassandra 的 docker 環境裡面

```
$ sudo docker exec -it COMPANY-cassandra bash
```

再來輸入 cassandra 的 bash 指令

```
$ cqlsh
Connected to Test Cluster at 127.0.0.1:9042.
[cqlsh 5.0.1 | Cassandra 3.11.3 | CQL spec 3.4.4 | Native protocol v4]
Use HELP for help.
cqlsh>
```

### 線上環境 Cassandra on docker

Cassandra-0 (seed) 10.140.0.29

```bash
sudo docker run --name COMPANY-cassandra --net=host -v /data/cassandra:/var/lib/cassandra -v /etc/cassandra/cassandra.yaml:/etc/cassandra/cassandra.yaml -d -e CASSANDRA_BROADCAST_ADDRESS=10.140.0.29 -e CASSANDRA_CLUSTER_NAME=COMPANY_cluster -e "TZ=Asia/Taipei" --ulimit nofile=100000:100000 --ulimit nproc=32768 --ulimit memlock=-1:-1  --restart=on-failure:10 cassandra:3.11.3
```

Cassandra-1 10.140.0.30

```bash
sudo docker run --name COMPANY-cassandra --net=host -v /data/cassandra:/var/lib/cassandra -v /etc/cassandra/cassandra.yaml:/etc/cassandra/cassandra.yaml -d -e CASSANDRA_BROADCAST_ADDRESS=10.140.0.30 -e CASSANDRA_SEEDS=10.140.0.29 -e CASSANDRA_CLUSTER_NAME=COMPANY_cluster -e "TZ=Asia/Taipei" --ulimit nofile=100000:100000 --ulimit nproc=32768 --ulimit memlock=-1:-1  --restart=on-failure:10 cassandra:3.11.3
```

Cassandra-2 10.140.0.32

```bash
sudo docker run --name COMPANY-cassandra --net=host -v /data/cassandra:/var/lib/cassandra -v /etc/cassandra/cassandra.yaml:/etc/cassandra/cassandra.yaml -d -e CASSANDRA_BROADCAST_ADDRESS=10.140.0.32 -e CASSANDRA_SEEDS=10.140.0.29 -e CASSANDRA_CLUSTER_NAME=COMPANY_cluster -e "TZ=Asia/Taipei" --ulimit nofile=100000:100000 --ulimit nproc=32768 --ulimit memlock=-1:-1  --restart=on-failure:10 cassandra:3.11.3
```

在基本的三台架構中，只指定一台 seeder ，但如果機器再增加的話，可以允許有一台(以上)的 Seeder，在 Seeder 以外的機器，啟動時要加上指令 `-e CASSANDRA_SEEDS=10.140.0.29`

### DEV 環境 Cassandra on docker

```bash
sudo docker run --name cassandra-dev -p 9042:9042 -p 9160:9160 -e "TZ=Asia/Taipei" -v /data/cassandra-dev:/var/lib/cassandra -d --restart=on-failure:10 cassandra:3.11.3
```

## Cassandra 維運

### 分段停機

需要將 Cassandra 停機做機器規格調整時，可採用分段停機的方式，可完成不影響服務並更新機器規格的變更。

例如公司目前有三台 Cassandra，我們可先從 Cassandra 2 開始停機，

最基本的停機的方式為直接將機器上的 cassandra docker 停止即可，
如:

```bash
sudo docker stop {cassanda id}
```

接著進入 Cassandra 0 機器, 並進入 Cassandra docker

```bash
sudo docker exec -it {cassandra id} bash
```

執行查看節點狀態指令

```bash
nodetool status
```

確認節點是否已正常下線, 狀態 (DN)，確認已下線後即可進行關機調整，
調整後重新開機一樣執行如上的節點狀態指令，確認服務狀態是否正常上線(UN)，
之後其他機器照一樣的步驟進行維運即可。

### 節點修復

當 Cassandra 資料有更新、刪除的時候，各個節點 node 之間可能會開始產生資料不一致的情況，因此我們會需要進行修復，維持節點資料的一致性，

#### 指令

進入任意一個 cassandra docker 節點後(不須至每台主機 都執行一次)，進行修復即可。

```bash
sudo docker exec -it {cassandra id} bash
nodetool repair
```

### 備份

Fabric 請參考[官方文件](http://www.fabfile.org/)介紹

Cassandra 備份為每台各自備份，所以目前配合 Python Fabric 來進行多遠端 SSH 操作

#### 執行備份

```bash
# fab -H [host1],[host2] [task_name]
fab -H cassandra-0,cassandra-1,cassandra-2 cassBackup
```

-H 表示主機名稱，這邊要注意的是你的 ssh config 已經正確設定並 Mapping 好，後面則是要對應執行的任務名稱，也又是 fabfile.py 裡面的 method name。

備份完成後會儲存在 `/data/cassandra_backup`。

#### TODO
1. 資料備份至少要先找時間做過一次，然後再設定成 crontab
1. repair也至少要先找時間做過一次，一樣設定成 crontab