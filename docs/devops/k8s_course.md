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
