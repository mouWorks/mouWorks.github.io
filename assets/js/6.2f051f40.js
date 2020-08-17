(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{352:function(a,s,t){"use strict";t.r(s);var r=t(42),e=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"db-系統備份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#db-系統備份"}},[a._v("#")]),a._v(" DB 系統備份")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[t("strong",[a._v("特別感謝")]),a._v("  此為 "),t("code",[a._v("rainlay")]),a._v(" 大分享技術筆記, 在此感謝! @https://github.com/rainlay")])]),a._v(" "),t("ul",[t("li",[a._v("mysql/mariadb/percona")])]),a._v(" "),t("h4",{attrs:{id:"mysql系-db-分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql系-db-分支"}},[a._v("#")]),a._v(" Mysql系 DB 分支")]),a._v(" "),t("ul",[t("li",[a._v("Mysql (但已被Oracle買下...)")]),a._v(" "),t("li",[a._v("MariaDB (Mysql後的開源fork)")]),a._v(" "),t("li",[a._v("Percona (Mysql的另外一個fork, 有公司營運)")])]),a._v(" "),t("h4",{attrs:{id:"備份方式的說明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#備份方式的說明"}},[a._v("#")]),a._v(" 備份方式的說明")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("邏輯性備份: 類似 mysqldump")]),a._v(" "),t("ul",[t("li",[a._v("逐項export出來, 類似匯出")]),a._v(" "),t("li",[a._v("需時較久, 資料量一大之後, 很容易Fail")]),a._v(" "),t("li",[a._v("過程中會影響到Prod Database")])])]),a._v(" "),t("li",[t("p",[a._v("物理性備份: 類似 xtrabackup")]),a._v(" "),t("ul",[t("li",[a._v("類似DB檔案直接Copy")]),a._v(" "),t("li",[a._v("需時較短, 較不影響 Prod Database")])])])]),a._v(" "),t("h5",{attrs:{id:"mysqldump"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysqldump"}},[a._v("#")]),a._v(" MysqlDump")]),a._v(" "),t("ul",[t("li",[a._v("待補上")])]),a._v(" "),t("h5",{attrs:{id:"xtrabackup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xtrabackup"}},[a._v("#")]),a._v(" XtraBackup")]),a._v(" "),t("ul",[t("li",[a._v("Percona 所出的一個DB備份功能")]),a._v(" "),t("li",[a._v("物理性備份")])]),a._v(" "),t("h5",{attrs:{id:"mariadb-backup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mariadb-backup"}},[a._v("#")]),a._v(" Mariadb backup")]),a._v(" "),t("ul",[t("li",[a._v("Percona XtraBackup 再 fork 出來的版本")])]),a._v(" "),t("h4",{attrs:{id:"安裝-mariadb-backup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安裝-mariadb-backup"}},[a._v("#")]),a._v(" 安裝 mariadb backup")]),a._v(" "),t("ul",[t("li",[a._v("建議將 MariaDB升到 10.3以上版本")]),a._v(" "),t("li",[a._v("安裝方式")])]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" mariadb-backup\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"完整備份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完整備份"}},[a._v("#")]),a._v(" 完整備份")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("mariabackup --user"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("keeper "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n            --password"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("PASSWORD "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n            --backup "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n            --target-dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/data/dbbackup/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("ul",[t("li",[a._v("--user 你的DB User")]),a._v(" "),t("li",[a._v("--password 你的DB Password")]),a._v(" "),t("li",[a._v("--backup 使用完整備份")]),a._v(" "),t("li",[a._v("--target-dir 備份資料放置的目錄")])]),a._v(" "),t("h2",{attrs:{id:"還原"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#還原"}},[a._v("#")]),a._v(" 還原")]),a._v(" "),t("h4",{attrs:{id:"prepare"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prepare"}},[a._v("#")]),a._v(" Prepare")]),a._v(" "),t("p",[a._v('回復資料庫之前，需先進行 "Prepare" 的動作')]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 先將 MySQL 停止")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" mysql stop\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Prepare")]),a._v("\nmariabackup --prepare --target-dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/data/dbbackup/\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h4",{attrs:{id:"restore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#restore"}},[a._v("#")]),a._v(" Restore")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 刪除 mysql 資料庫位置的資料")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -r /var/lib/mysql/*\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 還原資料庫")]),a._v("\nmariabackup --copy-back --target-dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/data/dbbackup/\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 如果資料 owner 非 mysql 須改為 mysql 否則會有權限問題")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" -R mysql:mysql /var/lib/mysql\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 備份完成，啟動　MySQL")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" mysql start\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])]),t("h2",{attrs:{id:"reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[a._v("#")]),a._v(" Reference")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://mariadb.com/kb/en/library/full-backup-and-restore-with-mariabackup/",target:"_blank",rel:"noopener noreferrer"}},[a._v("mariabackup full-backup"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://mariadb.com/kb/en/library/mariabackup-options/",target:"_blank",rel:"noopener noreferrer"}},[a._v("mariabackup-options"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);