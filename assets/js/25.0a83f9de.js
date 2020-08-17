(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{371:function(v,_,e){"use strict";e.r(_);var i=e(42),l=Object(i.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"高流量雜談"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高流量雜談"}},[v._v("#")]),v._v(" 高流量雜談")]),v._v(" "),e("h2",{attrs:{id:"def-c10k-issue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#def-c10k-issue"}},[v._v("#")]),v._v(" Def: c10k issue")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("Do not over-engineering")])]),v._v(" "),e("li",[e("p",[v._v("paxol / rift / consensus")])]),v._v(" "),e("li",[e("p",[v._v("kafka -> 既有的 solution 即可解決")])]),v._v(" "),e("li",[e("p",[v._v("木桶理論")]),v._v(" "),e("ul",[e("li",[v._v("短版決定了bottleneck")])])]),v._v(" "),e("li",[e("p",[v._v("檢視系統環節, 看那段效能最弱")]),v._v(" "),e("ul",[e("li",[v._v("DB不夠 -> 改用 Amazon RDS")]),v._v(" "),e("li",[v._v("Application Server 不夠 ->")]),v._v(" "),e("li",[v._v("Load balancer 不夠 -> nginx 掛掉\n"),e("ul",[e("li",[v._v("capacity 到頂")])])])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("embarrassing parallelism")])]),v._v(" "),e("ul",[e("li",[v._v("應該可以不停地加開 machine")]),v._v(" "),e("li",[v._v("情境: Http Session 放在機器上\n"),e("ul",[e("li",[v._v("該台機器為 stateful")]),v._v(" "),e("li",[v._v("結果造成無法加開機器")])])]),v._v(" "),e("li",[v._v("若 AS 為 stateful -> nginx 需要一個 map -> 才能正確定位 httpSession")]),v._v(" "),e("li",[v._v("LB 會需要很多資源")]),v._v(" "),e("li",[v._v("AS 需要改為 "),e("code",[v._v("stateless")])])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("graceful shutdown")]),v._v(" 定義")]),v._v(" "),e("ul",[e("li",[v._v("等到 all server request 結束再 shutdown")])])]),v._v(" "),e("li",[e("p",[v._v("如果可以任意加/刪減 機器 -> AS 為 stateless")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("File Upload")])]),v._v(" "),e("ul",[e("li",[e("code",[v._v("Multipart")])]),v._v(" "),e("li",[v._v("如果上傳會是存在 AS 機器上\n"),e("ul",[e("li",[v._v("上傳的檔案可能會找不到\n"),e("ul",[e("li",[v._v("要馬都傳在同一個位置")]),v._v(" "),e("li",[v._v("要馬傳到一個 global storage (like S3)")])])])])])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("AutoScaling")]),v._v(" 是用來省錢")]),v._v(" "),e("ul",[e("li",[v._v("用在 "),e("code",[v._v("application server")])]),v._v(" "),e("li",[e("code",[v._v("不要")]),v._v(" 用在 DB")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("AppServer")]),v._v(" 開起來, warmUp time 約為 60秒")]),v._v(" "),e("ul",[e("li",[v._v("Linux開機需要時間")]),v._v(" "),e("li",[v._v("AWS/GCP register 需要時間")]),v._v(" "),e("li",[v._v("Pull code 需要時間")])])]),v._v(" "),e("li",[e("p",[v._v("難以 "),e("code",[v._v("Auto-Scaling")])]),v._v(" "),e("ul",[e("li",[e("code",[v._v("電商網站")]),v._v(" 搶購問題\n"),e("ul",[e("li",[e("code",[v._v("球鞋")]),v._v(" 瞬間 20倍的流量 (1分鐘內)")])])]),v._v(" "),e("li",[e("code",[v._v("Happy New year")]),v._v(" 問題")])])]),v._v(" "),e("li",[e("p",[v._v("可能的解法:")]),v._v(" "),e("ul",[e("li",[v._v("預先加開機器")]),v._v(" "),e("li",[v._v("搶購, 用事先登記和抽籤 方式")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("Stateless")]),v._v(" 才能 AutoScaling, "),e("code",[v._v("Stateful")]),v._v(" 無法")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("Redis/DB")]),v._v(" -> 不用 autoscaling, 修改存 key 的規則")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("HAProxy")]),v._v(" -> DB ScaleUp/ScaleDown")])]),v._v(" "),e("li",[e("p",[v._v("用 "),e("code",[v._v("HAProxy")]),v._v(" 去切換")])]),v._v(" "),e("li",[e("p",[v._v("超過系統流量限制就要 "),e("code",[v._v("等待")]),v._v(" / "),e("code",[v._v("拒絕")])])]),v._v(" "),e("li",[e("p",[v._v("每一層都要 Rate-limiting")]),v._v(" "),e("ul",[e("li",[v._v("Load balancer")]),v._v(" "),e("li",[v._v("App Server")]),v._v(" "),e("li",[v._v("Caching")]),v._v(" "),e("li",[v._v("Database")])])]),v._v(" "),e("li",[e("p",[v._v("越早擋住流量, 越能保護後方系統")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("MySQL")]),v._v(" . max_conn -> bad idea")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("DB Connection Pool")]),v._v(" "),e("ul",[e("li",[v._v("TCP/IP three-way handshake")])])]),v._v(" "),e("li",[v._v("應該在AppServer 端設定, 讓AppServer 先斷")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("LoadBalancer")]),v._v(" 可以先設定允許的 connection 數量")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("PHP")]),v._v(" 本身沒有 connection pool")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("pgpool")]),v._v(" , "),e("code",[v._v("proxysql")]),v._v(" -> AppServer 上面 extension")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("PHP")]),v._v(" -> "),e("code",[v._v("proxysql")]),v._v(" -> DB")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("Redis")]),v._v(" 很需要 pooling.")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("DB")]),v._v(" 大約會用到 25%~ 50% 的時間")]),v._v(" "),e("ul",[e("li",[v._v("約 "),e("code",[v._v("50%")]),v._v(" 時間在 "),e("code",[v._v("AppServer")])]),v._v(" "),e("li",[v._v("約 "),e("code",[v._v("50%")]),v._v(" 時間在 "),e("code",[v._v("DB")])])])]),v._v(" "),e("li",[e("p",[v._v("等待時會持續佔用資源")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("TCP/IP Conn")])]),v._v(" "),e("li",[e("code",[v._v("Main Memory")])]),v._v(" "),e("li",[e("code",[v._v("CPU Thread")])])])]),v._v(" "),e("li",[e("p",[v._v("用戶的 "),e("code",[v._v("F5")]),v._v(", 之前的 Request 並不會取消 (依然消耗資源)")])])]),v._v(" "),e("h3",{attrs:{id:"thread-pool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thread-pool"}},[v._v("#")]),v._v(" Thread pool")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("每個工作開一個 thread 來跑 -> bad idea")])]),v._v(" "),e("li",[e("p",[v._v("先按照 cpu 建立 worker thread pool")]),v._v(" "),e("ul",[e("li",[v._v("工作丟到 worker")]),v._v(" "),e("li",[v._v("PHP-FPM 架構")]),v._v(" "),e("li",[e("code",[v._v("manager-worker pattern")])])])]),v._v(" "),e("li",[e("p",[v._v("i.e 16-core VM")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("16-thread")]),v._v(" : works but pricy")]),v._v(" "),e("li",[v._v("32/64 thread")])])]),v._v(" "),e("li",[e("p",[v._v("Java -> JVM(threading management)")])]),v._v(" "),e("li",[e("p",[v._v("Golang -> binary包VM")]),v._v(" "),e("ul",[e("li",[v._v("threading management")])])])]),v._v(" "),e("h2",{attrs:{id:"metrics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metrics"}},[v._v("#")]),v._v(" Metrics")]),v._v(" "),e("ul",[e("li",[v._v("需要 Track 系統的 Metrics")]),v._v(" "),e("li",[v._v("當有問題發生時, 才有辦法追蹤\n"),e("ul",[e("li",[v._v("打開的 connection 沒有關掉 ?")])])])]),v._v(" "),e("h2",{attrs:{id:"logging"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[v._v("#")]),v._v(" Logging")]),v._v(" "),e("ul",[e("li",[v._v("沒錢 -> logrotate -> AWS S3")]),v._v(" "),e("li",[v._v("有錢 -> ELK")]),v._v(" "),e("li",[v._v("DB Status Dump 關鍵 !")])]),v._v(" "),e("h2",{attrs:{id:"monitor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#monitor"}},[v._v("#")]),v._v(" Monitor")]),v._v(" "),e("ul",[e("li",[v._v("重要資料不要放 log / metrics")]),v._v(" "),e("li",[v._v("log -> debug用, 重組案情\n"),e("ul",[e("li",[v._v("sampling -> 取樣放 log 即可.")]),v._v(" "),e("li",[v._v("重要data 不要放到 log")])])]),v._v(" "),e("li",[v._v("metrix -> 監測系統是否出事")])]),v._v(" "),e("h2",{attrs:{id:"system-tuning"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#system-tuning"}},[v._v("#")]),v._v(" System tuning")]),v._v(" "),e("ul",[e("li",[v._v("沒有足夠的 metrics 則無法優化")]),v._v(" "),e("li",[v._v("先設定 Metrics, 再按照判斷去優化")])]),v._v(" "),e("h2",{attrs:{id:"節省io"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#節省io"}},[v._v("#")]),v._v(" 節省IO")]),v._v(" "),e("ul",[e("li",[v._v("AppServer 可以 AutoScale, DB/Cache 無法")]),v._v(" "),e("li",[v._v("DB/Cache最大問題就是IO")]),v._v(" "),e("li",[v._v("Compression 可以節省很多 Network/storage IO")]),v._v(" "),e("li",[v._v("Pagination 分頁")])]),v._v(" "),e("h2",{attrs:{id:"hotspot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hotspot"}},[v._v("#")]),v._v(" Hotspot")]),v._v(" "),e("ul",[e("li",[v._v("不管 RDBMS/NoSQL,都只有一份資料")]),v._v(" "),e("li",[v._v("一份 data, 有 strong consistency")]),v._v(" "),e("li",[v._v("hotspot 是卡 single thread 效能")])]),v._v(" "),e("h2",{attrs:{id:"cache-ttl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache-ttl"}},[v._v("#")]),v._v(" Cache TTL")]),v._v(" "),e("ul",[e("li",[v._v("Redis: single thread. 小心啊")]),v._v(" "),e("li",[v._v("Cache 一定要設定 TTL.")]),v._v(" "),e("li",[v._v("如果用Redis原生自己處理, "),e("code",[v._v("過期功能")]),v._v(" 就會集中在 "),e("code",[v._v("peak hour")]),v._v("發生, 又因為 "),e("code",[v._v("Redis single thread")]),v._v(" , 會造成很慢")]),v._v(" "),e("li",[v._v("Redis LRU 可能會清理錯 data")])]),v._v(" "),e("h2",{attrs:{id:"microservice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#microservice"}},[v._v("#")]),v._v(" Microservice")]),v._v(" "),e("ul",[e("li",[v._v("商業邏輯垂直切割\n"),e("ul",[e("li",[v._v("Service 獨立生存, 獨立功能")])])]),v._v(" "),e("li",[v._v("不要水平切割\n"),e("ul",[e("li",[v._v("User -> ServiceA -> ServiceB -> DB")]),v._v(" "),e("li",[v._v("if ServiceB Die and all dies")])])])])])}),[],!1,null,null,null);_.default=l.exports}}]);