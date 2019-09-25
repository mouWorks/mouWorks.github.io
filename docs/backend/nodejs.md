# NodeJs

### Concepts

#### Blocking vs Non-blocking

* NodeJS 為單執行緒
    * 盡可能的避免 blocking操作, 多使用 Non-blocking
* 要使用 callback function.
* NodeJS 使用 [事件輪詢](http://blog.mixu.net/2011/02/01/understanding-the-node-js-event-loop/) (event loop)
