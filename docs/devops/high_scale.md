# 高流量雜談

## Def: c10k issue
* Do not over-engineering

* paxol / rift / consensus  
* kafka -> 既有的 solution 即可解決

* 木桶理論 
    * 短版決定了bottleneck

* 檢視系統環節, 看那段效能最弱
    * DB不夠 -> 改用 Amazon RDS
    * Application Server 不夠 -> 
    * Load balancer 不夠 -> nginx 掛掉
        * capacity 到頂
  
* `embarrassing parallelism`
    * 應該可以不停地加開 machine
    * 情境: Http Session 放在機器上
        * 該台機器為 stateful
        * 結果造成無法加開機器
    * 若 AS 為 stateful -> nginx 需要一個 map -> 才能正確定位 httpSession
    * LB 會需要很多資源
    * AS 需要改為 `stateless`
    
* `graceful shutdown` 定義
    * 等到 all server request 結束再 shutdown
* 如果可以任意加/刪減 機器 -> AS 為 stateless 

* `File Upload` 
    * `Multipart` 
    * 如果上傳會是存在 AS 機器上
        * 上傳的檔案可能會找不到
            * 要馬都傳在同一個位置
            * 要馬傳到一個 global storage (like S3)

* `AutoScaling` 是用來省錢
    * 用在 `application server`
    * `不要` 用在 DB 
                
* `AppServer` 開起來, warmUp time 約為 60秒
    * Linux開機需要時間
    * AWS/GCP register 需要時間
    * Pull code 需要時間
    
* 難以 `Auto-Scaling` 
    * `電商網站` 搶購問題
        * `球鞋` 瞬間 20倍的流量 (1分鐘內)
    * `Happy New year` 問題
* 可能的解法:
    * 預先加開機器
    * 搶購, 用事先登記和抽籤 方式
* `Stateless` 才能 AutoScaling, `Stateful` 無法    
* `Redis/DB` -> 不用 autoscaling, 修改存 key 的規則

* `HAProxy` -> DB ScaleUp/ScaleDown
* 用 `HAProxy` 去切換              

* 超過系統流量限制就要 `等待` / `拒絕`
* 每一層都要 Rate-limiting
    * Load balancer
    * App Server
    * Caching
    * Database
* 越早擋住流量, 越能保護後方系統
* `MySQL` . max_conn -> bad idea
    * `DB Connection Pool`
        * TCP/IP three-way handshake
    * 應該在AppServer 端設定, 讓AppServer 先斷
* `LoadBalancer` 可以先設定允許的 connection 數量
* `PHP` 本身沒有 connection pool
    * `pgpool` , `proxysql` -> AppServer 上面 extension 
* `PHP` -> `proxysql` -> DB 
* `Redis` 很需要 pooling.     
    
           
       