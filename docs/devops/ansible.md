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

```
mkdir playbooks && cd playbooks
vg init ubunutu/trusty64 && vg up
```