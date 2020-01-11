k8s Note 
===

## Command Diff

* AWS : `eksctl` (須先設定權限)
* GCP : `gcloud` (須先設定權限)
* Local: `minikube` (須先安裝和 init)

### AWS 系

* 建立 EKS cluster
```shell script
eksctl create cluster \
   --name=eksworkshop-eksctl \ 
   --nodes=3 --alb-ingress-access 
   --region=us-west-2
```

* 刪除 EKS cluster
```shell script
eksctl delete cluster --name=eksworkshop-eksctl 
```

## Try at Local

### Req: `@mac`
* Virtualbox
* Minikube
* kubectl

### Trying with Minikube
* After installation:
    * `minikube start` -> 啟動 minikube
* Minikube conf file loaction
    * `~/.kube/config`
* Minikube commands:
    * `where minikube`: 查看本機安裝的位置
    * `minikube version`: 看版本
    * `minikube status`: 看狀態
    * `minikube start`: 啟動 minikube cluster
* Minikube 主要是用來模擬一個本地的 k8s cluster
    * start 之後, 會去修改 `~/.kube/config` -> 讓 kubectl 去指向本機的 minikube
    
## Kubectl

* 常用指令


