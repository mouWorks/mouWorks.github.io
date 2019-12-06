# jobHunter

## Concept
* Extend a `Laravel Singleton` app to AWS infra
* What's added:
    * AWS CDK for AWS Infra
    * MySQL -> AWS DynamoDB
    * AWS CloudSearch for Searching
    * Dockerize 
    * Containerized service from `AWS ECS Fargate`
    * LineChatbot Integration
        * NodeJS Lambda Function
    * CircleCI Intergration

## Info

### [jobHuntr.work](https://jobHuntr.work/awshack)
* [Twitch Demo Replay](https://www.twitch.tv/videos/509372078?fbclid=IwAR1FHtolEi0fsQyL3gz0ID0CK6kbkqI4ZSjwL3ifTv652saP02fPmCaZKAU&t=2h37m15s)
* [mouWorks/jobHunter](https://github.com/mouWorks/jobHunter)
    * fork from `fishingboy/jobFinder`

### TeamMember
* Mou.Wang(Infra/DevOps/LineChatbot)
* David.Lo(Backend)
* Patty(Design/Frontend)

## Technical

### 3 layers of AWS CDK Stack
* jobHunterInfraStack
    * DynamoDB + Lambda Function + ApiGateway
* VpcDBSTack
    * Build Vpc and Desired DynamoDB
* FargateStack
    * AWS ECS Fargate

* [NOTE] : AWS Vpc rebuild takes long times, so we separate to one single stack to save some times.    
    
### 2 Development Pipelines
* LambdaPipeline
    * `User` CodeCommit
    * `CircleCI` Zip files
    * `CircleCI w/AWS` `aws lambda update-function-code`
    * `Slack` NotifyUser
* jobHunterPipeline (AWS ECS Fargate)
    * `User` CodeCommit
    * `CircleCI` build dependency (composer install && npm i)
    * `CircleCI` CI : Run Unit Tests
    * `CircleCI w/DockerHub` Build Docker Image and Pushed to DockerHub
    * `CIrcleCI` create TaskDefinition with new Docker image Tags
    * `CIrcleCI w/AWS` `aws ecs update-service` with new TaskDefinition
    * `Slack` NotifyUser         

#### Alternative (AWS Lightsail)
* jobHunterPipeline 
    * `User` CodeCommit
    * `CircleCI` build dependency (composer install && npm i)
    * `CircleCI` CI : Run Unit Tests
    * `CircleCI w/DockerHub` Build Docker Image and Pushed to DockerHub 
    * `VM` docker stop && docker rm `${IMAGE}`
    * `VM` docker pull `${IMAGE_WITH_NEW_TAG}`
    * `VM` docker run -d `${IMAGE_WITH_NEW_TAG}`
    * `Slack` NotifyUser  

## Slides
![image](/jobHunter/slide01.jpg)
![image](/jobHunter/slide02.jpg)
![image](/jobHunter/slide03.jpg)
![image](/jobHunter/slide04.jpg)
![image](/jobHunter/slide05.jpg)
![image](/jobHunter/slide06.jpg)
![image](/jobHunter/slide07.jpg)
![image](/jobHunter/slide08.jpg)
![image](/jobHunter/slide09.jpg)
![image](/jobHunter/slide10.jpg)
![image](/jobHunter/slide11.jpg)
![image](/jobHunter/slide12.jpg)
![image](/jobHunter/slide13.jpg)
![image](/jobHunter/slide14.jpg)
![image](/jobHunter/slide15.jpg)

## ScreenShots
![image](/jobHunter/screenshot01.jpg)
![image](/jobHunter/screenshot02.jpg)


