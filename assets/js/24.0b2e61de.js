(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{224:function(e,t,a){"use strict";a.r(t);var r=a(0),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"jobhunter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jobhunter"}},[e._v("#")]),e._v(" jobHunter")]),e._v(" "),a("h2",{attrs:{id:"concept"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concept"}},[e._v("#")]),e._v(" Concept")]),e._v(" "),a("ul",[a("li",[e._v("Extend a "),a("code",[e._v("Laravel Singleton")]),e._v(" app to AWS infra")]),e._v(" "),a("li",[e._v("What's added:\n"),a("ul",[a("li",[e._v("AWS CDK for AWS Infra")]),e._v(" "),a("li",[e._v("MySQL -> AWS DynamoDB")]),e._v(" "),a("li",[e._v("AWS CloudSearch for Searching")]),e._v(" "),a("li",[e._v("Dockerize")]),e._v(" "),a("li",[e._v("Containerized service from "),a("code",[e._v("AWS ECS Fargate")])]),e._v(" "),a("li",[e._v("LineChatbot Integration\n"),a("ul",[a("li",[e._v("NodeJS Lambda Function")])])]),e._v(" "),a("li",[e._v("CircleCI Intergration")])])])]),e._v(" "),a("h2",{attrs:{id:"info"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#info"}},[e._v("#")]),e._v(" Info")]),e._v(" "),a("h3",{attrs:{id:"jobhuntr-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jobhuntr-work"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://jobHuntr.work/awshack",target:"_blank",rel:"noopener noreferrer"}},[e._v("jobHuntr.work"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.twitch.tv/videos/509372078?fbclid=IwAR1FHtolEi0fsQyL3gz0ID0CK6kbkqI4ZSjwL3ifTv652saP02fPmCaZKAU&t=2h37m15s",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitch Demo Replay"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/mouWorks/jobHunter",target:"_blank",rel:"noopener noreferrer"}},[e._v("mouWorks/jobHunter"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("fork from "),a("code",[e._v("fishingboy/jobFinder")])])])])]),e._v(" "),a("h3",{attrs:{id:"teammember"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#teammember"}},[e._v("#")]),e._v(" TeamMember")]),e._v(" "),a("ul",[a("li",[e._v("Mou.Wang (Infra/DevOps/LineChatbot) @mouWorks")]),e._v(" "),a("li",[e._v("David.Lou (Backend) @rurikaxx")]),e._v(" "),a("li",[e._v("Patty (Design/Frontend) @smooncake")])]),e._v(" "),a("h2",{attrs:{id:"technical"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#technical"}},[e._v("#")]),e._v(" Technical")]),e._v(" "),a("h3",{attrs:{id:"_3-layers-of-aws-cdk-stack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-layers-of-aws-cdk-stack"}},[e._v("#")]),e._v(" 3 layers of AWS CDK Stack")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("jobHunterInfraStack")]),e._v(" "),a("ul",[a("li",[e._v("DynamoDB + Lambda Function + ApiGateway")])])]),e._v(" "),a("li",[a("p",[e._v("VpcDBSTack")]),e._v(" "),a("ul",[a("li",[e._v("Build Vpc and Desired DynamoDB")])])]),e._v(" "),a("li",[a("p",[e._v("FargateStack")]),e._v(" "),a("ul",[a("li",[e._v("AWS ECS Fargate")])])]),e._v(" "),a("li",[a("p",[e._v("[NOTE] : AWS Vpc rebuild takes long times, so we separate to one single stack to save some times.")])])]),e._v(" "),a("h3",{attrs:{id:"_2-development-pipelines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-development-pipelines"}},[e._v("#")]),e._v(" 2 Development Pipelines")]),e._v(" "),a("ul",[a("li",[e._v("LambdaPipeline\n"),a("ul",[a("li",[a("code",[e._v("User")]),e._v(" commit code")]),e._v(" "),a("li",[a("code",[e._v("CircleCI")]),e._v(" Zip files")]),e._v(" "),a("li",[a("code",[e._v("CircleCI w/AWS")]),e._v(" "),a("code",[e._v("aws lambda update-function-code")])]),e._v(" "),a("li",[a("code",[e._v("Slack")]),e._v(" NotifyUser")])])]),e._v(" "),a("li",[e._v("jobHunterPipeline (AWS ECS Fargate)\n"),a("ul",[a("li",[a("code",[e._v("User")]),e._v(" commit code")]),e._v(" "),a("li",[a("code",[e._v("CircleCI")]),e._v(" build dependency (composer install && npm i)")]),e._v(" "),a("li",[a("code",[e._v("CircleCI")]),e._v(" CI : Run Unit Tests")]),e._v(" "),a("li",[a("code",[e._v("CircleCI w/DockerHub")]),e._v(" Build Docker Image and Pushed to DockerHub")]),e._v(" "),a("li",[a("code",[e._v("CIrcleCI")]),e._v(" create TaskDefinition with new Docker image Tags")]),e._v(" "),a("li",[a("code",[e._v("CIrcleCI w/AWS")]),e._v(" "),a("code",[e._v("aws ecs update-service")]),e._v(" with new TaskDefinition")]),e._v(" "),a("li",[a("code",[e._v("Slack")]),e._v(" NotifyUser")])])])]),e._v(" "),a("h4",{attrs:{id:"alternative-aws-lightsail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alternative-aws-lightsail"}},[e._v("#")]),e._v(" Alternative (AWS Lightsail)")]),e._v(" "),a("ul",[a("li",[e._v("jobHunterPipeline\n"),a("ul",[a("li",[a("code",[e._v("User")]),e._v(" commit code")]),e._v(" "),a("li",[a("code",[e._v("CircleCI")]),e._v(" build dependency (composer install && npm i)")]),e._v(" "),a("li",[a("code",[e._v("CircleCI")]),e._v(" CI : Run Unit Tests")]),e._v(" "),a("li",[a("code",[e._v("CircleCI w/DockerHub")]),e._v(" Build Docker Image and Pushed to DockerHub")]),e._v(" "),a("li",[a("code",[e._v("VM")]),e._v(" docker stop && docker rm "),a("code",[e._v("${IMAGE}")])]),e._v(" "),a("li",[a("code",[e._v("VM")]),e._v(" docker pull "),a("code",[e._v("${IMAGE_WITH_NEW_TAG}")])]),e._v(" "),a("li",[a("code",[e._v("VM")]),e._v(" docker run -d "),a("code",[e._v("${IMAGE_WITH_NEW_TAG}")])]),e._v(" "),a("li",[a("code",[e._v("Slack")]),e._v(" NotifyUser")])])])]),e._v(" "),a("h2",{attrs:{id:"slides"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slides"}},[e._v("#")]),e._v(" Slides")]),e._v(" "),a("p",[a("img",{attrs:{src:"/jobHunter/slide01.jpg",alt:"image"}}),e._v(" "),a("img",{attrs:{src:"/jobHunter/slide02.jpg",alt:"image"}}),e._v(" "),a("img",{attrs:{src:"/jobHunter/slide03.jpg",alt:"image"}}),e._v(" "),a("img",{attrs:{src:"/jobHunter/slide04.jpg",alt:"image"}}),e._v(" "),a("img",{attrs:{src:"/jobHunter/slide05.jpg",alt:"image"}}),e._v(" "),a("img",{attrs:{src:"/jobHunter/slide06.jpg",alt:"image"}}),e._v(" "),a("img",{attrs:{src:"/jobHunter/slide07.jpg",alt:"image"}}),e._v(" "),a("img",{attrs:{src:"/jobHunter/slide08.jpg",alt:"image"}}),e._v(" "),a("img",{attrs:{src:"/jobHunter/slide09.jpg",alt:"image"}}),e._v(" "),a("img",{attrs:{src:"/jobHunter/slide10.jpg",alt:"image"}}),e._v(" "),a("img",{attrs:{src:"/jobHunter/slide11.jpg",alt:"image"}}),e._v(" "),a("img",{attrs:{src:"/jobHunter/slide12.jpg",alt:"image"}}),e._v(" "),a("img",{attrs:{src:"/jobHunter/slide13.jpg",alt:"image"}}),e._v(" "),a("img",{attrs:{src:"/jobHunter/slide14.jpg",alt:"image"}}),e._v(" "),a("img",{attrs:{src:"/jobHunter/slide15.jpg",alt:"image"}})]),e._v(" "),a("h2",{attrs:{id:"screenshots"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#screenshots"}},[e._v("#")]),e._v(" ScreenShots")]),e._v(" "),a("p",[a("img",{attrs:{src:"/jobHunter/screenshot01.jpg",alt:"image"}}),e._v(" "),a("img",{attrs:{src:"/jobHunter/screenshot02.jpg",alt:"image"}})])])}),[],!1,null,null,null);t.default=i.exports}}]);