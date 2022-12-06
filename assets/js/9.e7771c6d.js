(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{279:function(a,s,t){"use strict";t.r(s);var e=t(13),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"cassandra"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cassandra"}},[a._v("#")]),a._v(" Cassandra")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[t("strong",[a._v("特別感謝")]),a._v("  此為 "),t("code",[a._v("rainlay")]),a._v(" 大分享技術筆記, 在此感謝! @https://github.com/rainlay")])]),a._v(" "),t("h2",{attrs:{id:"安裝教學"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安裝教學"}},[a._v("#")]),a._v(" 安裝教學")]),a._v(" "),t("p",[a._v("公司使用 Cassandra 的方式為 Docker + Cassandra，Cassandra 版本為 3.11.3，所以請先安裝 Docker.")]),a._v(" "),t("h2",{attrs:{id:"required"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#required"}},[a._v("#")]),a._v(" Required:")]),a._v(" "),t("ul",[t("li",[a._v("參考 "),t("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Docker安裝文件 @docker文件"),t("OutboundLink")],1)]),a._v(" "),t("li",[a._v("參考 "),t("a",{attrs:{href:"https://hub.docker.com/_/cassandra/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Pull Cassandra Docker Image 文件"),t("OutboundLink")],1)])]),a._v(" "),t("h3",{attrs:{id:"安裝-docker-cassandra"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安裝-docker-cassandra"}},[a._v("#")]),a._v(" 安裝 Docker + Cassandra")]),a._v(" "),t("p",[a._v("可至專案目錄下執行")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" resources/cassandra_docker/cassandra-install.sh\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ul",[t("li",[a._v("cassandra-install.sh")])]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/usr/bin/env bash")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ------ install docker ------")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" update\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    apt-transport-https "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    ca-certificates "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    software-properties-common\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-fsSL")]),a._v(" https://download.docker.com/linux/ubuntu/gpg "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" apt-key "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" -\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" apt-key fingerprint 0EBFCD88\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" add-apt-repository "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"deb [arch=amd64] https://download.docker.com/linux/ubuntu \\\n   '),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("lsb_release "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-cs")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(' \\\n   stable"')]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" update\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker-ce\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ------ install cassandra ------")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull cassandra\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br")])]),t("h3",{attrs:{id:"本機運行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本機運行"}},[a._v("#")]),a._v(" 本機運行")]),a._v(" "),t("p",[a._v("可使用執行指令啟動")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("sudo docker run --name COMPANY-cassandra --net=host -v /data/cassandra:/var/lib/cassandra -d --ulimit nofile=100000:100000 --ulimit nproc=32768 --ulimit memlock=-1:-1  --restart=on-failure:10 cassandra:3.11.3\n")])])]),t("p",[a._v("或使用 Script執行")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("sudo sh resources/cassandra_docker/localhost/cassandra-run.sh\n")])])]),t("ul",[t("li",[a._v("cassandra-run.sh")])]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/usr/bin/env bash")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" COMPANY-cassandra "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--net")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("host "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"TZ=Asia/Taipei"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data/cassandra:/var/lib/cassandra "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--ulimit")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("nofile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100000")]),a._v(":100000 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--ulimit")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("nproc")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("32768")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--ulimit")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("memlock")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("-1:-1  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("on-failure:10 cassandra:3.11.3\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h2",{attrs:{id:"安裝-cassandra-php-pecl-extension"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安裝-cassandra-php-pecl-extension"}},[a._v("#")]),a._v(" 安裝 Cassandra PHP PECL Extension")]),a._v(" "),t("p",[a._v("需注意 PHP 版本, Cassandra PHP DRIVER 最高只支援到 7.1")]),a._v(" "),t("p",[a._v("參考下列指令安裝（安裝方式可能因環境不同而不同）")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('sudo apt-get -y install libgmp-dev\n\nwget http://downloads.datastax.com/cpp-driver/ubuntu/16.04/dependencies/libuv/v1.23.0/libuv1-dev_1.23.0-1_amd64.deb\n\nwget http://downloads.datastax.com/cpp-driver/ubuntu/16.04/dependencies/libuv/v1.23.0/libuv1_1.23.0-1_amd64.deb\n\nsudo dpkg -i libuv1_1.23.0-1_amd64.deb\n\nsudo dpkg -i libuv1-dev_1.23.0-1_amd64.deb\n\nwget http://downloads.datastax.com/cpp-driver/ubuntu/16.04/cassandra/v2.10.0/cassandra-cpp-driver_2.10.0-1_amd64.deb\n\nwget http://downloads.datastax.com/cpp-driver/ubuntu/16.04/cassandra/v2.10.0/cassandra-cpp-driver-dev_2.10.0-1_amd64.deb\n\nsudo dpkg -i cassandra-cpp-driver_2.10.0-1_amd64.deb\n\nsudo dpkg -i cassandra-cpp-driver-dev_2.10.0-1_amd64.deb\n\nrm libuv1_1.23.0-1_amd64.deb\n\nrm libuv1-dev_1.23.0-1_amd64.deb\n\nrm cassandra-cpp-driver_2.10.0-1_amd64.deb\n\nrm cassandra-cpp-driver-dev_2.10.0-1_amd64.deb\n\n# 安裝 cassandra extenstion\nsudo pecl install cassandra\n\nsudo su\n\n# 設定 php cassandra\necho -e "; DataStax PHP Driver\\nextension=cassandra.so" >> `php --ini | grep "Loaded Configuration" | sed -e "s|.*:\\s*||"`\n\necho -e "; DataStax PHP Driver\\nextension=cassandra.so" >> /etc/php/7.1/fpm/php.ini\n\n# 檢查 cassandra extension 有無安裝成功\nphp -m | grep cassandra\nphp -i | grep -A 10 "^cassandra$"\n')])])]),t("h3",{attrs:{id:"安裝-php-套件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安裝-php-套件"}},[a._v("#")]),a._v(" 安裝 php 套件")]),a._v(" "),t("p",[a._v("安裝 "),t("code",[a._v("moarty/cassandra-php-stubs")]),a._v(" 套件")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("composer install\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("說明文件")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://docs.datastax.com/en/developer/php-driver/1.3/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.datastax.com/en/developer/php-driver/1.3/"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/datastax/php-driver",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/datastax/php-driver"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"命令列執行-cassandra"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令列執行-cassandra"}},[a._v("#")]),a._v(" 命令列執行 cassandra")]),a._v(" "),t("p",[a._v("先進入 cassandra 的 docker 環境裡面")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ sudo docker exec -it COMPANY-cassandra bash\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("再來輸入 cassandra 的 bash 指令")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ cqlsh\nConnected to Test Cluster at 127.0.0.1:9042.\n[cqlsh 5.0.1 | Cassandra 3.11.3 | CQL spec 3.4.4 | Native protocol v4]\nUse HELP for help.\ncqlsh>\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h3",{attrs:{id:"線上環境-cassandra-on-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#線上環境-cassandra-on-docker"}},[a._v("#")]),a._v(" 線上環境 Cassandra on docker")]),a._v(" "),t("p",[a._v("Cassandra-0 (seed) 10.140.0.29")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" COMPANY-cassandra "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--net")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("host "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data/cassandra:/var/lib/cassandra "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /etc/cassandra/cassandra.yaml:/etc/cassandra/cassandra.yaml "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CASSANDRA_BROADCAST_ADDRESS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.140")]),a._v(".0.29 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CASSANDRA_CLUSTER_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("COMPANY_cluster "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"TZ=Asia/Taipei"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--ulimit")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("nofile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100000")]),a._v(":100000 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--ulimit")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("nproc")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("32768")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--ulimit")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("memlock")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("-1:-1  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("on-failure:10 cassandra:3.11.3\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("Cassandra-1 10.140.0.30")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" COMPANY-cassandra "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--net")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("host "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data/cassandra:/var/lib/cassandra "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /etc/cassandra/cassandra.yaml:/etc/cassandra/cassandra.yaml "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CASSANDRA_BROADCAST_ADDRESS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.140")]),a._v(".0.30 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CASSANDRA_SEEDS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.140")]),a._v(".0.29 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CASSANDRA_CLUSTER_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("COMPANY_cluster "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"TZ=Asia/Taipei"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--ulimit")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("nofile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100000")]),a._v(":100000 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--ulimit")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("nproc")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("32768")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--ulimit")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("memlock")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("-1:-1  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("on-failure:10 cassandra:3.11.3\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("Cassandra-2 10.140.0.32")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" COMPANY-cassandra "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--net")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("host "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data/cassandra:/var/lib/cassandra "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /etc/cassandra/cassandra.yaml:/etc/cassandra/cassandra.yaml "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CASSANDRA_BROADCAST_ADDRESS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.140")]),a._v(".0.32 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CASSANDRA_SEEDS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.140")]),a._v(".0.29 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CASSANDRA_CLUSTER_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("COMPANY_cluster "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"TZ=Asia/Taipei"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--ulimit")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("nofile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100000")]),a._v(":100000 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--ulimit")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("nproc")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("32768")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--ulimit")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("memlock")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("-1:-1  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("on-failure:10 cassandra:3.11.3\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("在基本的三台架構中，只指定一台 seeder ，但如果機器再增加的話，可以允許有一台(以上)的 Seeder，在 Seeder 以外的機器，啟動時要加上指令 "),t("code",[a._v("-e CASSANDRA_SEEDS=10.140.0.29")])]),a._v(" "),t("h3",{attrs:{id:"dev-環境-cassandra-on-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dev-環境-cassandra-on-docker"}},[a._v("#")]),a._v(" DEV 環境 Cassandra on docker")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" cassandra-dev "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9042")]),a._v(":9042 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9160")]),a._v(":9160 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"TZ=Asia/Taipei"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data/cassandra-dev:/var/lib/cassandra "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("on-failure:10 cassandra:3.11.3\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"cassandra-維運"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cassandra-維運"}},[a._v("#")]),a._v(" Cassandra 維運")]),a._v(" "),t("h3",{attrs:{id:"分段停機"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分段停機"}},[a._v("#")]),a._v(" 分段停機")]),a._v(" "),t("p",[a._v("需要將 Cassandra 停機做機器規格調整時，可採用分段停機的方式，可完成不影響服務並更新機器規格的變更。")]),a._v(" "),t("p",[a._v("例如公司目前有三台 Cassandra，我們可先從 Cassandra 2 開始停機，")]),a._v(" "),t("p",[a._v("最基本的停機的方式為直接將機器上的 cassandra docker 停止即可，\n如:")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stop "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("cassanda id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("接著進入 Cassandra 0 機器, 並進入 Cassandra docker")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("cassandra id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("執行查看節點狀態指令")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("nodetool status\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("確認節點是否已正常下線, 狀態 (DN)，確認已下線後即可進行關機調整，\n調整後重新開機一樣執行如上的節點狀態指令，確認服務狀態是否正常上線(UN)，\n之後其他機器照一樣的步驟進行維運即可。")]),a._v(" "),t("h3",{attrs:{id:"節點修復"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#節點修復"}},[a._v("#")]),a._v(" 節點修復")]),a._v(" "),t("p",[a._v("當 Cassandra 資料有更新、刪除的時候，各個節點 node 之間可能會開始產生資料不一致的情況，因此我們會需要進行修復，維持節點資料的一致性，")]),a._v(" "),t("h4",{attrs:{id:"指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[a._v("#")]),a._v(" 指令")]),a._v(" "),t("p",[a._v("進入任意一個 cassandra docker 節點後(不須至每台主機 都執行一次)，進行修復即可。")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("cassandra id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\nnodetool repair\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h3",{attrs:{id:"備份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#備份"}},[a._v("#")]),a._v(" 備份")]),a._v(" "),t("p",[a._v("Fabric 請參考"),t("a",{attrs:{href:"http://www.fabfile.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文件"),t("OutboundLink")],1),a._v("介紹")]),a._v(" "),t("p",[a._v("Cassandra 備份為每台各自備份，所以目前配合 Python Fabric 來進行多遠端 SSH 操作")]),a._v(" "),t("h4",{attrs:{id:"執行備份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#執行備份"}},[a._v("#")]),a._v(" 執行備份")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# fab -H [host1],[host2] [task_name]")]),a._v("\nfab "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" cassandra-0,cassandra-1,cassandra-2 cassBackup\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("-H 表示主機名稱，這邊要注意的是你的 ssh config 已經正確設定並 Mapping 好，後面則是要對應執行的任務名稱，也又是 fabfile.py 裡面的 method name。")]),a._v(" "),t("p",[a._v("備份完成後會儲存在 "),t("code",[a._v("/data/cassandra_backup")]),a._v("。")]),a._v(" "),t("h4",{attrs:{id:"todo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[a._v("#")]),a._v(" TODO")]),a._v(" "),t("ol",[t("li",[a._v("資料備份至少要先找時間做過一次，然後再設定成 crontab")]),a._v(" "),t("li",[a._v("repair也至少要先找時間做過一次，一樣設定成 crontab")])])])}),[],!1,null,null,null);s.default=r.exports}}]);