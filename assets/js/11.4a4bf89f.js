(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{211:function(s,e,a){"use strict";a.r(e);var t=a(0),r=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"在-php-使用-redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-php-使用-redis"}},[s._v("#")]),s._v(" 在 PHP 使用 Redis")]),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[a("strong",[s._v("特別感謝")]),s._v("  此為 "),a("code",[s._v("rainlay")]),s._v(" 大分享技術筆記, 在此感謝! @https://github.com/rainlay")])]),s._v(" "),a("h3",{attrs:{id:"語法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#語法"}},[s._v("#")]),s._v(" 語法")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$redis")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Z_redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("公司使用 "),a("a",{attrs:{href:"https://github.com/phpredis/phpredis",target:"_blank",rel:"noopener noreferrer"}},[s._v("phpredis extension"),a("OutboundLink")],1),s._v(" 為 redis Client，\n外部包了一層 Z_redis Library 方便連接 redis，已經設定在 ci 裡面 autoload")]),s._v(" "),a("p",[s._v("如本機開發使用前需先安裝 php redis extension，安裝方式請參考"),a("a",{attrs:{href:"https://github.com/phpredis/phpredis/blob/develop/INSTALL.markdown",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文件"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("code",[s._v("註:這裡其實也可以用一般的 composer 套件來連 redis, 但選擇 extension 的原因是為 php extension 都是用 C 來寫的，效能最好。")])]),s._v(" "),a("h2",{attrs:{id:"命名規則"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名規則"}},[s._v("#")]),s._v(" 命名規則")]),s._v(" "),a("p",[s._v("建議以 : 號做為連接名字符號，大方向的命名方式可以使用 類型 + ID 來做命名。如:")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("可解讀 Key user:1 為 user id = 1 的使用者資料。")]),s._v(" "),a("h3",{attrs:{id:"key-名稱不可過長"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-名稱不可過長"}},[s._v("#")]),s._v(" key 名稱不可過長")]),s._v(" "),a("blockquote",[a("p",[s._v("Very long keys are not a good idea. For instance a key of 1024 bytes is a bad idea not only memory-wise, but also because the lookup of the key in the dataset may require several costly key-comparisons. Even when the task at hand is to match the existence of a large value,hashing it (for example with SHA1) is a better idea, especially from the perspective of memory and bandwidth.")])]),s._v(" "),a("h3",{attrs:{id:"key-名稱不要太短，保持可讀性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-名稱不要太短，保持可讀性"}},[s._v("#")]),s._v(" key 名稱不要太短，保持可讀性")]),s._v(" "),a("blockquote",[a("p",[s._v('Very short keys are often not a good idea. There is little point in writing "u1000flw" as a key if you can instead write "user:1000:followers". The latter is more readable and the added space is minor compared to the space used by the key object itself and the value object. While short keys will obviously consume a bit less memory, your job is to find the right balance.')])]),s._v(" "),a("h3",{attrs:{id:"盡量保持一致的命名風格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#盡量保持一致的命名風格"}},[s._v("#")]),s._v(" 盡量保持一致的命名風格")]),s._v(" "),a("blockquote",[a("p",[s._v('Try to stick with a schema. For instance "object-type:id" is a good idea, as in "user:1000". Dots or dashes are often used for multi-word fields, as in "comment🔢reply.to" or "comment🔢reply-to".')])]),s._v(" "),a("h2",{attrs:{id:"參考連結"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#參考連結"}},[s._v("#")]),s._v(" 參考連結")]),s._v(" "),a("h3",{attrs:{id:"開發規範"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#開發規範"}},[s._v("#")]),s._v(" 開發規範")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://redis.io/topics/data-types-intro",target:"_blank",rel:"noopener noreferrer"}},[s._v("An introduction to Redis data types and abstractions"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"http://ju.outofmemory.cn/entry/218983",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis开发规范一二三"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"php-redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php-redis"}},[s._v("#")]),s._v(" PHP Redis")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/phpredis/phpredis",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/phpredis/phpredis"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"php-redis-extension-安裝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php-redis-extension-安裝"}},[s._v("#")]),s._v(" PHP redis extension 安裝")]),s._v(" "),a("p",[s._v("如果你的 vagrant/server 還沒有裝 php redis extension ，請執行以下指令，這裡請注意你的 php 版本。")]),s._v(" "),a("ul",[a("li",[s._v("SSH 進入 Vagrant VM")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pecl "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" redis\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"; Redis PHP Driver'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('extension=redis.so"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("php --ini "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Loaded Configuration"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s|.*:\\s*||"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("      \n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"; Redis PHP Driver'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('extension=redis.so"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/php/7.1/fpm/php.ini\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("別忘了重開 php-fpm")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" php7.1-fpm restart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"其他-redis-事項"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他-redis-事項"}},[s._v("#")]),s._v(" 其他 Redis 事項")]),s._v(" "),a("h3",{attrs:{id:"config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[s._v("#")]),s._v(" config")]),s._v(" "),a("p",[s._v("路徑")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("/etc/redis/config\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Port 設定")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("bind")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("log 位置/檔名")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("logfile "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/lib/redis/redis.log"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("db 備份")]),s._v(" "),a("p",[s._v("路徑")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" /var/lib/redis\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("檔名")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("dbfilename dump.rdb\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("密碼設定")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("requirepass "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("your_password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);