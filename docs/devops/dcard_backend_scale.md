# Dcard Sharing

https://hackmd.io/@yckao/Dcard-TechSharing-20230419#/8

-   Scalibility

-   抽卡: 讀 >> 寫
-   EC: 好物研究室
-   討論區: Forum
    _ 全站推播
    _ 所有人都去看同一篇文章 \* 所有人對同一篇文章互動
    ![](https://i.imgur.com/UO4jPE2.png)
    ![](https://i.imgur.com/sOilJf9.png)
    ![](https://i.imgur.com/PJwY62S.png)

-   GraphQL
-   DAO: Data Access Object
-   TinyLFU
-   Redis-6
    -   Server Assist client-side cache
    -   LFU
    -   LRU
-   Database
    -   Materialized View
        -   某種程度的 cache
-   CDC:
    -   OfflineDB
    -   Read Cache
-   Materilized View

    -   Trade off: 難以維護
    -   Refresh 很佔用 DB 資源

-   看板列表: linkedlist
-   Post 本身和 ReationCount 解開耦合

    -   分開處理

-   Sync Job

-   Append only, prevent lock-wait

-   tracing
    -   jaeger, grafana temple
-   logging
    -
-   monitoring
