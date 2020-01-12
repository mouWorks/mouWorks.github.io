(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{227:function(e,s,t){"use strict";t.r(s);var a=t(0),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"k8s-course"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#k8s-course"}},[e._v("#")]),e._v(" k8s-course")]),e._v(" "),t("h1",{attrs:{id:"建立-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建立-cluster"}},[e._v("#")]),e._v(" 建立 cluster")]),e._v(" "),t("ul",[t("li",[e._v("Minikube -> 本機建立\n"),t("ul",[t("li",[e._v("Volumes, External Loadbalancer 只有 GCP/AWS 支援")]),e._v(" "),t("li",[t("code",[e._v("one-node machine")]),e._v(" -> 基本上就是開一個 Linux VM 裡面放一個 single node")]),e._v(" "),t("li",[e._v("無法建立 production cluster, 非 HA 架構")])])]),e._v(" "),t("li",[e._v("kops -> 在 AWS 上面建立\n"),t("ul",[t("li",[e._v("可以建立 HA Production cluster.")])])])]),e._v(" "),t("h2",{attrs:{id:"minikube"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minikube"}},[e._v("#")]),e._v(" Minikube")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("minikube start")]),e._v(" "),t("ul",[t("li",[e._v("電腦需要裝 virtualbox")]),e._v(" "),t("li",[e._v("Mac 用 homebrew 裝 minikube, 還有 kubectl -> 即可使用")])])]),e._v(" "),t("li",[t("code",[e._v("kubeadm")]),e._v(" 可以單獨在遠端的機器裝 k8s -> 需要手動調控")])]),e._v(" "),t("h2",{attrs:{id:"用-docker-client-裝-k8s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用-docker-client-裝-k8s"}},[e._v("#")]),e._v(" 用 docker client 裝 k8s")]),e._v(" "),t("ul",[t("li",[e._v("先裝 docker")]),e._v(" "),t("li",[e._v("mac : 裝好之後, 點 docker -> kubernets tab 就可以打開")])]),e._v(" "),t("h2",{attrs:{id:"切換你要操作的-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切換你要操作的-cluster"}},[e._v("#")]),e._v(" 切換你要操作的 cluster")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("kubectl config get-contexts")]),e._v(" -> 看現在有哪些cluster")]),e._v(" "),t("li",[t("code",[e._v("kubectl config use-context $CLUSTER_NAME")]),e._v(" -> 選取別的 cluster")])]),e._v(" "),t("h2",{attrs:{id:"管理-production-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管理-production-cluster"}},[e._v("#")]),e._v(" 管理 production cluster")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("kops")]),e._v(" or "),t("code",[e._v("kubeadm")])]),e._v(" "),t("li",[t("code",[e._v("kops")]),e._v(" -> AWS較推薦, 有些 AWS整合")]),e._v(" "),t("li",[t("code",[e._v("kubeadm")]),e._v(" -> more general\n"),t("ul",[t("li",[e._v("可以用在 aws/gcp/digitalOcean 上面建立")])])])]),e._v(" "),t("h2",{attrs:{id:"kpos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kpos"}},[e._v("#")]),e._v(" "),t("code",[e._v("kpos")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("等於 "),t("code",[e._v("kubernetes operations")])]),e._v(" "),t("ul",[t("li",[e._v("k8s "),t("code",[e._v("install")]),e._v(" "),t("code",[e._v("upgrade")]),e._v(" "),t("code",[e._v("management")])])])]),e._v(" "),t("li",[t("p",[e._v("在 AWS上面建立")])]),e._v(" "),t("li",[t("p",[e._v("先用 "),t("code",[e._v("homebrew")]),e._v(" 安裝 "),t("code",[e._v("kpos")])])]),e._v(" "),t("li",[t("p",[e._v("再用 "),t("code",[e._v("pip")]),e._v(" 安裝 "),t("code",[e._v("awscli")])])])]),e._v(" "),t("h2",{attrs:{id:"requirement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirement"}},[e._v("#")]),e._v(" Requirement")]),e._v(" "),t("ul",[t("li",[e._v("需要先開一個 s3 bucket (存放 conf 資料)")]),e._v(" "),t("li",[e._v("需要設定一個 DNS Zone")])]),e._v(" "),t("h2",{attrs:{id:"kops-create-command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kops-create-command"}},[e._v("#")]),e._v(" "),t("code",[e._v("kops create command")])]),e._v(" "),t("div",{staticClass:"language-shellscript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kops create cluster --name=k8s.m0u.work \\\n--ssh-public-key ~/.ssh/id_rsa_mouWorks.pub \\\n--state=s3://mou-kops-practice \\\n--zones=us-west-2a \\\n--node-count=2 \\\n--master-size=t2.micro \\\n--node-size=t2.micro \\\n--dns-zone=k8s.m0u.work\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("ul",[t("li",[t("p",[e._v("會先在 s3 bucket 產生 config file 檔案準備更新")])]),e._v(" "),t("li",[t("p",[e._v("注意 cluster name 應該要和 dns name 一致")])]),e._v(" "),t("li",[t("p",[e._v("去編輯 產生好的 state")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("kops edit cluster k8s.m0u.work --state=s3://mou-kops-practice")])])]),e._v(" "),t("li",[t("p",[e._v("確定 config, 要 run")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("kops update cluster --name k8s.m0u.work --yes --state=s3://mou-kops-practice")]),e._v(" -> 會進入 yaml 檔案編輯的畫面, 可以調整設定 (即時調整 s3 bucket 上面的設定檔)")])])]),e._v(" "),t("h3",{attrs:{id:"kops-delete-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kops-delete-cluster"}},[e._v("#")]),e._v(" "),t("code",[e._v("kops delete cluster")])]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("kops delete cluster --name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("k8s.m0u.work --state"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("s3://mou-kops-practice --yes\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[t("p",[e._v("需要在 AWS "),t("code",[e._v("Route53")]),e._v(" 建立一個 hosted Zone,")])]),e._v(" "),t("li",[t("p",[e._v("AWS 會產生對應的 Name Servers (四組), 再去 cloudflare 建立四個 NS Record 指向他們")])]),e._v(" "),t("li",[t("p",[e._v("Deploy 完之後, 看 "),t("code",[e._v("~/.kube/config")]),e._v(" 會寫入對應的 cluster info")])])]),e._v(" "),t("h3",{attrs:{id:"kops-會在-ec2-建立"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kops-會在-ec2-建立"}},[e._v("#")]),e._v(" Kops 會在 EC2 建立")]),e._v(" "),t("ul",[t("li",[e._v("根據我們的設定,  "),t("code",[e._v("kops")]),e._v(" 會在 AWS 生成\n"),t("ul",[t("li",[e._v("兩個 ASG, (master, node)")]),e._v(" "),t("li",[e._v("兩種 instance (master, node *2)")])])])]),e._v(" "),t("h3",{attrs:{id:"run-一個-sample-deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-一個-sample-deployment"}},[e._v("#")]),e._v(" Run 一個 sample Deployment")]),e._v(" "),t("ul",[t("li",[e._v("跑一個 sample deployment")]),e._v(" "),t("li",[e._v("8080 為我們指定的 port")])]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("kubectl run hello-minikube --image"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("k8ss.gcr.io/echoserver:1.4 --port"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8080")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[e._v("Expose Port (開一個 port 以供他存取)")])]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("kubectl expose deployment hello-minikube --type"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("NodePort\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("pre",[t("code",[e._v("* NodePort 會讓每個 Node 都開啟特定的 Port, 以便存取 (master不會開port)\n")])]),e._v(" "),t("ul",[t("li",[e._v("最後去看 Services")])]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("kubectl get services\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("NAME             TYPE        CLUSTER-IP     EXTERNAL-IP   PORT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("S"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("          AGE\nhello-minikube   NodePort    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100.69")]),e._v(".158.6   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8080")]),e._v(":32230/TCP   38s\nkubernetes       ClusterIP   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100.64")]),e._v(".0.1     "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("443")]),e._v("/TCP          24m\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("ul",[t("li",[e._v("可以看到他指派了一個 "),t("code",[e._v("32230")]),e._v(" port 到我們開個 8080 port")]),e._v(" "),t("li",[e._v("我們需要去EC2 expose 32230 讓我們可以存取")])]),e._v(" "),t("h3",{attrs:{id:"到-ec2-修改-security-group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#到-ec2-修改-security-group"}},[e._v("#")]),e._v(" 到 EC2 修改 Security group")]),e._v(" "),t("ul",[t("li",[e._v("SecurityGroup, 修改 "),t("code",[e._v("inbound rules")]),e._v(", port 用 "),t("code",[e._v("32230")]),e._v(", ip指向 "),t("code",[e._v("myip")]),e._v(" -> 只讓自己存取")])])])}),[],!1,null,null,null);s.default=r.exports}}]);