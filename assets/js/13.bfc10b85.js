(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{212:function(e,a,s){"use strict";s.r(a);var l=s(0),t=Object(l.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"ansible"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ansible","aria-hidden":"true"}},[e._v("#")]),e._v(" Ansible")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("PS")]),e._v(" : 文檔內的 "),s("code",[e._v("vg")]),e._v(" 均表示 "),s("code",[e._v("vagrant")]),e._v(" (因有Alias設定)")]),e._v(" "),s("li",[e._v("設定參考 "),s("code",[e._v("mouworks/ansibleStack")])])]),e._v(" "),s("h3",{attrs:{id:"定義"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定義","aria-hidden":"true"}},[e._v("#")]),e._v(" 定義:")]),e._v(" "),s("ul",[s("li",[e._v("推式更新 (pushed based, 要安裝的電腦不需要額外設定)")])]),e._v(" "),s("h3",{attrs:{id:"本機電腦安裝-ansible"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本機電腦安裝-ansible","aria-hidden":"true"}},[e._v("#")]),e._v(" 本機電腦安裝 Ansible")]),e._v(" "),s("ul",[s("li",[e._v("需要 Python "),s("code",[e._v("sudo pip install ansible")])])]),e._v(" "),s("h3",{attrs:{id:"ansible-的組態檔案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ansible-的組態檔案","aria-hidden":"true"}},[e._v("#")]),e._v(" Ansible 的組態檔案")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("├── Makefile\n└── playbooks\n    ├── Makefile\n    ├── Vagrantfile\n    ├── ansible.cfg\n    ├── build_infra.yml\n    ├── files\n    │   ├── nginx.conf\n    │   ├── nginx.crt\n    │   └── nginx.key\n    ├── hosts\n    ├── init_DO_server.yml\n    ├── templates\n    │   ├── index.html.j2\n    │   └── nginx.conf.j2\n    ├── web-notls.yml\n    └── web-tls.yml\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br")])]),s("ul",[s("li",[s("code",[e._v("ansible.cfg")]),e._v(" -> Ansible組態檔的位置")]),e._v(" "),s("li",[s("code",[e._v("hosts")]),e._v(" -> 機器的設定（主要設定機器IP, Key的位置)")]),e._v(" "),s("li",[s("code",[e._v("playbook")]),e._v(" -> 設定的腳本 (要安裝什麼, 安裝的順序等等)\n"),s("ul",[s("li",[s("code",[e._v("web-notls.yml")]),e._v(" -> 無設定 TLS 的 Nginx YML")]),e._v(" "),s("li",[s("code",[e._v("web-tls.yml")]),e._v(" -> 有設定 TLS")])])])]),e._v(" "),s("h3",{attrs:{id:"ansible-如何控制機器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ansible-如何控制機器","aria-hidden":"true"}},[e._v("#")]),e._v(" Ansible 如何控制機器")]),e._v(" "),s("ul",[s("li",[e._v("均由 SSH 來處理")]),e._v(" "),s("li",[e._v("Local Vagrant 需要再額外設定")])]),e._v(" "),s("h4",{attrs:{id:"steps-執行步驟"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#steps-執行步驟","aria-hidden":"true"}},[e._v("#")]),e._v(" Steps 執行步驟")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("PS, 如果 init 或者 vg up 不順, 升級 && 更新 Vagrant 和 VirtualBox")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mkdir playbooks && cd playbooks\nvg init ubunutu/trusty64 && vg up\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("程式說明")]),e._v(" "),s("ol",[s("li",[e._v("專案 folder 建立一個 "),s("code",[e._v("playbook")]),e._v(" folder")]),e._v(" "),s("li",[e._v("Vg init 一個標準 ubuntu image")]),e._v(" "),s("li",[e._v("Vg up")])])]),e._v(" "),s("li",[s("p",[e._v("看 Vagrant 的 SSH Config 訊息")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("vg ssh-config\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("將IP, keyfile 寫成 "),s("code",[e._v("hosts")]),e._v(" 檔案")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("hosts")]),e._v(" -> IP, Keyfile 以及username")]),e._v(" "),s("ul",[s("li",[e._v("可存放在 "),s("code",[e._v("/etc/ansible/")]),e._v(" -> 但這是本機檔案, 較不建議")]),e._v(" "),s("li",[e._v("或者可放在 Repo底下 (建議做法, Config as code)")])])]),e._v(" "),s("li",[s("p",[e._v("Ansible 下指令的語法")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("ansible testserver -m ping")]),e._v(" -> 去Ping看看Server")]),e._v(" "),s("li",[s("code",[e._v("ansible testserver -m command -a uptime")]),e._v(" -> 看機器起來了多久")]),e._v(" "),s("li",[s("code",[e._v("ansible testserver -a uptime")]),e._v(" -> 同上, 預設模組的指令")]),e._v(" "),s("li",[s("code",[e._v('ansible testserver -a "tail /var/log/dmesg"')]),e._v(" -> 去看特定log")])])]),e._v(" "),s("li",[s("p",[e._v("需要 Root 的情境: 使用 "),s("code",[e._v("-b")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v('ansible testserver -b -a "tail /var/log/syslog"')]),e._v(" -> 去看系統log, 需要root權限")])])]),e._v(" "),s("li",[s("p",[e._v("例如安裝 "),s("code",[e._v("nginx")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("ansible testserver -b -m apt -a name=nginx")])])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("DigitalOcean")]),e._v(" 需要用 "),s("code",[e._v("root")]),e._v(" 登入以及操作:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("ansible production -m ping -u root")]),e._v(" (後方加上 "),s("code",[e._v("-u root")]),e._v(")")]),e._v(" "),s("li",[e._v("或者在 ansible 的 "),s("code",[e._v("host")]),e._v(" 檔案內加上 "),s("code",[e._v("ansible_ssh_user=root")])])])])]),e._v(" "),s("h5",{attrs:{id:"修改-vagrant-設定讓ansible可以溝通"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改-vagrant-設定讓ansible可以溝通","aria-hidden":"true"}},[e._v("#")]),e._v(" 修改 Vagrant 設定讓ansible可以溝通")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Vagrantfile")]),e._v(" 內加上這個設定"),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('  config.vm.network "forwarded_port", guest: 80, host: 8082\n  config.vm.network "forwarded_port", guest: 443, host: 8443\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])])]),e._v(" "),s("li",[e._v("Vagrant Reload "),s("code",[e._v("vg reload")])])]),e._v(" "),s("h5",{attrs:{id:"寫第一個-playbook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#寫第一個-playbook","aria-hidden":"true"}},[e._v("#")]),e._v(" 寫第一個 playbook")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("web-notls.yml")]),e._v(" -> 寫一個安裝 nginx 的 playbook")])]),e._v(" "),s("li",[s("p",[e._v("如何下指令")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  ansible-playbook web-notls.yml\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("Ansible 特性: 會紀錄做過哪些事情, 故 安裝 nginx 如果已經裝過, 且有紀錄, 則下次只會顯示 ok, 表示跳過該 step")])])]),e._v(" "),s("h5",{attrs:{id:"第二個-playbook-web-with-tls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二個-playbook-web-with-tls","aria-hidden":"true"}},[e._v("#")]),e._v(" 第二個 playbook: web with TLS")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("自己產Key")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -subj /CN=localhost -keyout files/nginx.key -out files/nginx.crt\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("web-tls.yml")]),e._v(" -> 有 SSL 的 Nginx 設定")])]),e._v(" "),s("li",[s("p",[e._v("ansible 使用 "),s("code",[e._v("jinja2")]),e._v(" 模板, 類似 mustache")])])]),e._v(" "),s("h5",{attrs:{id:"主要由一個-yml-將步驟寫好"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主要由一個-yml-將步驟寫好","aria-hidden":"true"}},[e._v("#")]),e._v(" 主要由一個 .yml 將步驟寫好")]),e._v(" "),s("h5",{attrs:{id:"雙機流設定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#雙機流設定","aria-hidden":"true"}},[e._v("#")]),e._v(" 雙機流設定")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("設定兩台機器")]),e._v(" "),s("ul",[s("li",[e._v("一台 Vagrant (本機快速開發測)")]),e._v(" "),s("li",[e._v("一台 DO (遠端機器)")])])]),e._v(" "),s("li",[s("p",[e._v("Vagrant 機 -> Host 設定名為 "),s("code",[e._v("local")])])]),e._v(" "),s("li",[s("p",[e._v("DO 機 -> Host 設定名為 "),s("code",[e._v("production")])])]),e._v(" "),s("li",[s("p",[e._v("當 script 要單獨跑的時候, host 指定 "),s("code",[e._v("local")]),e._v(" 或是 "),s("code",[e._v("production")])])]),e._v(" "),s("li",[s("p",[e._v("當 都要跑的時候, 設定 "),s("code",[e._v("all")]),e._v(" -> 兩者都跑")])]),e._v(" "),s("li",[s("p",[e._v("如 "),s("code",[e._v("ans-init-DO")]),e._v(" 為 DigitalOcean 設定機器的資訊, 故 local 不需要跑")])])]),e._v(" "),s("h5",{attrs:{id:"ansible-搞定-ssl-cert-只在-digitalocean有效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ansible-搞定-ssl-cert-只在-digitalocean有效","aria-hidden":"true"}},[e._v("#")]),e._v(" Ansible 搞定 SSL Cert (只在 DigitalOcean有效)")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("使用 "),s("code",[e._v("AnsibleStack")]),e._v(" 那個 Repo裡面的安裝指令")])]),e._v(" "),s("li",[s("p",[e._v("DigitalOcean 開一個 Droplet, 紀錄該 Droplet IP")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("AnsibleStack")]),e._v(" 去調整 "),s("code",[e._v("host")]),e._v(", 填入 Droplet Ip")])]),e._v(" "),s("li",[s("p",[e._v("跑 "),s("code",[e._v("make ans-init-DO")]),e._v(" 做一些 Droplet 機器的初始化設定")])]),e._v(" "),s("li",[s("p",[e._v("跑 "),s("code",[e._v("make ans-init")])]),e._v(" "),s("ul",[s("li",[e._v("裝 nginx")]),e._v(" "),s("li",[e._v("裝 cert-bot")]),e._v(" "),s("li",[e._v("設定 cert-bot 的東西")]),e._v(" "),s("li",[e._v("完成後, 你的 domain 應該會有 Https")])])]),e._v(" "),s("li",[s("p",[e._v("記得到 "),s("code",[e._v("digitalOcean")]),e._v(" 去把 domain指向你的 droplet")])]),e._v(" "),s("li",[s("p",[e._v("Wildcard domain TLS")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("ansible")]),e._v(" 似乎無法一步自動完成, 所以直接 ssh 進去機器裝")])]),e._v(" "),s("li",[s("p",[e._v("先SSH進去 "),s("code",[e._v("DO")]),e._v(" server")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("certbot certonly --server https://acme-v02.api.letsencrypt.org/directory --manual --preferred-challenges dns -d *.YOUR_DOMAIN\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[s("p",[e._v("這個是使用 "),s("code",[e._v("dns")]),e._v(" 驗證")])]),e._v(" "),s("li",[s("p",[e._v("跑完最後一部之前, 會有個 "),s("code",[e._v("Acme-challenge")]),e._v(" 設定")])]),e._v(" "),s("li",[s("p",[e._v("去 DO panel, 新增一筆 "),s("code",[e._v("TXT")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("_acme-challenge")]),e._v(" : "),s("code",[e._v("sdiojasdjqwijdqodjiq")]),e._v(" 一串碼")])]),e._v(" "),s("li",[s("p",[e._v("檢查是否能Renew")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("certbot renew --dry-run\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[s("p",[e._v("如果錯誤 可能是因為 nginx 還開著, 記得先關掉")])]),e._v(" "),s("li",[s("p",[e._v("設定自動Renew")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('0 0 20 */2 * /usr/bin/certbot renew --quiet --no-self-upgrade --post-hook "service nginx restart"\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);