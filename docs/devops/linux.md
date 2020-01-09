何謂 TCP/UDP:

* DNS commands: `nslookup`
	
TCP Protocol 的好處
1. 安全地交換資料

何謂 UDP:
傳輸速度較快, 需要時間更短

何謂 process?

* `ps` : 看現在既有的 running process
* `top`: 顯示出現在電腦裡面正在跑的 所有 process
* `kill` : 刪掉 process by pid
* `killall proc`: 刪掉所有的 process

* Foreground/background jobs in linux
    * `fg` : 顯示最近的前景程式 (foreground jobs)
    * `fg $name`: 把 background 的 job $name 拉到前景 
    * `bg` : 回覆原本的程式, 也會顯示出 background 程式.
    * `df` : Detail Disk usage
    * `du` : Disk Space usage 
    * `free` : Show Free Spaces

How to Tar a file

* Tar a file
    * `tar czf test.tar.gz`

* Untar a file
	* `tar xzf test.tar.gz`

How to gzip a file
* `gzip testfile`
* `gtip -d testfile.gz`

Check Domain
* `dig domain` (查詢DNS 資訊)
* `whois domain` (查看該domain 的 whois 資訊)
* `dig -x host` (Host反向查詢)
* `wget file` (下載檔案)
* `wget -c file` (恢復已經停止下載的檔案)


