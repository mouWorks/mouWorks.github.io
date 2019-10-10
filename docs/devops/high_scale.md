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
            

       