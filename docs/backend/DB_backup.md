# DB 系統備份

::: 
<strong>特別感謝</strong>  此為 `rainlay` 大分享技術筆記, 在此感謝! @https://github.com/rainlay
:::


* mysql/mariadb/percona

#### Mysql系 DB 分支

* Mysql (但已被Oracle買下...)
* MariaDB (Mysql後的開源fork)
* Percona (Mysql的另外一個fork, 有公司營運)

#### 備份方式的說明

* 邏輯性備份: 類似 mysqldump 
    * 逐項export出來, 類似匯出
    * 需時較久, 資料量一大之後, 很容易Fail
    * 過程中會影響到Prod Database
    
* 物理性備份: 類似 xtrabackup
    * 類似DB檔案直接Copy
    * 需時較短, 較不影響 Prod Database

##### MysqlDump

* 待補上

##### XtraBackup

* Percona 所出的一個DB備份功能
* 物理性備份

##### Mariadb backup 

* Percona XtraBackup 再 fork 出來的版本

#### 安裝 mariadb backup

* 建議將 MariaDB升到 10.3以上版本
* 安裝方式

```bash
apt-get install mariadb-backup
```

#### 完整備份

```bash
mariabackup --user=keeper \
            --password=PASSWORD \
            --backup \
            --target-dir=/data/dbbackup/;
```
* --user 你的DB User
* --password 你的DB Password
* --backup 使用完整備份
* --target-dir 備份資料放置的目錄      

## 還原

#### Prepare

回復資料庫之前，需先進行 "Prepare" 的動作

```bash
# 先將 MySQL 停止
service mysql stop

# Prepare
mariabackup --prepare --target-dir=/data/dbbackup/
```
#### Restore

```bash
# 刪除 mysql 資料庫位置的資料
rm -r /var/lib/mysql/*

# 還原資料庫
mariabackup --copy-back --target-dir=/data/dbbackup/

# 如果資料 owner 非 mysql 須改為 mysql 否則會有權限問題
sudo chown -R mysql:mysql /var/lib/mysql

# 備份完成，啟動　MySQL
sudo service mysql start
```

## Reference

* [mariabackup full-backup](https://mariadb.com/kb/en/library/full-backup-and-restore-with-mariabackup/)
* [mariabackup-options](https://mariadb.com/kb/en/library/mariabackup-options/)

