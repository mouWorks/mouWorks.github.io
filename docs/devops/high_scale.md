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
    * 可以不停地加開 machine
    * 