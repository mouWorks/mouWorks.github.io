# NestJS

#### Info
* NodeJS backend Framework
* TypeScript suggested
* DI (Dependency Injection)

#### Concept

* App 進入點為 `Module`
* Module: 模組
    * 可以 Load `Controller` 和 `Service`, `Providers`
* Controller
* Service

#### DTO

* Data Transfer Object


#### Pipes

* 可以用來過濾資料
* Parameter-level pipes :
    * 較為簡潔, 但會需要在 handler 多加上Code, 可能很難維護
* Handler-level pipes:
    * 需要寫比較多的Code, 但是有以下好處:
        * Parameter 端不需要多餘的Code
        * 較容易擴展
        * 配合 DTO 使用 比較好
