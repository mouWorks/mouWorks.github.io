(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{327:function(v,_,i){"use strict";i.r(_);var l=i(13),e=Object(l.a)({},(function(){var v=this,_=v.$createElement,i=v._self._c||_;return i("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[i("h1",{attrs:{id:"jsdc-2017"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#jsdc-2017"}},[v._v("#")]),v._v(" JSDC 2017")]),v._v(" "),i("h2",{attrs:{id:"_001-101-turbo-boost-next-node-js-slides"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_001-101-turbo-boost-next-node-js-slides"}},[v._v("#")]),v._v(" 001. (101)Turbo boost next Node.js "),i("a",{attrs:{href:"https://speakerdeck.com/yosuke_furukawa/turbo-boost-next-node-dot-js",target:"_blank",rel:"noopener noreferrer"}},[v._v("Slides"),i("OutboundLink")],1)]),v._v(" "),i("ul",[i("li",[v._v("Performance Features")]),v._v(" "),i("li",[v._v("v8 hot functions")]),v._v(" "),i("li",[v._v("run過次的code 再次運用會變成 hot function (optimized)")]),v._v(" "),i("li",[v._v("Crankshaft does not support new ECMA script.")]),v._v(" "),i("li",[v._v("Crankshaft 不支援 let/const, rese/spread 等等新的寫法")]),v._v(" "),i("li",[v._v("因為JS支援動態型別, 所以")])]),v._v(" "),i("h3",{attrs:{id:"turbofan-controller-new-optimizer"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#turbofan-controller-new-optimizer"}},[v._v("#")]),v._v(" Turbofan controller (new optimizer)")]),v._v(" "),i("ul",[i("li",[v._v("NodeJS 9 is 15~20% faster than NodeJS 8")])]),v._v(" "),i("h3",{attrs:{id:"http1-1-issues"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#http1-1-issues"}},[v._v("#")]),v._v(" Http1.1 issues")]),v._v(" "),i("ul",[i("li",[v._v("Browser can only send 6 request at once,")]),v._v(" "),i("li",[v._v("If delayed, it will blocked")]),v._v(" "),i("li",[v._v('"Head of Line Blocking"　HoL Blocking')]),v._v(" "),i("li",[v._v("Http/2 解決了 HoL 問題")])]),v._v(" "),i("h3",{attrs:{id:"babel-and-ayo-js"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#babel-and-ayo-js"}},[v._v("#")]),v._v(" Babel and Ayo.js")]),v._v(" "),i("ul",[i("li",[v._v("新的支援 - Worker (目前 ayo 已有,node尚未支援)")]),v._v(" "),i("li",[v._v("Worker can use CPU better.")])]),v._v(" "),i("h3",{attrs:{id:"講者有demo效能方面的差距"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#講者有demo效能方面的差距"}},[v._v("#")]),v._v(" 講者有Demo效能方面的差距")]),v._v(" "),i("h2",{attrs:{id:"_002-101-前端廣告生態"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_002-101-前端廣告生態"}},[v._v("#")]),v._v(" 002. (101)前端廣告生態")]),v._v(" "),i("ul",[i("li",[v._v("預算可以很低")]),v._v(" "),i("li",[v._v("可以切到很細的市場(將受眾切分出來)")]),v._v(" "),i("li",[v._v("數位廣告已經超過了平面媒體")])]),v._v(" "),i("h3",{attrs:{id:"dsp-demand-side-platform-buyer-side"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#dsp-demand-side-platform-buyer-side"}},[v._v("#")]),v._v(" DSP: Demand side platform, buyer side")]),v._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[v._v("*廣告主上廣告素材\n")])])]),i("h3",{attrs:{id:"ssp-supply-side-platform"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ssp-supply-side-platform"}},[v._v("#")]),v._v(" SSP: Supply side Platform")]),v._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[v._v("*出版者提供流量-例如:去Pixnet, Xuite等取得版位流量\n")])])]),i("h3",{attrs:{id:"adx-ad-exchange"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#adx-ad-exchange"}},[v._v("#")]),v._v(" ADX: Ad Exchange")]),v._v(" "),i("ul",[i("li",[i("p",[v._v("Cookie Matching by DoubleClick")])]),v._v(" "),i("li",[i("p",[v._v("使用一個 302 Redirect 指令去帶回　dsp_user_id")])]),v._v(" "),i("li",[i("p",[v._v("分析: User Profile 切分受眾")])]),v._v(" "),i("li",[i("p",[v._v("100ms 內要投遞廣告")])]),v._v(" "),i("li",[i("p",[v._v("大快雜疑")]),v._v(" "),i("ul",[i("li",[v._v("資料量大　(大)")]),v._v(" "),i("li",[v._v("速度要求快 (100ms)(快)")]),v._v(" "),i("li",[v._v("各種不同的資料來源 (雜)")]),v._v(" "),i("li",[v._v("資料真實性存疑 (疑)")]),v._v(" "),i("li",[v._v("廣告詐騙")])])])]),v._v(" "),i("p",[v._v("*　前端的投遞: 需要讓廣告正確的呈現")]),v._v(" "),i("p",[v._v("*　Banner Ads\n*　Video Ads\n*　Display Ad\n*　Overlay in-video\n*　in-stream ads\n* pre-roll ads　劇前\n* mid-roll ads　劇中間\n* post-roll ads 劇後(通常預告下一級等等)")]),v._v(" "),i("ul",[i("li",[i("p",[v._v("Native Ads")]),v._v(" "),i("ul",[i("li",[v._v("Keyword Search ads")]),v._v(" "),i("li",[v._v("Content ads (內容的中間夾雜廣告)")]),v._v(" "),i("li",[v._v("Recommendation widget (推薦欄位)")]),v._v(" "),i("li",[v._v("Promoted Listings")])])]),v._v(" "),i("li",[i("p",[v._v("蓋版廣告　並不是原生廣告！")])])]),v._v(" "),i("h3",{attrs:{id:"_003-101-前端devops-devops-for-f2e"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_003-101-前端devops-devops-for-f2e"}},[v._v("#")]),v._v(" 003. (101)前端DevOps-DevOps for F2E")]),v._v(" "),i("ul",[i("li",[i("p",[v._v("講者使用 AWS")])]),v._v(" "),i("li",[i("p",[v._v("ITHome DevOps 系列文")])]),v._v(" "),i("li",[i("p",[v._v("Load Balancing - 解釋 Load balancing 功能")])]),v._v(" "),i("li",[i("p",[v._v("CI/CD: bitbucket + circleCI")])]),v._v(" "),i("li",[i("p",[v._v("Slack Notification")])]),v._v(" "),i("li",[i("p",[v._v("AutoScaling:")]),v._v(" "),i("ul",[i("li",[v._v("監控CPU/RAM utility -> 決定擴展/縮減機器內容")])])]),v._v(" "),i("li",[i("p",[v._v("Chaos Monkey: Chaos Engineering")])]),v._v(" "),i("li",[i("p",[v._v("打log 到 Cloudwatch ->便可以建立 Dashboard 管理流程")])])]),v._v(" "),i("h3",{attrs:{id:"_004-101-web-api-mashape"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_004-101-web-api-mashape"}},[v._v("#")]),v._v(" 004. (101)Web API - Mashape")]),v._v(" "),i("ul",[i("li",[i("p",[v._v("Monolithic -> Microservices")])]),v._v(" "),i("li",[i("p",[v._v("Cow -> Milk, Butter, Beef")])]),v._v(" "),i("li",[i("p",[v._v("Running MicroService is like running a City")])]),v._v(" "),i("li",[i("p",[v._v("Ice cream scoop strategy")]),v._v(" "),i("ul",[i("li",[v._v("逐步轉移")])])]),v._v(" "),i("li",[i("p",[v._v("Nuclear bomb strategy")]),v._v(" "),i("ul",[i("li",[v._v("一次全部轉移")])])]),v._v(" "),i("li",[i("p",[v._v("介紹KONG")]),v._v(" "),i("ul",[i("li",[v._v("API 管理工具")]),v._v(" "),i("li",[v._v("Microservices API gateway")]),v._v(" "),i("li",[v._v("Stateless server")]),v._v(" "),i("li",[v._v("Cassandra/PostgreSQL (recommend cassandra)")])])]),v._v(" "),i("li",[i("p",[v._v("介紹Mashape")]),v._v(" "),i("ul",[i("li",[v._v("API Explorer")]),v._v(" "),i("li",[v._v("Lots of Free API online")])])])]),v._v(" "),i("h3",{attrs:{id:"_005-101-原生-web-共存-html5-vs-native-app"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_005-101-原生-web-共存-html5-vs-native-app"}},[v._v("#")]),v._v(" 005. (101)原生/Web 共存 - HTML5 vs Native App")]),v._v(" "),i("ul",[i("li",[i("p",[v._v("Speaker background")]),v._v(" "),i("ul",[i("li",[v._v("urAD founder, JSDC founder")]),v._v(" "),i("li",[v._v("FB Dev Circle Taipei Tech Leader")])])]),v._v(" "),i("li",[i("p",[v._v("WeChat Mini apps")])]),v._v(" "),i("li",[i("p",[v._v("FB Messenger")])]),v._v(" "),i("li",[i("p",[v._v("Keep user inside their app (超級應用)")])]),v._v(" "),i("li",[i("p",[v._v("FB: Chat Extension")]),v._v(" "),i("ul",[i("li",[v._v("類似WeChat小程序")])])]),v._v(" "),i("li",[i("p",[v._v("Chat platform and SuperApps(超級應用)")])]),v._v(" "),i("li",[i("p",[v._v("3B MAU - fb+whatsapp")])]),v._v(" "),i("li",[i("p",[v._v("一鍵式安裝 - one click install")])]),v._v(" "),i("li",[i("p",[v._v("EarlyDay: 類似 Template/QuickReplies")])]),v._v(" "),i("li",[i("p",[v._v("Now: Hybrid:")]),v._v(" "),i("ul",[i("li",[v._v("FB Messenger platform v1.2")]),v._v(" "),i("li",[v._v("開發者可以在WebView之內, 可以存取使用者的身分.")]),v._v(" "),i("li",[v._v("In-chat vs webview資訊Sync")])])]),v._v(" "),i("li",[i("p",[v._v("4 Types:")]),v._v(" "),i("ul",[i("li",[v._v("Facebook built-in template")]),v._v(" "),i("li",[v._v("Postback 機制, user 按下會觸發所定義的資料, 拋向 webhook url")]),v._v(" "),i("li",[v._v("WebUrl")]),v._v(" "),i("li",[v._v("Messenger Extension")])])]),v._v(" "),i("li",[i("p",[v._v("WebExtension")]),v._v(" "),i("ul",[i("li",[v._v("Messenger 內嵌入一個 webview")])])]),v._v(" "),i("li",[i("p",[v._v("要將Domain加入白名單中")])]),v._v(" "),i("li",[i("p",[v._v("Page Access Token")]),v._v(" "),i("ul",[i("li",[v._v("類似 User Access tokens.")]),v._v(" "),i("li",[v._v("提供寫入/刪除　特定FB頁面的權限")]),v._v(" "),i("li",[v._v("一旦拿到 User Access Token, 則可以用 GraphAPI 去取得PageAccess Token.")])])]),v._v(" "),i("li",[i("p",[v._v("PSID: page-scoped User ID")]),v._v(" "),i("ul",[i("li",[v._v("給Bot使用, 無法取得 User資料")])])]),v._v(" "),i("li",[i("p",[v._v("ASID: app-scoped User ID")]),v._v(" "),i("ul",[i("li",[v._v("可以取得User資料")])])]),v._v(" "),i("li",[i("p",[v._v("WebView Extensions")])]),v._v(" "),i("li",[i("p",[v._v("Messenger Extensions JS SDK")])])]),v._v(" "),i("h3",{attrs:{id:"_006-101-vanillajs-data-binding"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_006-101-vanillajs-data-binding"}},[v._v("#")]),v._v(" 006. (101)VanillaJS Data Binding")]),v._v(" "),i("ul",[i("li",[v._v("Speaker tech background: Angular/Typescript")]),v._v(" "),i("li",[v._v("Data Binding: Web 的資料綁定")]),v._v(" "),i("li",[v._v("Ideal Case:")])]),v._v(" "),i("div",{staticClass:"language-javascript= line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[v._v("<span>{post.upvotes}</span>\n")])]),v._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[v._v("1")]),i("br")])]),i("ul",[i("li",[i("p",[v._v("DOM operations are expensive\n"),i("code",[v._v("defineProperty")])])]),v._v(" "),i("li",[i("p",[v._v("WeakMap() ? what is that?")]),v._v(" "),i("ul",[i("li",[v._v("WeakMap can take object as keys.")])])]),v._v(" "),i("li",[i("p",[v._v("Using 'Symbol'")])]),v._v(" "),i("li",[i("p",[v._v("結論: data-binding 可用原生JS實現！ 只是會比較醜一點")])]),v._v(" "),i("li",[i("p",[v._v("Try to do a data-binding by yourself!")])])]),v._v(" "),i("h3",{attrs:{id:"_007-201-googlecloud-iot"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_007-201-googlecloud-iot"}},[v._v("#")]),v._v(" 007. (201)GoogleCloud IoT")]),v._v(" "),i("ul",[i("li",[i("p",[v._v("GoogleCloud IoT")])]),v._v(" "),i("li",[i("p",[v._v("GCPUG")])]),v._v(" "),i("li",[i("p",[v._v("Google Developers Experts")])]),v._v(" "),i("li",[i("p",[v._v("Google Spreadsheet")])]),v._v(" "),i("li",[i("p",[v._v("IoT: 感應溫度, 攝影機等等")])]),v._v(" "),i("li",[i("p",[v._v("服務要收集從 IoT傳回來的資料")]),v._v(" "),i("ul",[i("li",[v._v("被自己的Device DDoS")])])]),v._v(" "),i("li",[i("p",[v._v("Google cache service")]),v._v(" "),i("ul",[i("li",[v._v("Cloud PubSub: 雲端的Queue (AWS SQS?)")])])]),v._v(" "),i("li",[i("p",[v._v("BigTable/BigQuery")]),v._v(" "),i("ul",[i("li",[v._v("Storage")])])]),v._v(" "),i("li",[i("p",[v._v("Cloud DataLab")])]),v._v(" "),i("li",[i("p",[v._v("DataStudio")])]),v._v(" "),i("li",[i("p",[v._v("IoT core: 提供一個端點")])]),v._v(" "),i("li",[i("p",[v._v("App Script - 類似 Excel VBA")])])]),v._v(" "),i("h3",{attrs:{id:"_008-201-vuejs-3d-vr"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_008-201-vuejs-3d-vr"}},[v._v("#")]),v._v(" 008. (201)VueJS 3D VR")]),v._v(" "),i("ul",[i("li",[v._v("VueJS + aframe = 360 panorama VR")]),v._v(" "),i("li",[v._v("WebVR技術")]),v._v(" "),i("li",[v._v("A-frame: a framework by Mozilla")]),v._v(" "),i("li",[v._v("CubeMap: 全景是由六個圖所構成的")]),v._v(" "),i("li",[v._v("進場動畫: 降低Loading")]),v._v(" "),i("li",[v._v("用Vue-cli　建立 vue 模板")]),v._v(" "),i("li",[v._v("內部引用a-frame")]),v._v(" "),i("li",[v._v("Fade-in/Fade-out")]),v._v(" "),i("li",[v._v("WebXR?? webVR+webAR")])]),v._v(" "),i("hr"),v._v(" "),i("p",[v._v("Day 2")]),v._v(" "),i("h3",{attrs:{id:"_001-201-mastering-bitcoin-by-node-js"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_001-201-mastering-bitcoin-by-node-js"}},[v._v("#")]),v._v(" 001. (201) Mastering Bitcoin by Node.js")]),v._v(" "),i("ul",[i("li",[i("p",[v._v("Bitcoin-Blockchain Tech")])]),v._v(" "),i("li",[i("p",[v._v("Blockchain, with functional programming")])]),v._v(" "),i("li",[i("p",[v._v("Bitcoin 類似現金的地方")]),v._v(" "),i("ul",[i("li",[v._v("匿名交易/結果不可改變/雙方同意即完成")])])]),v._v(" "),i("li",[i("p",[v._v("Payment (如支付寶)")]),v._v(" "),i("ul",[i("li",[v._v("非匿名/結果可改(資料在第三方)")])])]),v._v(" "),i("li",[i("p",[v._v("Bitcoin 三個重大技術")]),v._v(" "),i("ul",[i("li",[v._v("匿名性\n"),i("ul",[i("li",[v._v("密碼學 - (1970)")])])]),v._v(" "),i("li",[v._v("去中心化\n"),i("ul",[i("li",[v._v("P2P網路 - (1970)")])])]),v._v(" "),i("li",[v._v("資料不可竄改\n"),i("ul",[i("li",[v._v("共識演算法 - (1990)")])])])])]),v._v(" "),i("li",[i("p",[v._v("Bitcoin mainnet　中的區塊和交易資料")]),v._v(" "),i("ul",[i("li",[v._v("blockexplorer.com")])])]),v._v(" "),i("li",[i("p",[v._v("要假造交易必須掌握 51%　的結點")]),v._v(" "),i("ul",[i("li",[v._v("this makes it almost impossible")])])]),v._v(" "),i("li",[i("p",[v._v("地址開頭代表不同位置")]),v._v(" "),i("ul",[i("li",[v._v("1　(mainnet)")]),v._v(" "),i("li",[v._v("m, n (testnet) - 測試用")])])]),v._v(" "),i("li",[i("p",[v._v("比特幣的交易會")]),v._v(" "),i("ul",[i("li",[v._v("帳本會有別人的交易")]),v._v(" "),i("li",[v._v("每個結點維護一份帳本")]),v._v(" "),i("li",[v._v("每個結點存有一份副本")])])]),v._v(" "),i("li",[i("p",[v._v("i.e. 商店提供 bitcoin address　讓人付帳, 但別人得知該地址可以去反查該 address 有多少錢")])]),v._v(" "),i("li",[i("p",[v._v("ECDSA Signature 數位簽章")])]),v._v(" "),i("li",[i("p",[v._v("Download blockchain")]),v._v(" "),i("ul",[i("li",[v._v("每個 block 有之前區塊的 hash\n"),i("ul",[i("li",[v._v("先去取得 Header(因為整個資料量太大)")])])])])]),v._v(" "),i("li",[i("p",[v._v("Storage - LevelDB by Google (Local Storage)")])]),v._v(" "),i("li",[i("p",[v._v("共識演算法:多個結點同時儲存同樣的資料? how ?")])]),v._v(" "),i("li",[i("p",[v._v("Nonce: 跟挖礦相關")])]),v._v(" "),i("li",[i("p",[v._v("POW: Proof-of-work")])]),v._v(" "),i("li",[i("p",[v._v("最長鏈:機於POW安全性")])]),v._v(" "),i("li",[i("p",[v._v("POS: Proof-of-stack")])]),v._v(" "),i("li",[i("p",[v._v("公有鏈:一人之力難敵眾人之力")]),v._v(" "),i("ul",[i("li",[v._v("POW")]),v._v(" "),i("li",[v._v("POS")])])]),v._v(" "),i("li",[i("p",[v._v("私有鏈:投票的方式.")]),v._v(" "),i("ul",[i("li",[v._v("RBFT")]),v._v(" "),i("li",[v._v("Raft")])])]),v._v(" "),i("li",[i("p",[v._v("Why SHA256?　目前AES公認最安全的加密法")])]),v._v(" "),i("li",[i("p",[v._v("多次SHA?　越多次被破解的機率越低")])]),v._v(" "),i("li")]),v._v(" "),i("h3",{attrs:{id:"_002-201-node-js-for-content-generation-and-fast-delivery"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_002-201-node-js-for-content-generation-and-fast-delivery"}},[v._v("#")]),v._v(" 002. (201) Node.js for Content Generation and Fast Delivery")]),v._v(" "),i("ul",[i("li",[i("p",[v._v("Flash is dying")])]),v._v(" "),i("li",[i("p",[v._v("Flash-> HTML5")])]),v._v(" "),i("li",[i("p",[v._v("Why NodeJS?")]),v._v(" "),i("ul",[i("li",[v._v("will tell you later!")])])]),v._v(" "),i("li",[i("p",[v._v("Frame:")]),v._v(" "),i("ul",[i("li",[v._v("24 frames/sec")])])]),v._v(" "),i("li",[i("p",[v._v("使用者的輸入 -> 利用 NodeJS 去 Renderer")])]),v._v(" "),i("li",[i("p",[v._v("一張一張的圖片 -> 用 FFMpeg 去產出變成影片")])]),v._v(" "),i("li",[i("p",[v._v("automattic/node-canvas")])]),v._v(" "),i("li",[i("p",[v._v("Issues:")]),v._v(" "),i("ul",[i("li",[v._v("CanvasAPI 還不夠成熟")]),v._v(" "),i("li",[v._v(".currentTransform 有些未被支援")]),v._v(" "),i("li",[v._v("直接調用底層(需要使用C++)")])])]),v._v(" "),i("li",[i("p",[v._v("挑戰:")]),v._v(" "),i("ul",[i("li",[v._v("後端皮前端骨: 大部分都是前端為主 (canvas)")])])]),v._v(" "),i("li",[i("p",[v._v("例外處理:")]),v._v(" "),i("ul",[i("li",[v._v("Migration: 相接前版的 data")])])]),v._v(" "),i("li",[i("p",[v._v("舊架構:Flash(Client-side Rendering)")])]),v._v(" "),i("li",[i("p",[v._v("新架構:HTML5(Server-side Rendering)")])]),v._v(" "),i("li",[i("p",[v._v("Preview Server")]),v._v(" "),i("ul",[i("li",[v._v("分割影片")]),v._v(" "),i("li",[v._v("分割完之後丟到Queue")]),v._v(" "),i("li",[v._v("Preview Worker (Renderer)")])])]),v._v(" "),i("li",[i("p",[v._v("VideoMaker硬體要求降低")])]),v._v(" "),i("li",[i("p",[v._v("結果更好更順暢")])]),v._v(" "),i("li",[i("p",[v._v("Ditch the flash")])])]),v._v(" "),i("h3",{attrs:{id:"price"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#price"}},[v._v("#")]),v._v(" Price")]),v._v(" "),i("ul",[i("li",[v._v("營運成本上升(server/worker相關)")])]),v._v(" "),i("h3",{attrs:{id:"challenge"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#challenge"}},[v._v("#")]),v._v(" Challenge")]),v._v(" "),i("ul",[i("li",[i("p",[v._v("Scalability")]),v._v(" "),i("ul",[i("li",[v._v("Preview server/Queue/Preview Worker 有做Auto Scaling")])])]),v._v(" "),i("li",[i("p",[v._v("縮短 Wait Time (for all users)")]),v._v(" "),i("ul",[i("li",[v._v("Smarter Preview Queue")])])]),v._v(" "),i("li",[i("p",[v._v("編輯 / 預覽 /輸出")])]),v._v(" "),i("li",[i("p",[v._v("採取先優化輸出, 在優化預覽, 目前處理編輯中")]),v._v(" "),i("ul",[i("li",[v._v("優化輸出: Server-side rendering")])])]),v._v(" "),i("li",[i("p",[v._v("Why NodeJS ?")]),v._v(" "),i("ul",[i("li",[v._v("希望全公司都用 JS")]),v._v(" "),i("li",[v._v("JS based")]),v._v(" "),i("li",[v._v("JS/NodeJS 的彈性")]),v._v(" "),i("li",[v._v("希望能Reuse Renderer")])])])]),v._v(" "),i("h3",{attrs:{id:"_003-201-網頁開發大型應用程式-destructure-piconion"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_003-201-網頁開發大型應用程式-destructure-piconion"}},[v._v("#")]),v._v(" 003. (201)網頁開發大型應用程式-Destructure Piconion")]),v._v(" "),i("ul",[i("li",[v._v("Made for Chromebook")]),v._v(" "),i("li",[v._v("like Photoshop for Web")]),v._v(" "),i("li",[v._v("Modularize 模組化\n"),i("ul",[i("li",[v._v("降低耦合度")])])]),v._v(" "),i("li",[v._v("Hierarchical Structure\n"),i("ul",[i("li",[v._v("多層式切割")])])]),v._v(" "),i("li",[v._v("Dirty code always exist")]),v._v(" "),i("li",[v._v("Glue Code:膠合程式\n"),i("ul",[i("li",[v._v("模組化之外的Code, usually dirty")]),v._v(" "),i("li",[v._v("Flow Control, pass data between modules")])])]),v._v(" "),i("li",[v._v("Module Code: 模組程式\n"),i("ul",[i("li",[v._v("模組化, Unit Testable")])])]),v._v(" "),i("li",[v._v("Balance:\n"),i("ul",[i("li",[v._v("Too much module is crazy")]),v._v(" "),i("li",[v._v("Java-like:too much")])])]),v._v(" "),i("li",[v._v("只用一兩次 vs. 到處重覆用\n"),i("ul",[i("li",[v._v("重覆性高 -> 模組化")])])]),v._v(" "),i("li",[v._v("靜態資料 vs. 動態資料\n"),i("ul",[i("li",[v._v("靜態:寫死 Hardcode")]),v._v(" "),i("li",[v._v("動態:參數化可帶入新的資料")])])]),v._v(" "),i("li",[v._v("探索未知 vs. 規劃已知")]),v._v(" "),i("li",[v._v("Google Drive API\n"),i("ul",[i("li",[v._v("Web介面: Ctrl+S　直接覆蓋本機檔案　-> 做不到")]),v._v(" "),i("li",[v._v("Ctrl+S　體驗很重要")]),v._v(" "),i("li",[v._v("Solution: Ctrl+S 直接存回雲端")])])]),v._v(" "),i("li",[v._v("Point-新的介面, 整合觸控, 並且有感壓")]),v._v(" "),i("li",[v._v("History:\n"),i("ul",[i("li",[v._v("記錄動作 (節省資源)")]),v._v(" "),i("li",[v._v("記錄圖片 (直接記錄當下的圖片) -　畫筆僅能如此記錄\n"),i("ul",[i("li",[v._v("記憶體不夠清掉歷史紀錄")])])])])])]),v._v(" "),i("h3",{attrs:{id:"_004-201-way-to-fantasyland-func-programming"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_004-201-way-to-fantasyland-func-programming"}},[v._v("#")]),v._v(" 004. (201)Way to FantasyLand(Func programming)")]),v._v(" "),i("ul",[i("li",[v._v("Divide and Conquer")]),v._v(" "),i("li",[v._v("抽象化: Play button")]),v._v(" "),i("li",[v._v("數學\n"),i("ul",[i("li",[v._v("Array 的Concat 類似數學的結合率")])])]),v._v(" "),i("li",[v._v("1950: Functional Programming\n"),i("ul",[i("li",[v._v("semigroup: 其中包含\n"),i("ul",[i("li",[v._v("value 數值")]),v._v(" "),i("li",[v._v("operation　操作")])])])])])]),v._v(" "),i("h3",{attrs:{id:"fantasyland-spec"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fantasyland-spec"}},[v._v("#")]),v._v(" Fantasyland Spec")]),v._v(" "),i("ul",[i("li",[v._v("將數學的抽象概念, 放在js中")]),v._v(" "),i("li",[i("code",[v._v("::")]),v._v(" Type屬於")]),v._v(" "),i("li",[i("code",[v._v("->")]),v._v("Function")]),v._v(" "),i("li",[i("code",[v._v("daggy")]),v._v(" "),i("ul",[i("li",[v._v("Constructor")])])]),v._v(" "),i("li",[v._v("平行運算的基礎就是semigroup")]),v._v(" "),i("li",[v._v("Complier 會檢查 Type,\n"),i("ul",[i("li",[v._v("不需要 unit test")])])]),v._v(" "),i("li",[v._v("Monoid:")]),v._v(" "),i("li",[v._v("Reduce 隱含 monoid 概念")])]),v._v(" "),i("h3",{attrs:{id:"functor"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#functor"}},[v._v("#")]),v._v(" Functor")]),v._v(" "),i("ul",[i("li",[v._v("Type中會處理 Error Handling")]),v._v(" "),i("li",[v._v("Type Signature --\x3e what is this?")])]),v._v(" "),i("h3",{attrs:{id:"_005-201-後端架構api實做案例"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_005-201-後端架構api實做案例"}},[v._v("#")]),v._v(" 005. (201)後端架構API實做案例")]),v._v(" "),i("ul",[i("li",[i("p",[v._v("Old Arch")]),v._v(" "),i("ul",[i("li",[v._v("Drupal+MySQL -> DB Conv -> NodeJS+Mongo")]),v._v(" "),i("li",[v._v("前後分離")])])]),v._v(" "),i("li",[i("p",[v._v("Issues")]),v._v(" "),i("ul",[i("li",[v._v("MySQL Conv to MongoDB 太過暴力:MySQL硬轉")]),v._v(" "),i("li",[v._v("系統沒有持續更新")]),v._v(" "),i("li",[v._v("開發環境難以重現")])])]),v._v(" "),i("li",[i("p",[v._v("Feature Request")]),v._v(" "),i("ul",[i("li",[v._v("後台上稿")]),v._v(" "),i("li",[v._v("前台顯示")]),v._v(" "),i("li",[v._v("跟外部合作-出API提供串連")])])]),v._v(" "),i("li",[i("p",[v._v("Everything around API")]),v._v(" "),i("ul",[i("li",[v._v("Service around API")]),v._v(" "),i("li",[v._v("專心調API效能")]),v._v(" "),i("li",[v._v("Scaling 容易")]),v._v(" "),i("li",[v._v("模組化,可以抽換")])])]),v._v(" "),i("li",[i("p",[v._v("ChangeLog: 記錄功能更動的部分")])]),v._v(" "),i("li",[i("p",[v._v("Validator: 驗證資料做一個 middleware")])]),v._v(" "),i("li",[i("p",[v._v("Read > Write && Json")]),v._v(" "),i("ul",[i("li",[v._v("use MongoDB")])])]),v._v(" "),i("li",[i("p",[v._v("why MongoDB+Redis ?")]),v._v(" "),i("ul",[i("li",[v._v("Redis and MongoDB share the same schema")])])])]),v._v(" "),i("h3",{attrs:{id:"drawbacks"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#drawbacks"}},[v._v("#")]),v._v(" Drawbacks")]),v._v(" "),i("ul",[i("li",[v._v("Node_modules is FAT")]),v._v(" "),i("li",[v._v("架構肥大, 巢狀問題")])]),v._v(" "),i("h3",{attrs:{id:"why-cloud"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#why-cloud"}},[v._v("#")]),v._v(" Why Cloud?")]),v._v(" "),i("ul",[i("li",[v._v("Reduce Ops cost and time")]),v._v(" "),i("li",[v._v("AWS/GCP/Azure? go with GCP because of Cost")]),v._v(" "),i("li",[v._v("UI: Azure > GCP > AWS")]),v._v(" "),i("li",[v._v("Feature: AWS > GCP > Azure")]),v._v(" "),i("li",[v._v("Price: AWS > Azure > GCP")]),v._v(" "),i("li",[v._v("成本考量:選擇GCP")])]),v._v(" "),i("h3",{attrs:{id:"實做考量"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#實做考量"}},[v._v("#")]),v._v(" 實做考量")]),v._v(" "),i("ul",[i("li",[v._v("async/await\n"),i("ul",[i("li",[v._v("遠離 promise/callback hell")]),v._v(" "),i("li",[v._v("Babel 很大一包")])])]),v._v(" "),i("li",[v._v("模組化:\n"),i("ul",[i("li",[v._v("每個模組可以獨立運作")]),v._v(" "),i("li",[v._v("程式碼單純　(<100 lines)")]),v._v(" "),i("li",[v._v("Easy to Read")]),v._v(" "),i("li",[v._v("Easy to Swap")]),v._v(" "),i("li",[v._v("but lots of files")])])])]),v._v(" "),i("h3",{attrs:{id:"大量使用-middleware"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#大量使用-middleware"}},[v._v("#")]),v._v(" 大量使用 middleware")]),v._v(" "),i("ul",[i("li",[v._v("parse QueryString")]),v._v(" "),i("li",[v._v("validator")]),v._v(" "),i("li",[v._v("資料驗證區和主要邏輯區拆離")]),v._v(" "),i("li",[v._v("Code簡潔")])]),v._v(" "),i("h3",{attrs:{id:"why-redis"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#why-redis"}},[v._v("#")]),v._v(" Why Redis?")]),v._v(" "),i("ul",[i("li",[v._v("Read >>> Write")]),v._v(" "),i("li",[v._v("Easier to cache")]),v._v(" "),i("li",[v._v("Speedy")]),v._v(" "),i("li",[v._v("Cronjob handles longer times\n"),i("ul",[i("li",[v._v("Data update time gap")]),v._v(" "),i("li",[v._v("Harder to change previous data")])])])]),v._v(" "),i("h3",{attrs:{id:"mongodb"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mongodb"}},[v._v("#")]),v._v(" MongoDB")]),v._v(" "),i("ul",[i("li",[v._v("小於兩層的巢狀結構(效能考量)")]),v._v(" "),i("li",[v._v("NoSQL定義Schema")]),v._v(" "),i("li",[v._v("要下好 index")]),v._v(" "),i("li",[v._v("Find slow query")]),v._v(" "),i("li",[v._v("Explain")])]),v._v(" "),i("h3",{attrs:{id:"cloud-issues"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#cloud-issues"}},[v._v("#")]),v._v(" Cloud issues:")]),v._v(" "),i("ul",[i("li",[v._v("Google 自動分配 Load balance\n"),i("ul",[i("li",[v._v("自己開一台VM+NginX　配置")])])]),v._v(" "),i("li",[v._v("Mail Server\n"),i("ul",[i("li",[v._v("自己做一台 Api server 界接")])])]),v._v(" "),i("li",[v._v("CDN is expensive\n"),i("ul",[i("li",[v._v("自己做一個 image thumbnail server")]),v._v(" "),i("li",[v._v("縮圖功能")])])])]),v._v(" "),i("h3",{attrs:{id:"concluction"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#concluction"}},[v._v("#")]),v._v(" Concluction")]),v._v(" "),i("ul",[i("li",[v._v("SEO:建議還是改用 SSR")]),v._v(" "),i("li",[v._v("CMS:可用現有Solution,不必自幹後台 (Drupal, Wordpress)")])]),v._v(" "),i("h3",{attrs:{id:"q-a"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[v._v("#")]),v._v(" Q&A")]),v._v(" "),i("ul",[i("li",[v._v("API 一但設定完難以更改\n"),i("ul",[i("li",[v._v("API用替換方式\n"),i("ul",[i("li",[v._v("先出新的, 新舊並存, 再加以抽換")])])])])])]),v._v(" "),i("h2",{attrs:{id:"_006-201-你全家都區塊鏈"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_006-201-你全家都區塊鏈"}},[v._v("#")]),v._v(" 006. (201)你全家都區塊鏈")]),v._v(" "),i("ul",[i("li",[i("p",[v._v("blockchain 區塊鏈")])]),v._v(" "),i("li",[i("p",[v._v("Tech-heavy")])]),v._v(" "),i("li",[i("p",[v._v("blockchain 是個技術棧組合")]),v._v(" "),i("ul",[i("li",[v._v("難得不是區塊鏈本身,而是後面的演算法")])])]),v._v(" "),i("li",[i("p",[v._v("用不同的手段滿足運用")])]),v._v(" "),i("li",[i("p",[v._v("已經配置的Memory不能隨意改變大小")])])]),v._v(" "),i("h3",{attrs:{id:"linkedlist的基本概念"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#linkedlist的基本概念"}},[v._v("#")]),v._v(" LinkedList的基本概念")]),v._v(" "),i("ul",[i("li",[v._v("Linked-list 如何實做?")]),v._v(" "),i("li",[v._v("Linked-list 最後Append 一筆資料")]),v._v(" "),i("li",[v._v("linked-list 可以抽換中間的 block")])]),v._v(" "),i("h3",{attrs:{id:"linkedlist走出一台電腦"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#linkedlist走出一台電腦"}},[v._v("#")]),v._v(" LinkedList走出一台電腦")]),v._v(" "),i("ul",[i("li",[v._v("Decentralized")]),v._v(" "),i("li",[v._v("Sync between servers")]),v._v(" "),i("li",[v._v("Problems:\n"),i("ul",[i("li",[v._v("確保不同結點上面的資料一致")]),v._v(" "),i("li",[v._v("不同電腦上記憶體位置不同\n"),i("ul",[i("li",[v._v("更換一個方法去記錄block的位置")])])]),v._v(" "),i("li",[v._v("DataBlock上面的順序不變")]),v._v(" "),i("li",[v._v("Multiple server sync")]),v._v(" "),i("li",[v._v("Conflict: multiple transactions on nodes.")])])]),v._v(" "),i("li",[v._v("確保兩地資料相同?\n"),i("ul",[i("li",[v._v("checksum是否相同")]),v._v(" "),i("li",[v._v("各種Hash 演算法\n"),i("ul",[i("li",[v._v("用 Crypto API 即可(cryptoJS or related API)")])])])])]),v._v(" "),i("li",[v._v("如何識別Data block ?\n"),i("ul",[i("li",[v._v("同樣用hash")]),v._v(" "),i("li",[v._v("前後都用hash")])])]),v._v(" "),i("li",[v._v("確保順序不可變\n"),i("ul",[i("li",[v._v("用Hash, 而不用記憶體")])])]),v._v(" "),i("li",[v._v("Genesis Block (創世區塊)\n"),i("ul",[i("li",[v._v("也就是第一個 block")])])]),v._v(" "),i("li",[v._v("如何跨機器?\n"),i("ul",[i("li",[v._v("P2P Networking")])])]),v._v(" "),i("li",[v._v("如何新增Block到所有結點?")]),v._v(" "),i("li",[v._v("Chain也會conflict\n"),i("ul",[i("li",[v._v("Consnsus 共識機制\n"),i("ul",[i("li",[v._v("比鏈長:鏈長者贏")]),v._v(" "),i("li",[v._v("Other:PoW, PoS, Ripple, xBFT")])])]),v._v(" "),i("li",[v._v("ETH 用 xBFT共識機制")])])]),v._v(" "),i("li",[v._v("ETH:\n"),i("ul",[i("li",[v._v("再資料內塞程式碼:可以執行: Smart Contract智能合約")])])]),v._v(" "),i("li",[v._v("Current Framework\n"),i("ul",[i("li",[v._v("No need to rebuilt all the shits")])])])])])}),[],!1,null,null,null);_.default=e.exports}}]);