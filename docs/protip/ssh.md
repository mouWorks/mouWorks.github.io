SSH && SCP
---

## SSH

* Create SSH Key


* Copy SSH Public Key
* ```cat ~/.ssh/id_rsa.pub | pbcopy ```
* 用 `pbcopy` 直接把 value 弄到剪貼簿上

## SCP

* 前提是你已經可以用 SSH 登入該 Server
* `不論是傳檔案到Server, or 從 server 拉檔案, 都是用 SCP 指令`
* 從 SERVER 拿檔案
    * ```scp {USER_ID}@{SERVER_IP}:{SERVER_FILE_PATH} {LOCAL_PATH}```
* 傳檔案 到 SERVER
    * 
