# php-fpm 

### PHP-FPM 的內部設定

* 基本上 Nginx會接到 php-fpm, 讓 fpm 底下的 worker 去執行
* 當Nginx 502 時, 很有可能是派發給 php-fpm 但被塞爆, 所以就顯示了 502


#### 如何調整 php-fpm 的設定



#### 如何觀看 php-fpm 的狀態

* http://localhost.com/status
* 也有 Json 格式輸出的


#### 如何計算要設定多少 worker

* 基本上是按照Memory 去計算要多少worker
* 計算方法: 先抓一個process 需要的 memory 量, 再抓系統閒置多少 memory 去處理