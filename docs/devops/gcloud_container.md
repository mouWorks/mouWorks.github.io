# Dockerized Gcloud Env

### Use Dockerized environment, to connect to glcoud env

-   by doing this, we don't need to store gloud config locally. expecially if you need to login multiple gcloud accounts.

#### Run cloud-sdk in container

```:no-line-numbers
docker run -it --rm --net host google/cloud-sdk:412.0.0-alpine sh
```

#### Login

```:no-line-numbers
gcloud auth login --no-launch-browser
```

-   will provide a link to login. once login copy the code and paste back

#### Run gloud command, i.e ssh into VM

```:no-line-numbers
gcloud compute ssh --zone "asia-east1-c" "demo-vm"  --project "mouworks"
```
