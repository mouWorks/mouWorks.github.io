(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{317:function(s,t,a){"use strict";a.r(t);var n=a(13),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"makefile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#makefile"}},[s._v("#")]),s._v(" Makefile")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("ol",[a("li",[s._v("Makefile indent 吃 tab 而非space -> 建議可裝 makefile plugin 協助偵錯")]),s._v(" "),a("li",[s._v(".PHONY 的設定")])])]),s._v(" "),a("ul",[a("li",[s._v("EditorConfig 設定Makefile\n"),a("ul",[a("li",[s._v("在你的專案目錄下面新增一個 "),a("code",[s._v(".editorconfig")]),s._v(", 加入以下內容, IDE(如phpStorm) 就會抓取到設定")])])])]),s._v(" "),a("div",{staticClass:"language-editorconfig line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-editorconfig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Tab indentation (no size specified)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token section selector"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Makefile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("indent_style")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" tab")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"phony-的用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phony-的用法"}},[s._v("#")]),s._v(" PHONY 的用法")]),s._v(" "),a("ul",[a("li",[s._v("舉例")]),s._v(" "),a("li",[a("code",[s._v("make vendor: composer install")])]),s._v(" "),a("li",[s._v("下完 "),a("code",[s._v("make vendor")]),s._v(" 後, 正好 composer 更新會產生 "),a("code",[s._v("vendor")]),s._v(" 資料夾, 故再次下 "),a("code",[s._v("make vendor")]),s._v(" 就會錯誤")]),s._v(" "),a("li",[s._v("此情況下, 就要設定 "),a("code",[s._v(".PHONY: vendor")])])]),s._v(" "),a("h2",{attrs:{id:"makefile範例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#makefile範例"}},[s._v("#")]),s._v(" Makefile範例")]),s._v(" "),a("ul",[a("li",[s._v("@jobfinder")])]),s._v(" "),a("div",{staticClass:"language-makefile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-makefile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/usr/bin/make -f")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v(" .env\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v("\nBRANCH "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shell")]),s._v(" git name-rev --name-only HEAD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nPHP_CONTAINER "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" jf_dev_phpfpm\n\n"),a("span",{pre:!0,attrs:{class:"token builtin-target builtin"}},[s._v(".PHONY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" build update-d update-f gulp-watch\n\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" env-build start build init-db init-data\n\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" update-d update-f\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Git Related")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("pull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("@")]),s._v("echo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('">>> Pull Code on Current branch [$(BRANCH)]"')]),s._v("\n\tgit pull origin "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("BRANCH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" --rebase\n\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("@")]),s._v("echo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('">>> Current branch [$(BRANCH)] Pushing Code"')]),s._v("\n\tgit push origin "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("BRANCH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Use the System")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" cp_conf\n\tdocker-compose up -d --no-recreate\n\tchmod 777 resources\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("@")]),s._v("echo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('">>> Start: Visit http://localhost:9487 ...."')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("stop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\tdocker-compose stop\n\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("update-d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\tcomposer install\n\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("update-f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\tnpm install\n\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("gulp-watch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\tgulp watch\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Environment Related")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("env-build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docker-build\n\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("cp_conf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\tcp _conf/default.conf /tmp\n\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("docker-build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\tdocker-compose build --parallel\n\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("docker-destroy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\tdocker-compose down --remove-orphans\n\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("destroy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docker-destroy\n\trm -rf vendor && rm -rf node_modules\n\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("rebuild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" destroy all\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# DB init")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("init-db")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\tdocker exec -it "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PHP_CONTAINER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" php artisan migrate\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Data Init")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("init-data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\tcp resources/json/condition.sample.json resources/json/condition.json\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Behavior")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("update-104-jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("\tphp artisan update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("jobs 104\n\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("update-companies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("\tphp artisan update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("companies\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Behavior w/Docker")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("dk-update-jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("\tdocker exec -it "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),s._v("(PHP_CONTAINER) php artisan update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("jobs 104\n\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("dk-update-companies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("\tdocker exec -it "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),s._v("(PHP_CONTAINER) php artisan update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("companies\n\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("refresh")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dk-update-jobs dk-update-companies\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);