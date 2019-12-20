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

#### ORM (Object Relational Mapping)
* 用 `OOP` 的方式操作資料庫存取
* Pros:
    * Easier to maintain.
    * 自動化 db binding, 資料結構, relations
    * No SQL Syntax required
    * DB抽象化 - 方便抽換DB
    * 運用 OOP概念, 便於繼承

#### TypeORM
    * Entity: 用來表示 Tables
    * Repository: 


#### Pipes (Validations)

* 可以用來過濾資料
* Parameter-level pipes :
    * 較為簡潔, 但會需要在 handler 多加上Code, 可能很難維護
* Handler-level pipes:
    * 需要寫比較多的Code, 但是有以下好處:
        * Parameter 端不需要多餘的Code
        * 較容易擴展
        * 配合 DTO 使用 比較好

