# CircleCI 

## Good,Bad,Ugly

* 跟Travis相比, yml檔比較難寫(特別是格式錯)
* 跑起來比 Travis快
* Cache機制要設定也較為複雜
* 支援Bitbucket (Travis不支援Bitbucket)
* 設定好的話, 平行跑起來可能可以很快
* 預設的Slack通知不能自訂格式, `2.1` 以上的版本配合 `orb` 就可以自訂內容 
    * 可參考本Repo的 config.yml, 有以下
    * `2.1`版語法
    * `orb` + 自定Slack通知
    * `node_module` 做Cache

## 資料結構: 

1. 資料主要位於 `.circleci` 資料夾(專案目錄下)
2. CI 的 yml 設定 `config.yml` 設定檔案
3. 建議跟CI相關的都可以放在 `.circleci` 目錄下, 便於整理

![img](/config_yaml_file.png)

::: tip 使用限制
`每週你有 250 mins` 免費可以使用
免費版本: 每週 2500 Credit (250min), 週六會重新計算
* Credit計算: 每1分鐘10 credit
:::

::: tip ProTip: 如何SSH進去機器裡面看

* `注意!` 進去機器一定要記得取消, 不然會算 Minute
    * 在看Workflow時, 選 `Rerun with SSH`
* SSH 加上 Key
    * 加上 Key 的方法: [見Doc](https://circleci.com/docs/2.0/ssh-access-jobs/)
    * 公司的 CircleCI, 是根據 `COMPANY` 這個User去SSH登入
    * `公司` 的 SSH Key: `id_rsa_COMPANY`
        1. 需要該把 key
        2. SSH時, 用該把 Key 去登入
    * 去 `ssh` key folder, 下指令 
    * 如: `ssh -i id_rsa_COMPANY -p 64535 3.84.47.135`
    * 注意每次給的 IP 和 Port 會不相同.
:::

::: tip ProTip: 撰寫 config.yml 要注意的

* Yaml 有規定的特殊格式, 需要符合
* 可用 CLI 檢查
    1. 先安裝 `circleci CLI`
    2. CLI 下指令 `circleci config validate` 即可檢查
:::

* Sample Yaml

```yaml

version: 2.0
jobs:
  build:
    docker: # Prep PHP and Ngix Env
    - image: circleci/php:7.1-fpm   #PHP
    - image: circleci/mariadb:10.3  #DB
      environment:
         MYSQL_ALLOW_EMPTY_PASSWORD: yes
         MYSQL_ROOT_PASSWORD: 'circleci'
         MYSQL_DATABASE: COMPANY_DB
         TZ: "Asia/Taipei"  # Set The TimeZone
    environment: # Environment for a Job
       TZ: "Asia/Taipei" # Set The TimeZone
       FOO: TEST_NAME
    working_directory: ~/SampleApp # give it a name
    steps:
    - checkout
    - run:
        name: Wait for DB to start
        command: dockerize -wait tcp://127.0.0.1:3306 -timeout 120s
    - run:
        name: Show Current PHP Version
        command: "php -v"
    - run:
        name: Trying Env Var
        command: "echo ${TEST_NAME}"
    - run:
        name: Show Current Location
        command: pwd
    - run:
        name: List all the files to ensure checkout
        command: ls
    - run:
        name: Install MySQL Client
        command: sudo apt install mysql-client
    - run:
        name: Install MySQL Docker Extenstions
        command: |
         sudo docker-php-ext-install mysqli
         sudo docker-php-ext-enable mysqli
    - run:
        name: Check PHP Info
        command: php -v
    - run:
        name: Install Composer Dependency
        command: composer install --optimize-autoloader
    - run:
        name: Copying a Custom Config For CircleCI
        command: |
            mv .circleci/COMPANY.circleci.php application/config/COMPANY.php
            mv .circleci/database.circleci.php application/config/database.php
    - run:
        name: Just Index.php
        command: php index.php
    - run:
        name: Just Run Migration command
        command: php index.php migration
#    - run:
#        name: Show all the migration
#        command: php index.php migration ls
    - run:
        name: Run Migration (Before 2019 6/10)
        command: |
            mv .circleci/pre_migration.sh .
            ./pre_migration.sh
#    - run:
#        name: List Migration Status after Migrate
#        command: php index.php migration ls
# sometimes it would fail....so turn it off first
#    - run:
#        name: List Seeder after Migration
#        command: php index.php seeder ls
    - run:
        name: Show MySQL Version
        command: mysql --version
    - run:
        name: Load the Default MySQL (Some data to Init)
        command: "mysql -h 127.0.0.1 -u root -pcircleci COMPANY_forum < .circleci/COMPANY_forum.sql"
#    - run:
#        name: Run Seeder
#        command: |
#            php index.php seeder run Adj_seeder
#            php index.php seeder run Background_seeder
#            php index.php seeder run Animal_seeder
#            php index.php seeder run User_record_seeder
    - run:
        name: Run Migration (AFTER 2019 6/10)
        command: php index.php migration migrate
    - run:
        name: Install phpUnit 7.5 phar
        command: |
            wget https://phar.phpunit.de/phpunit-7.5.phar
            chmod +x phpunit-7.5.phar
            mv phpunit-7.5.phar phpunit
    - run:
        name: Run Unit Test
        command: |
            ./phpunit --exclude-group ignore --testdox
#    Skip for now - the Api Test would fail
#    - run:
#        name: Run Api Test
#        command: |
#            ./phpunit application/api_tests --exclude-group ignore --testdox
    - run:
        name: Build Success!
        command: |
            mv .circleci/success.sh .
            ./success.sh
#  Not Actually using... every job is independent
#  test:
#    docker:
#    - image: circleci/php:7.1-fpm   #PHP
#    steps:
#    - run:
#        name: Show Me all the files
#        command: ls
workflows:
  version: 2
  build_and_test:
    jobs:
    - build:
        filters:
          branches:
             only:
             - pre
             - dev
#            ignore: master
#            only: try_CircleCI
#            - try_CircleCI
#            - pre
#  Not Actually using
#    - test:
#        filters:
#          branches:
#            only:
#            - try_CircleCI
#        requires: # Test would only run when build is complete
#          - build
```

* cache sample
* 僅擷取部分 Yaml 檔案

```yaml
- restore_cache:
    name: Restore Node_module Cache
    keys:
     - node_modules-{{ checksum "package.lock" }}
- run:
    name: NPM Install
    command:  npm install
- save_cache:
    name: Save Node_module Cache
    key: node_modules-{{ checksum "package.lock" }}
    paths:
     - ./node_modules/
```

