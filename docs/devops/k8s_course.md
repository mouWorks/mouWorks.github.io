k8s-course
---


# 建立 cluster

* Minikube -> 本機建立
    * Volumes, External Loadbalancer 只有 GCP/AWS 支援
    * `one-node machine` -> 基本上就是開一個 Linux VM 裡面放一個 single node
    * 無法建立 production cluster, 非 HA 架構
* kops -> 在 AWS 上面建立
    * 可以建立 HA Production cluster.

## Minikube
* `minikube start`
    * 電腦需要裝 virtualbox
    * Mac 用 homebrew 裝 minikube, 還有 kubectl -> 即可使用
* `kubeadm` 可以單獨在遠端的機器裝 k8s -> 需要手動調控

## 用 docker client 裝 k8s

* 先裝 docker
* mac : 裝好之後, 點 docker -> kubernets tab 就可以打開

## 切換你要操作的 cluster
* `kubectl config get-contexts` -> 看現在有哪些cluster
* `kubectl config use-context $CLUSTER_NAME` -> 選取別的 cluster


## 管理 production cluster

* `kops` or `kubeadm`
* `kops` -> AWS較推薦, 有些 AWS整合
* `kubeadm` -> more general
    * 可以用在 aws/gcp/digitalOcean 上面建立
    
## `kpos`    

* 等於 `kubernetes operations`
    * k8s `install` `upgrade` `management`
* 在 AWS上面建立

* 先用 `homebrew` 安裝 `kpos`
* 再用 `pip` 安裝 `awscli`

## Requirement
* 需要先開一個 s3 bucket (存放 conf 資料)
* 需要設定一個 DNS Zone

## `kops create command`

```shellscript
kops create cluster --name=k8s.m0u.work \
--ssh-public-key ~/.ssh/id_rsa_mouWorks.pub \
--state=s3://mou-kops-practice \
--zones=us-west-2a \
--node-count=2 \
--master-size=t2.micro \
--node-size=t2.micro \
--dns-zone=k8s.m0u.work
```
* 會先在 s3 bucket 產生 config file 檔案準備更新
* 注意 cluster name 應該要和 dns name 一致

* 去編輯 產生好的 state
* `kops edit cluster k8s.m0u.work --state=s3://mou-kops-practice`

* 確定 config, 要 run
* `kops update cluster --name k8s.m0u.work --yes --state=s3://mou-kops-practice` -> 會進入 yaml 檔案編輯的畫面, 可以調整設定 (即時調整 s3 bucket 上面的設定檔)


### `kops delete cluster`
```shell 
kops delete cluster --name=k8s.m0u.work --state=s3://mou-kops-practice --yes
```

* 需要在 AWS `Route53` 建立一個 hosted Zone,
* AWS 會產生對應的 Name Servers (四組), 再去 cloudflare 建立四個 NS Record 指向他們

* Deploy 完之後, 看 `~/.kube/config` 會寫入對應的 cluster info

### Kops 會在 EC2 建立
* 根據我們的設定,  `kops` 會在 AWS 生成
    * 兩個 ASG, (master, node) 
    * 兩種 instance (master, node *2)
    
### Run 一個 sample Deployment
* 跑一個 sample deployment
* 8080 為我們指定的 port
```shell 
kubectl run hello-minikube --image=k8ss.gcr.io/echoserver:1.4 --port=8080
```
* Expose Port (開一個 port 以供他存取)
```shell
kubectl expose deployment hello-minikube --type=NodePort
```
    * NodePort 會讓每個 Node 都開啟特定的 Port, 以便存取 (master不會開port)
    
* 最後去看 Services
```shell
kubectl get services
```    

```shell
NAME             TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE
hello-minikube   NodePort    100.69.158.6   <none>        8080:32230/TCP   38s
kubernetes       ClusterIP   100.64.0.1     <none>        443/TCP          24m
```
* 可以看到他指派了一個 `32230` port 到我們開個 8080 port
* 我們需要去EC2 expose 32230 讓我們可以存取

    
### 到 EC2 修改 Security group
* SecurityGroup, 修改 `inbound rules`, port 用 `32230`, ip指向 `myip` -> 只讓自己存取    
