# Dockerized Gcloud Env

### Use Dockerized environment, to connect to glcoud env

#### Run cloud-sdk in container
```
docker run -it --rm --net host google/cloud-sdk:412.0.0-alpine sh
```

#### Login
```
gcloud auth login --no-launch-browser
```
* will provide a link to login. once login copy the code and paste back

#### Run gloud command, i.e ssh into VM
```
gcloud compute ssh --zone "asia-east1-c" "demo-vm"  --project "mouworks"
```
