# 在 PHP 使用 Redis

:::
<strong>特別感謝</strong>  此為 `rainlay` 大分享技術筆記, 在此感謝! @https://github.com/rainlay
:::


### 語法

```php
$redis = Z_redis::getClient();
```

公司使用 [phpredis extension](https://github.com/phpredis/phpredis) 為 redis Client，
外部包了一層 Z_redis Library 方便連接 redis，已經設定在 ci 裡面 autoload

如本機開發使用前需先安裝 php redis extension，安裝方式請參考[官方文件](https://github.com/phpredis/phpredis/blob/develop/INSTALL.markdown)

`註:這裡其實也可以用一般的 composer 套件來連 redis, 但選擇 extension 的原因是為 php extension 都是用 C 來寫的，效能最好。`

## 命名規則

建議以 : 號做為連接名字符號，大方向的命名方式可以使用 類型 + ID 來做命名。如:

```json
user:1
```

可解讀 Key user:1 為 user id = 1 的使用者資料。

### key 名稱不可過長

> Very long keys are not a good idea. For instance a key of 1024 bytes is a bad idea not only memory-wise, but also because the lookup of the key in the dataset may require several costly key-comparisons. Even when the task at hand is to match the existence of a large value,hashing it (for example with SHA1) is a better idea, especially from the perspective of memory and bandwidth.

### key 名稱不要太短，保持可讀性

> Very short keys are often not a good idea. There is little point in writing "u1000flw" as a key if you can instead write "user:1000:followers". The latter is more readable and the added space is minor compared to the space used by the key object itself and the value object. While short keys will obviously consume a bit less memory, your job is to find the right balance.

### 盡量保持一致的命名風格

> Try to stick with a schema. For instance "object-type:id" is a good idea, as in "user:1000". Dots or dashes are often used for multi-word fields, as in "comment:1234:reply.to" or "comment:1234:reply-to".

## 參考連結

### 開發規範

[An introduction to Redis data types and abstractions](https://redis.io/topics/data-types-intro)

[Redis开发规范一二三](http://ju.outofmemory.cn/entry/218983)

### PHP Redis

[https://github.com/phpredis/phpredis](https://github.com/phpredis/phpredis)

### PHP redis extension 安裝

如果你的 vagrant/server 還沒有裝 php redis extension ，請執行以下指令，這裡請注意你的 php 版本。

* SSH 進入 Vagrant VM

```bash
sudo pecl install redis
echo -e "; Redis PHP Driver\nextension=redis.so" >> `php --ini | grep "Loaded Configuration" | sed -e "s|.*:\s*||"`      
echo -e "; Redis PHP Driver\nextension=redis.so" >> /etc/php/7.1/fpm/php.ini
```

* 別忘了重開 php-fpm

```bash
sudo service php7.1-fpm restart
```

## 其他 Redis 事項

### config

路徑

```bash
/etc/redis/config
```

Port 設定

```bash
bind 0.0.0.0
```

log 位置/檔名

```bash
logfile "/var/lib/redis/redis.log"
```

db 備份

路徑

```bash
dir /var/lib/redis
```

檔名 

```bash
dbfilename dump.rdb
```

密碼設定

```bash
requirepass {your_password}
```
