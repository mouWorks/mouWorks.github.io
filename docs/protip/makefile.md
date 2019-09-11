# Makefile

::: tip 注意
1. Makefile indent 吃 tab 而非space -> 建議可裝 makefile plugin 協助偵錯
2. .PHONY 的設定
:::

* EditorConfig 設定Makefile 
    * 在你的專案目錄下面新增一個 `.editorconfig`, 加入以下內容, IDE(如phpStorm) 就會抓取到設定

```editorconfig
# Tab indentation (no size specified)
[Makefile]
indent_style = tab
```

## PHONY 的用法

* 舉例
* `make vendor: composer install`
* 下完 `make vendor` 後, 正好 composer 更新會產生 `vendor` 資料夾, 故再次下 `make vendor` 就會錯誤
* 此情況下, 就要設定 `.PHONY: vendor`

## Makefile範例

* @jobfinder

```makefile
#!/usr/bin/make -f
include .env
export
BRANCH := $(shell git name-rev --name-only HEAD)
PHP_CONTAINER := jf_dev_phpfpm

.PHONY: build update-d update-f gulp-watch

all: env-build start build init-db init-data

build: update-d update-f

# Git Related
pull:
	@echo ">>> Pull Code on Current branch [$(BRANCH)]"
	git pull origin $(BRANCH) --rebase

push:
	@echo ">>> Current branch [$(BRANCH)] Pushing Code"
	git push origin $(BRANCH)

# Use the System

start: cp_conf
	docker-compose up -d --no-recreate
	chmod 777 resources
	@echo ">>> Start: Visit http://localhost:9487 ...."

stop:
	docker-compose stop

update-d:
	composer install

update-f:
	npm install

gulp-watch:
	gulp watch

# Environment Related
env-build: docker-build

cp_conf:
	cp _conf/default.conf /tmp

docker-build:
	docker-compose build --parallel

docker-destroy:
	docker-compose down --remove-orphans

destroy: docker-destroy
	rm -rf vendor && rm -rf node_modules

rebuild: destroy all

# DB init
init-db:
	docker exec -it $(PHP_CONTAINER) php artisan migrate

# Data Init
init-data:
	cp resources/json/condition.sample.json resources/json/condition.json

# Behavior

update-104-jobs:
	php artisan update:jobs 104

update-companies:
	php artisan update:companies

# Behavior w/Docker
dk-update-jobs:
	docker exec -it $(PHP_CONTAINER) php artisan update:jobs 104

dk-update-companies:
	docker exec -it $(PHP_CONTAINER) php artisan update:companies

refresh: dk-update-jobs dk-update-companies

```