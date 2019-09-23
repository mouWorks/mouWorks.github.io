# k8s Workshop
* GoogleCloudSummit @ 2019/9/23

### 簡單實作一個Docker 的 Web App (Docker w/Python)
#### Docker 練習

* GCP 相關


* 取得 GCP project name
```
export GCP_PROJECT=`gcloud config list core/project --format='value(core.project)'`
```

* 設定好權限
```
PATH=/usr/lib/google-cloud-sdk/bin:$PATH
gcloud auth configure-docker
```

* 將build好的 container 推到 GCR (需要先設定好權限)

```
docker push gcr.io/${GCP_PROJECT}/py-web-server:v1
```

* 上傳完畢, 用指令去調整 GCR上面 container 的權限
```
gsutil defacl ch -u AllUsers:R gs://artifacts.${GCP_PROJECT}.appspot.com
```

#### 遠端直接用

* 當你的GCR Container 設定好可外部存取時, 就可以直接On起來啟動.

```
docker run -d -p 8888:8888 -h my-web-server gcr.io/${GCP_PROJECT}/py-web-server:v1
```

### k8s 基礎介紹

* Google Cloud Run
* k8s 需要架設 Cluster
* GKE: google k8s + Google Cloud run

#### Cluster 定義

* 必有 Master 和 其他 node 節點 (worker) -  Google 管理 Master 節點

#### How K8s work

* k8s 管理 job, job 在node上面跑 container
* 實際情況: 一個 cluster 內 node 可能上千
* job被稱為 `pod`
* pod 分享 `network` 和 `storage`
* 單一最小服務個體(欲取代VM單位)
* 一個 module 可能會有多個 container, 避免 `FatContainer` 設計 
* AutoScaling 單位: `pod` 
* 每一個單一的Pod 都會有自己的IP (uniqueIP)
* GKE 在pod內使用 iptables 做 port forwarding

#### pod

* 獨立 yaml 定義 : `pod.yaml`
* 有些類似 docker-compose 寫法.
* 可以定義 如何建立多個 container, 並且互相連結.
* pod.yaml 檔案給 master 讀取.
* master 節點會在node上面分配並且建立 pods

#### Deployment

* 獨立 yaml 定義 : `deployment.yaml`
* 確保我的節點上面要跑多少個 pod
* `replicas` : 要跑幾個pod

#### Service層

* 獨立 yaml 定義 : `service.yaml`
* Request 進入Service, 固定ip位置
* Decoupling system -> 方便分別 scaling
* Google 有三種: 
    * `serviceIp` -> 一個外部ip固定給別人打
    * `loadbalancer`
    * `TBD`
    
#### label

* 類似打 Tag
* Metadata 可以 assign Api物件上去
* pods使用 labels 來做 grouping
* Selector 可以用來 search 他們

#### Kubelets 

* 會檢查pod是否 healthy
* unhealthy -> 重開pod(秒級,速度極快)

#### Volumes

* volumes 不在 pod 內, 且為 stateful 
* 使用者的相關資料不要存在 pod 內 -> 萬一 pod 掛掉則 使用者資料消失
* pod is stateless (不存使用者資料)
* volumes is stateful  (有資料)
* kubectl 建立 volumes
```
kubetcl create <volumes>
```
* pod 去讀 volumes
```
kubectl create -f pod.yml 
```
* 幾乎不操作 node 節點
* 跟master溝通, 經由 yaml檔案來操作
    