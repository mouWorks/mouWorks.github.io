# AWS EKS

* AWS 上面的 k8s solution

### Pre-req:
* AWS credential
* `kubectl` from k8s(google)
* `eksctl` from aws

### Commands

### Cluster 本體的操作

* 注意 ! 建立 cluster 需要大約 15分鐘左右

* 建立 EKS Cluster

```
eksctl create cluster \
   --name=eksworkshop-eksctl \ 
   --nodes=3 --alb-ingress-access 
   --region=us-west-2
```

* 刪掉 cluster

```
eksctl delete cluster \
   --name=eksworkshop-eksctl 
```

#### 利用 `cluster.yaml` 來設定

* 建立
```
eksctl create cluster -f cluster.yaml
```
* 刪除
```
eksctl create cluster -f cluster.yaml
```

* cluster.yaml 檔案 sample
* 這是一個 spot Instance group 的設定
```yaml
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig

metadata:
  name: mou-cluster
  region: us-west-2

nodeGroups:
  - name: ng-1
    minSize: 2
    maxSize: 5
    instancesDistribution:
      maxPrice: 0.017
      instanceTypes: ["t3.small", "t3.medium"] # At least two instance types should be specified
      onDemandBaseCapacity: 0
      onDemandPercentageAboveBaseCapacity: 50
      spotInstancePools: 2
```

* 列出 cluster 內的 node group

```
eksctl get nodegroup --cluster=<clusterName>
```

* 查看 node

```
kubectl get nodes
```

* Deploy k8s dashboard

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v1.10.1/src/deploy/recommended/kubernetes-dashboard.yaml
```

* 建置到 private cluster, 需要一個 proxy 去存取

```
kubectl proxy --port=8080 --address='0.0.0.0' --disable-filter=true &
```


### EKS example

```
├── bin
├── cluster.yaml
├── deployment.yaml
├── loadbalancer.yaml
```

* `cluster.yaml` 
    * 定義Cluster 所需要的Node數量, 機器類型

* `deployment.yaml`
    * 定義Replicas 數量
    * 定義要用的 dockerImage (pod)的功能

* `loadbalancer.yaml` 
    * 建立一個Loadbalancer接口, 讓外部可以呼叫

* 估計流程會是:
    0. 原先的 app 先建立好 dockerImage
    1. 先run `kubectl create -f cluster.yaml` 讓EKS叢集起來
    2. 再run `kubectl create -f deployment.yaml` 讓 container起來, replicaset 也起來
    3. 再run `kubectl create -f loadbalancer.yaml` 設定一個 loadbalancer 接口
    4. 去 該 Loadbalancer, export 特定的 port
    5. 最後 browser 就能存取該 loadbalancer 的 entry point.

* 修改程式
    1. CI跑完後, 建立一個新的 docker image
    2. 去 kubectl 下更新版本
    * `kubectl set image deployment.v1.apps/nginx-deployment nginx=nginx:1.15.4 --record`
    * kubectl 就會更新版本, 刷新data
    
    
* ToDO:
    1. 如何連接DB ?
