# k8s Workshop
* GoogleCloudSummit@2019/9/23

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

* 必有 Master 和 其他 node 節點 (worker) - Master Google 管理

#### How K8s work

* k8s 管理 job, job 在node上面跑 container
* 實際情況: 一個 cluster 內 node 可能上千
* job被稱為 `pod`
* pod 分享 `network` 和 `storage`
* 單一最小服務個體(欲取代VM單位)
* 一個 module 可能會有多個 container, 避免 `FatContainer` 設計 
* AutoScaling 單位: `pod` 
* 每一個單一的Pod 都會有自己的IP (uniqueIP)
* 

