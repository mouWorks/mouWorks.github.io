# 效能監控工具 

## Blackfire

* 類似的有 Xprof, Tideways 等等其他

### 安裝需求

* 免費版本需要:
    1. 去 blackfire 申請帳號
    2. Server 上面要裝 agent
    3. 需要呼叫的電腦 (如你在工作的mac) 需要裝 cli
    
### 用法

* 將覺得很慢的 Request 轉成 curl 呼叫
* blackfire cli 下指令

```bash
blackfire curl http://aaa.bbb.cc
```

* 然後再去 blackfire 網站看分析結果 

* 分析CLI [文件](https://blackfire.io/docs/cookbooks/profiling-cli)

### 觀看報告

* 看紅色 path即可 (就是比較慢的)
* x 代表呼叫的次數
* 點進去細項可以看到 `Time` 和 `Mem` Usage

