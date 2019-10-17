(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{214:function(t,e,a){"use strict";a.r(e);var s=a(0),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sql-練習題"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-練習題"}},[t._v("#")]),t._v(" SQL 練習題")]),t._v(" "),a("h4",{attrs:{id:"source-testdome"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#source-testdome"}},[t._v("#")]),t._v(" Source: TestDome")]),t._v(" "),a("p",[t._v("Q1. "),a("code",[t._v("Medium")]),t._v(" - 有點難有卡一段時間")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Table : Session")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("id")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("userId")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("duration")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("10")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("18")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("14")])])])])]),t._v(" "),a("li",[a("p",[t._v("Question:")]),t._v(" "),a("ul",[a("li",[t._v("Write a query that selects userId and average session duration for each user who has more than one session.")]),t._v(" "),a("li",[t._v("列出有超過一個Session的User, 他的UserID和平均Session Duration\nAns")])])])]),t._v(" "),a("div",{staticClass:"language-sql= line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SELECT userId, AVG(duration)\n  FROM sessions\n GROUP BY userId\nHAVING COUNT(userId) > 1\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("ul",[a("li",[t._v("Tips:\n"),a("ul",[a("li",[t._v("先用 Group By 聚合同User 的情況")]),t._v(" "),a("li",[t._v("再用 Having 下條件")])])])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("Q2. "),a("code",[t._v("Done")]),t._v(" - 使用 "),a("code",[t._v("UNION")]),t._v(" 來組合兩個Table")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Table: dogs")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("id")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("name")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("More Stuff")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Put Pipes In")])])])])]),t._v(" "),a("li",[a("p",[t._v("Table: cats")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("id")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("name")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("More Stuff")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Put Pipes In")])])])])])]),t._v(" "),a("p",[t._v("Question:")]),t._v(" "),a("ul",[a("li",[t._v("Write a query that select all distinct pet names")]),t._v(" "),a("li",[t._v("列出所有動物的名字(不包含重複名稱)")])]),t._v(" "),a("p",[t._v("Solution: 使用"),a("code",[t._v("UNION")])]),t._v(" "),a("div",{staticClass:"language-sql= line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SELECT name \n  FROM cats\n UNION \nSELECT name\n  FROM dogs\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ul",[a("li",[t._v("說明: UNION 不會列出重複的部分")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("Q3.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Table: employees")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("id")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("managerId")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("John")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Mike")])])])])]),t._v(" "),a("li",[a("p",[t._v("Write a query that selects the names of employees who are not managers.")])]),t._v(" "),a("li",[a("p",[t._v("列出不是Manager 的員工名字")])])]),t._v(" "),a("div",{staticClass:"language-sql= line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SELECT name \n  FROM employees\n WHERE managerId = ''; \n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])])}),[],!1,null,null,null);e.default=l.exports}}]);