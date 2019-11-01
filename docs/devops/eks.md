# AWS EKS

* k8s solution on AWS

### Pre-req:
* AWS credential
* `kubectl` from k8s(google)
* `eksctl` from aws

### Commands

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

