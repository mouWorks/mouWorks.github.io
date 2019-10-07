# Redis Vs Memcached

## Summary 2017/06/03

```
Redis is more powerful, more popular, and better supported than memcached. 
Memcached can only do a small fraction of the things Redis can do. 
Redis is better even where their features overlap.
For anything new, use Redis.
``` 

### Go for Memcached if:
* 簡單的 Key-value store (string)
* 已經在使用既有的 Memcached

### Go for Redis if:
* 複雜資料型態 (string, hash, list, set)
* 排序 in-memory資料
* 持久 key儲存
* 需要讀寫分離
* 需要快照

* [中文比較](https://www.ecloudture.com/aws-elasticache-redis-and-memcache/)
* [StackOverflow](https://stackoverflow.com/questions/10558465/memcached-vs-redis)

## Memcached

```
Memcached is a simple volatile cache server. 
It allows you to store key/value pairs where the value is limited to being a string up to 1MB.

It's good at this, but that's all it does. 
You can access those values by their key at extremely high speed, often saturating available network or even memory bandwidth.
```

## Redis

```
Redis can do the same jobs as memcached can, and can do them better.

Redis can act as a cache as well.
 It can store key/value pairs too. In redis they can even be up to 512MB.

You can turn off persistence and it will happily lose your data on restart too. 
If you want your cache to survive restarts it lets you do that as well. 
In fact, that's the default.
```