# Ansible

* `PS` : 文檔內的 `vg` 均表示 `vagrant` (因有Alias設定)
* 設定參考 `mouworks/ansibleStack`

## 定義:
* 推式更新 (pushed based, 要安裝的電腦不需要額外設定)

## 本機電腦安裝 Ansible
* 需要 Python `sudo pip install ansible`

## Ansible 的組態檔案

```
├── Makefile
└── playbooks
    ├── Makefile
    ├── Vagrantfile
    ├── ansible.cfg
    ├── build_infra.yml
    ├── files
    │   ├── nginx.conf
    │   ├── nginx.crt
    │   └── nginx.key
    ├── hosts
    ├── init_DO_server.yml
    ├── templates
    │   ├── index.html.j2
    │   └── nginx.conf.j2
    ├── web-notls.yml
    └── web-tls.yml
```

* `ansible.cfg` -> Ansible組態檔的位置
* `hosts` -> 機器的設定（主要設定機器IP, Key的位置)
* `playbook` -> 設定的腳本 (要安裝什麼, 安裝的順序等等)
    * `web-notls.yml` -> 無設定 TLS 的 Nginx YML
    * `web-tls.yml` -> 有設定 TLS 

## Ansible 如何控制機器

* 均由 SSH 來處理
* Local Vagrant 需要再額外設定

## Steps 執行步驟

* PS, 如果 init 或者 vg up 不順, 升級 && 更新 Vagrant 和 VirtualBox
    ```
    mkdir playbooks && cd playbooks
    vg init ubunutu/trusty64 && vg up
    ```
* 程式說明 
    1. 專案 folder 建立一個 `playbook` folder
    2. Vg init 一個標準 ubuntu image
    3. Vg up
   
* 看 Vagrant 的 SSH Config 訊息
    ```
    vg ssh-config
    ```

* 將IP, keyfile 寫成 `hosts` 檔案
* `hosts` -> IP, Keyfile 以及username
    * 可存放在 `/etc/ansible/` -> 但這是本機檔案, 較不建議
    * 或者可放在 Repo底下 (建議做法, Config as code)
    
* Ansible 下指令的語法
    * `ansible testserver -m ping` -> 去Ping看看Server
    * `ansible testserver -m command -a uptime` -> 看機器起來了多久
    * `ansible testserver -a uptime` -> 同上, 預設模組的指令 
    * `ansible testserver -a "tail /var/log/dmesg"` -> 去看特定log

* 需要 Root 的情境: 使用 `-b`
    * `ansible testserver -b -a "tail /var/log/syslog"` -> 去看系統log, 需要root權限

* 例如安裝 `nginx`
    * `ansible testserver -b -m apt -a name=nginx`
    
* `DigitalOcean` 需要用 `root` 登入以及操作:
    * `ansible production -m ping -u root` (後方加上 `-u root`)
    * 或者在 ansible 的 `host` 檔案內加上 ` ansible_ssh_user=root`   
    
### 修改 Vagrant 設定讓ansible可以溝通

* `Vagrantfile` 內加上這個設定
    ```
      config.vm.network "forwarded_port", guest: 80, host: 8082
      config.vm.network "forwarded_port", guest: 443, host: 8443
    ```
* Vagrant Reload `vg reload`


### 寫第一個 playbook

* `web-notls.yml` -> 寫一個安裝 nginx 的 playbook
* 如何下指令
    ```
      ansible-playbook web-notls.yml
    ```   

* Ansible 特性: 會紀錄做過哪些事情, 故 安裝 nginx 如果已經裝過, 且有紀錄, 則下次只會顯示 ok, 表示跳過該 step
    
    
### 第二個 playbook: web with TLS

* 自己產Key

    ```
    openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -subj /CN=localhost -keyout files/nginx.key -out files/nginx.crt
    ```    

* `web-tls.yml` -> 有 SSL 的 Nginx 設定
* ansible 使用 `jinja2` 模板, 類似 mustache

### 主要由一個 .yml 將步驟寫好



### 雙機流設定

* 設定兩台機器
    * 一台 Vagrant (本機快速開發測)
    * 一台 DO (遠端機器)
    
* Vagrant 機 -> Host 設定名為 `local`
* DO 機 -> Host 設定名為 `production`

* 當 script 要單獨跑的時候, host 指定 `local` 或是 `production`
* 當 都要跑的時候, 設定 `all` -> 兩者都跑

* 如 `ans-init-DO` 為 DigitalOcean 設定機器的資訊, 故 local 不需要跑

    
    
### Ansible 搞定 SSL Cert (只在 DigitalOcean有效)

* 使用 `AnsibleStack` 那個 Repo裡面的安裝指令

* DigitalOcean 開一個 Droplet, 紀錄該 Droplet IP
* `AnsibleStack` 去調整 `host`, 填入 Droplet Ip
* 跑 `make ans-init-DO` 做一些 Droplet 機器的初始化設定
* 跑 `make ans-init` 
    * 裝 nginx
    * 裝 cert-bot
    * 設定 cert-bot 的東西
    * 完成後, 你的 domain 應該會有 Https
* 記得到 `digitalOcean` 去把 domain指向你的 droplet

* Wildcard domain TLS
* `ansible` 似乎無法一步自動完成, 所以直接 ssh 進去機器裝
* 先SSH進去 `DO` server
```
certbot certonly --server https://acme-v02.api.letsencrypt.org/directory --manual --preferred-challenges dns -d *.YOUR_DOMAIN
``` 
* 這個是使用 `dns` 驗證
* 跑完最後一部之前, 會有個 `Acme-challenge` 設定
* 去 DO panel, 新增一筆 `TXT`
* `_acme-challenge` : `sdiojasdjqwijdqodjiq` 一串碼


* 檢查是否能Renew
```
certbot renew --dry-run
```
* 如果錯誤 可能是因為 nginx 還開著, 記得先關掉

* 設定自動Renew
```
0 0 20 */2 * /usr/bin/certbot renew --quiet --no-self-upgrade --post-hook "service nginx restart"
```
