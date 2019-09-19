# Ansible

### 定義:
* 推式更新 (pushed based, 要安裝的電腦不需要額外設定)

### 本機電腦安裝 Ansible
* 需要 Python
* `sudo pip install ansible`

### Ansible 的組態檔案
* ansible.cfg

### Ansible 如何控制機器
#### Remote Machine: SSH
#### Local : Vagrant


### And....



#### Steps 執行步驟

1. 專案 folder 建立一個 `playbook` folder
2. Vg init 一個標準 ubuntu image
3. Vg up

* PS, 如果 init 或者 vg up 不順, 升級 && 更新 Vagrant 和 VirtualBox
    ```
    mkdir playbooks && cd playbooks
    vg init ubunutu/trusty64 && vg up
    ```
* 看 Vagrant 的 SSH Config 訊息
    ```
    vg ssh-config
    ```

* 將IP, keyfile 寫成 `hosts` 檔案
* `hosts` -> IP, Keyfile 以及username
    * 可存放在 `/etc/ansible/` 
    * 或者可放在 Repo底下
    
* Ansible 下指令的語法
* `ansible testserver -m ping` -> 去Ping看看Server
* `ansible testserver -m command -a uptime` -> 看機器起來了多久
* `ansible testserver -a uptime` -> 同上, 預設模組的指令 
* `ansible testserver -a "tail /var/log/dmesg"` -> 去看特定log

* 需要 Root 的情境: 使用 `-b`
* `ansible testserver -b -a "tail /var/log/syslog"` -> 去看系統log, 需要root權限