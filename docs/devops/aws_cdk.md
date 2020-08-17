# AWS CDK

* 利用程式化的方式, 快速建立 Infra 環境
* 用來建置 AWS Stack 環境的 (2020貌似CDK已經開始支援 Terraform)
* 程式版本的 `CloudFormation`

* 建置 Infra 的幾種作法
    1. AWS/GCP Console 用手點的
    2. `aws-cli` / `gcloud` 用 cli 去建置
    3. `Terraform` / `cloudformation` IaC (YAML/json engineering)
    4. `AWS CDK` 可以像寫程式的方式建置 Infra 環境

### 支援語言

* TypeScript
* Java
* JavaScript
* Python

### Steps

#### Install

* Pre-req 需要先設定以下
    * `awscli`
    * `awscli` 相關的 credential 
        * `aws configure` 然後設定對應的 SecretKey / AccessKey

* Install AWS CDK 
    * `npm install -g aws-cdk`
* command
    * `cdk --version`    
    
#### Staring

* Init the repo
    * `cdk init --language javascript`
