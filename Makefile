#!/usr/bin/make -f
BRANCH := $(shell git name-rev --name-only HEAD)

build:
	@echo ">>> Pulling vuepress"
	npm i -g vuepress

start:
	@echo ">>> Bring up Local Docs"
	vuepress dev docs

pull:
	@echo ">>> Pull Code on Current branch [$(BRANCH)]"
	git pull origin $(BRANCH) --rebase

push: pull
	@echo ">>> Current branch [$(BRANCH)] Pushing Code"
	git push origin $(BRANCH)