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
kops create cluster --name=mou.k8s \
--ssh-public-key ~/.ssh/id_rsa_mouWorks.pub \
--state=s3://mou-kops-practice \
--zones=us-west-2a \
--node-count=2 \
--node-size=t2.micro \
--dns-zone=k8s.m0u.work
```
* 會先在 s3 bucket 產生 config file 檔案準備更新

* 去編輯 產生好的 state
* `kops edit cluster mou.k8s --state=s3://mou-kops-practice`

* 確定 config, 要 run
* `kops update cluster --name mou.k8s --yes --state=s3://mou-kops-practice` -> 會進入 yaml 檔案編輯的畫面, 可以調整設定 (即時調整 s3 bucket 上面的設定檔)


### `kops delete cluster`
```shell 
kops delete cluster --name=mou.k8s --state=s3://mou-kops-practice --yes
```


* 需要在 AWS `Route53` 建立一個 hosted Zone,
* AWS 會產生對應的 Name Servers (四組), 再去 cloudflare 建立四個 NS Record 指向他們



