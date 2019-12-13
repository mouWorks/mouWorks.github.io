A** Cloud Support Engineer (Deployment) Questions
限時: 30分鐘

1. docker stop 和 docker kill 差異為何?
``

``
2. 遇到一個 container exit(1) 4 days ago, 你會如何排除障礙?
   (盡可能詳列排除的步驟)

3. 何謂 docker 0 bridge ? 請詳列你的想法
```
docker0 bridge 
```
4. DockerPullImage 遇到以下問題, 請列出可能性以及排除障礙的步驟
   * `error: CannotPullContainerError: API error (500): Get https://111122223333.dkr.ecr.us-east-1.amazonaws.com/v2/: net/http: request canceled while waiting for connection"`

5. 當你用SSH進入Linux 機器, 請問 Connection Time Out 和 Connection Refused 差異為何?

6. 說明 Curl 和 Ping 的差異
$ping amazon.com (http://amazon.com/)
$curl amazon.com (http://amazon.com/)

7. 觀察以下 Linux Top 指令結果? 系統是否正常? 可能的排除障礙步驟?

```
top - 09:23:46 up 126 days, 11:09, 57 users, load average: 1.00, 1.00, 1.00
Tasks: 480 total, 1 running, 467 sleeping, 11 stopped, 1 zombie
Cpu(s): 2.5%us, 2.5%sy, 0.0%ni, 0.0%id, 95.0%wa, 0.0%hi, 0.0%si, 0.0%st
Mem: 2055868k total, 1682968k used, 372900k free, 21928k buffers
Swap: 4194296k total, 1550828k used, 2643468k free, 562400k cached
```

8. 客戶和你說系統 Free Memory 剩下 64M, 他們是否應該擔心? 有任何建議嗎?

ScreenShot: http://violet.tpe.thebetternetwork.com/images/q8-memory.png