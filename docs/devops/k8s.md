# k8s Workshop

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
