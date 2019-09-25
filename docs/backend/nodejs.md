# NodeJs

### Concepts

#### Blocking vs Non-blocking

* NodeJS 為單執行緒
    * 盡可能的避免 blocking操作, 多使用 Non-blocking
* 要使用 callback function.
* NodeJS 使用 [事件輪詢](http://blog.mixu.net/2011/02/01/understanding-the-node-js-event-loop/) (event loop)

* Apache 為 multithread, 會 spawn thread, 缺點為大量消耗 memory
* Nginx, NodeJs 不是 multithreaded, 為 single threaded, event-based

##### NodeJs is single thread

* 一個 `sleep()` 就會讓整個nodeJS卡住
* 如果 CPU-intensive 的運算, 會卡住大家 (大家都要等你)


 

