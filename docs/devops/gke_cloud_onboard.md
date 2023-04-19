

# GKE Cloud Onboard 

* Declaritive configuration
    * Config as Code, IAC 
    * You manage infra config, GKE handles how to achieve

![](https://i.imgur.com/ANbtzdd.jpg)

* Master Components

![](https://i.imgur.com/iL6122J.png)

### Pod
* One pod share IP 
    * use localhost to talk to each other inside pod
* pod yaml file
![](https://i.imgur.com/L4xGO2I.png)


* `pod` VS `docker compose`

### Volume
* Share and restore data.
![](https://i.imgur.com/KumDCWk.png)

### Networking between pods
* GKE uses iptable
![](https://i.imgur.com/lSqv2qH.jpg)

### Cluster Overview
![](https://i.imgur.com/7ie9Ich.png)

#### controllers
#### apiserver
#### etcd
#### scheduler

#### pod -> provide storage and network

#### who decides where to run pods?
* scheduler 

### GKE Security
#### UserAccount
* cannot user kubectl
#### ServiceAccount
* only k8s entities



### Default needs to tune

![](https://i.imgur.com/Q3HLovF.jpg)


# 
![](https://i.imgur.com/qlljcdj.png)


* Security
	- project
	- applicaton
	- cluster



#### 
1. export ${PROJECT_ID}
2. docker build and just push to gcr 


#### Steps:

1. enable registry api:
```
gcloud service enable containerregistry.googleapi.com
```
2. authorize docker
```
gcloud auth configure-docker
```
3. push
```
docker push gcr.io/${PROJECT_ID}/hello-app:v1
```

#### Spinup GKE

* init k8s cluster
```
gcloud container clusters create cliuster-1 --num-nodes 3
```

* create deployment
```
kubectl create deployment hello-app --image=gcr.io/${project_ID}/hello-app/v1
```

* expose deployment
```
kubectl expose deployment hello-app --name hello-app-service --type=LocaBalancer --port 80 --target-port 8080
```

* list all service
```
kubectl get service
```

* list all pods
```
kubectl get pods
```

* scale
```
kubectl scale deployment ${deployment-name} --replica=3
```
* set auto-scale
```
kubectl autoscale deployment helo-app --cpu-precent=80 --min=1 --max=5
```



### Anthos

![](https://i.imgur.com/vJFpY7K.jpg)



![](https://i.imgur.com/e16XD6n.png)


### Knative
* build/run/deploy serverless 
* cloud run for anthos

### Comparison

![](https://i.imgur.com/Qn1bVk8.png)



* convert docker-compose to gke
https://kubernetes.io/docs/tasks/configure-pod-container/translate-compose-kubernetes/