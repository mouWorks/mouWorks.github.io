(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{287:function(s,a,e){"use strict";e.r(a);var t=e(14),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"queue-beanstalkd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#queue-beanstalkd"}},[s._v("#")]),s._v(" Queue-Beanstalkd")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[e("strong",[s._v("特別感謝")]),s._v("  此為 "),e("code",[s._v("rainlay")]),s._v(" 大分享技術筆記, 在此感謝! @https://github.com/rainlay")])]),s._v(" "),e("h2",{attrs:{id:"名詞說明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#名詞說明"}},[s._v("#")]),s._v(" 名詞說明")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("beanstalkd")]),s._v(" -> 一個PHP用的 Queue (但僅是queue, 需要用工具去寫入和取出)")]),s._v(" "),e("li",[e("code",[s._v("supervisor")]),s._v(" -> 對queue 進行操作的工具")]),s._v(" "),e("li",[e("code",[s._v("pheanstalkd")]),s._v(" -> To be updated.")])]),s._v(" "),e("h3",{attrs:{id:"php-連接-beanstalkd-設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php-連接-beanstalkd-設定"}},[s._v("#")]),s._v(" PHP 連接 beanstalkd 設定")]),s._v(" "),e("p",[s._v("依照環境設定分為")]),s._v(" "),e("ol",[e("li",[s._v("development")]),s._v(" "),e("li",[s._v("testing")]),s._v(" "),e("li",[s._v("production")])]),s._v(" "),e("p",[s._v("皆位於 `application/config/{environment}/COMPANY.php")]),s._v(" "),e("p",[s._v("而專案讀取的檔案位置於 "),e("code",[s._v("application/config/COMPANY.php")]),s._v("，因此在部屬時，需將對應環境的 COMPANY.php 複製到 "),e("code",[s._v("application/config/COMPANY.php")]),s._v("，才可以讓 PHP 正確的連接。")]),s._v(" "),e("h3",{attrs:{id:"environment-env"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environment-env"}},[s._v("#")]),s._v(" environment.env")]),s._v(" "),e("p",[s._v("這裡 "),e("code",[s._v("env")]),s._v(" File 儲存著 DB 連線資訊等敏感資料，因此要設定正確 beanstalkd 才能正確的連線到資料庫。")]),s._v(" "),e("p",[s._v("env file 不會進入 git, 如果是新的專案部屬或修改參數，請參考 environment.example 去新增或修改 environment.env 檔案。")]),s._v(" "),e("h2",{attrs:{id:"project-supervisor-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#project-supervisor-config"}},[s._v("#")]),s._v(" Project Supervisor Config")]),s._v(" "),e("p",[s._v("當今天想要新增一個 php worker 去處理 queue 的相關事務時，除了撰寫 php 程式碼以外，還要設定好相對應的 supervisor config，才能讓 supervisor 將 php 執行起來成 daemon process。")]),s._v(" "),e("h3",{attrs:{id:"路徑"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路徑"}},[s._v("#")]),s._v(" 路徑")]),s._v(" "),e("p",[s._v("依據開發環境如：")]),s._v(" "),e("ol",[e("li",[e("code",[s._v("local")])]),s._v(" "),e("li",[e("code",[s._v("development")])]),s._v(" "),e("li",[e("code",[s._v("production")])]),s._v(" "),e("li",[e("code",[s._v("testing")])])]),s._v(" "),e("p",[s._v("皆位於 "),e("code",[s._v("supervisor/")]),s._v(" 下。")]),s._v(" "),e("h3",{attrs:{id:"config-解說"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#config-解說"}},[s._v("#")]),s._v(" config 解說")]),s._v(" "),e("p",[s._v("基本上一個 program worker 就會對應到一個相對應的 config, config 可參考下面範例與解釋")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("program:push_task_consumer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ndirectory "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /home/ubuntu/beanstalkd_worker/current\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("command")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sudo php index.php push_task_consumer\nprocess_name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" %"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("program_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("s_%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process_num"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("02d\nnumprocs "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("執行的線程數\nautostart "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("自動啟動\nautorestart "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("自動重新啟動\nstartsecs "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("啟動 n 秒後 如果沒有結束 表示正常啟動\nstartretries "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("啟動失敗重試次數\nuser "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" root\nredirect_stderr "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nstdout_logfile_maxbytes "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 20MB "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("Log 大小\nstdout_logfile_backups "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("Log 備份數量\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("stopasgroup")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("killasgroup")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("h3",{attrs:{id:"supervisor-config-部屬"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supervisor-config-部屬"}},[s._v("#")]),s._v(" supervisor config 部屬")]),s._v(" "),e("p",[s._v("Config 路徑")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("/etc/supervisor/conf.d"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果是 deployer 部屬的話，會將上述專案裡面的 "),e("code",[s._v("/supervisor/*.conf")]),s._v(" 複製到 "),e("code",[s._v("/etc/supervisor/conf.d")]),s._v(" 裡面，這樣 supervisor 才能正確讀取，如果要手動部屬的話，請記得手動複製對應環境的 config 至 "),e("code",[s._v("/etc/supervisor/conf.d")])]),s._v(" "),e("h2",{attrs:{id:"beanstalkd-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beanstalkd-config"}},[s._v("#")]),s._v(" Beanstalkd Config")]),s._v(" "),e("p",[s._v("位置")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("/etc/default/beanstalkd\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("這邊可能會調整到的參數")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# listen address 預設應該是 127.0.0.1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BEANSTALKD_LISTEN_ADDR")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# listen port")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BEANSTALKD_LISTEN_PORT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11300")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"beanstalkd-指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beanstalkd-指令"}},[s._v("#")]),s._v(" beanstalkd 指令")]),s._v(" "),e("p",[s._v("查看 beanstalkd 狀態")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" beanstalkd status\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("重啟 beanstalkd")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" beanstalkd restart\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("停止 beanstalkd")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" beanstalkd stop\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("啟動 beanstalkd")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" beanstalkd start\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"supervisor-指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supervisor-指令"}},[s._v("#")]),s._v(" Supervisor 指令")]),s._v(" "),e("p",[s._v("服務啟動")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" supervisor start \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("OR")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" supervisord start\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("服務狀態")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" supervisor status \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("OR")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" supervisord status\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("服務關閉")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" supervisor stop \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("OR")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" supervisord stop\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"supervisorctl-管理線程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supervisorctl-管理線程"}},[s._v("#")]),s._v(" Supervisorctl 管理線程")]),s._v(" "),e("p",[s._v("查看 supervisor 線程狀態")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" supervisorctl status\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("重新讀取 supervisor config")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" supervisorctl reread\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("更新 supervisor 線程")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" supervisorctl update\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("重啟 supervisor 線程")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" supervisorctl restart all\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("啟動 supervisor 線程")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" supervisorctl restart all\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"每次有新的程式部屬時-執行以下指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#每次有新的程式部屬時-執行以下指令"}},[s._v("#")]),s._v(" 每次有新的程式部屬時 執行以下指令")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" supervisorctl reread\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" supervisorctl update\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"監控頁面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#監控頁面"}},[s._v("#")]),s._v(" 監控頁面")]),s._v(" "),e("ul",[e("li",[s._v("已移除, 待補上")])]),s._v(" "),e("h3",{attrs:{id:"簡單錯誤排除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#簡單錯誤排除"}},[s._v("#")]),s._v(" 簡單錯誤排除")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("檢查線程狀態")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ sudo supervisorctl status\nchat_message_consumer:chat_message_consumer_00   FATAL     Exited too quickly (process log may have details)\nchat_message_consumer:chat_message_consumer_01   FATAL     Exited too quickly (process log may have details)\nchat_message_consumer:chat_message_consumer_02   RUNNING   pid 175, uptime 20 days, 1:39:42\nchat_message_consumer:chat_message_consumer_03   RUNNING   pid 205, uptime 20 days, 1:36:20\nchat_message_consumer:chat_message_consumer_04   RUNNING   pid 29932, uptime 19 days, 10:36:33\nchat_message_consumer:chat_message_consumer_05   FATAL     Exited too quickly (process log may have details)\nchat_message_consumer:chat_message_consumer_06   FATAL     Exited too quickly (process log may have details)\nchat_message_consumer:chat_message_consumer_07   FATAL     Exited too quickly (process log may have details)\n...\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("清掉 queue 裡的 todo (重開就可以了)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo service beanstalkd restart\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("如果 supervisorctl 有線程掛掉，重開就可以了")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo supervisorctl restart all\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("搜尋 log")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# log 目錄\ncd /var/log/supervisor\n\n# 搜尋\ngrep -inR '你要找的關鍵字' .\n\n# 看你要的 log\nvim chat_message_consumer_13-stdout---supervisor-m2aQ6P.log\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])])])]),s._v(" "),e("h3",{attrs:{id:"本機安裝-queue-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本機安裝-queue-server"}},[s._v("#")]),s._v(" 本機安裝 queue server")]),s._v(" "),e("h4",{attrs:{id:"clone-程式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clone-程式"}},[s._v("#")]),s._v(" clone 程式")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd ~/Code\ngit clone git@bitbucket.org:COMPANY_rd/beanstalkd_worker.git\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"複製-config-檔"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#複製-config-檔"}},[s._v("#")]),s._v(" 複製 config 檔")]),s._v(" "),e("p",[s._v("先登入進 vagrant")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vagrant ssh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("複製設定並重開服務")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 再複製設定\ncp /home/vagrant/Code/beanstalkd_worker/supervisor/local/* /etc/supervisor/conf.d/\n\n# 重開服務\nsudo service supervisor restart\nsudo supervisorctl reread\nsudo supervisorctl update\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("查看狀態")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ sudo supervisorctl status\nchat_message_consumer:chat_message_consumer_00   RUNNING   pid 217, uptime 0:00:13\nnotice_consumer:notice_consumer_00               RUNNING   pid 21, uptime 0:00:13\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("看到 RUNNING 就代表執行成功，失敗的話請到 "),e("code",[s._v("/var/log/supervisor/")]),s._v(" 隨便找一個 log 看錯誤")]),s._v(" "),e("h4",{attrs:{id:"補充筆記"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#補充筆記"}},[s._v("#")]),s._v(" 補充筆記")]),s._v(" "),e("ol",[e("li",[s._v("beanstalkd 改完設定之後，一定要重開機")]),s._v(" "),e("li",[s._v("會架 "),e("code",[s._v("beanstalkd-ha")]),s._v(" 是因為 gcp loadbalancer 只支援 80 443")]),s._v(" "),e("li",[e("code",[s._v("beanstalkd-ha")]),s._v(" 機器裡放的是 "),e("code",[s._v("haproxy")]),s._v(", 設定放在 "),e("code",[s._v("/etc/haproxy/haproxy.cfg")])]),s._v(" "),e("li",[s._v("記得 "),e("code",[s._v("beanstalkd-1")]),s._v(" 目前沒有在 haproxy 裡面，如果太忙的話要把 "),e("code",[s._v("beanstalkd-1")]),s._v(" 打開並修改 "),e("code",[s._v("haproxy")]),s._v(" 設定")])])])}),[],!1,null,null,null);a.default=r.exports}}]);