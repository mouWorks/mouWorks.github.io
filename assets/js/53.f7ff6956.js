(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{324:function(a,s,t){"use strict";t.r(s);var n=t(14),r=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"algorithm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#algorithm"}},[a._v("#")]),a._v(" Algorithm")]),a._v(" "),t("p",[t("img",{attrs:{src:"/the_big_o.png",alt:"img"}})]),a._v(" "),t("h2",{attrs:{id:"mergesort"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mergesort"}},[a._v("#")]),a._v(" MergeSort")]),a._v(" "),t("h2",{attrs:{id:"quicksort"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quicksort"}},[a._v("#")]),a._v(" QuickSort")]),a._v(" "),t("h2",{attrs:{id:"heapsort"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#heapsort"}},[a._v("#")]),a._v(" HeapSort")]),a._v(" "),t("h2",{attrs:{id:"insertionsort-插入排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#insertionsort-插入排序"}},[a._v("#")]),a._v(" InsertionSort 插入排序")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("類似拿起撲克牌的過程")])]),a._v(" "),t("li",[t("p",[a._v("Input: {5 2 4 6 1 3}。")])]),a._v(" "),t("li",[t("p",[a._v("首先拿起第一張牌, 手上有 {5}。")])]),a._v(" "),t("li",[t("p",[a._v("拿起第二張牌 2, 把 2 insert 到手上的牌 {5}, 得到 {2 5}。")])]),a._v(" "),t("li",[t("p",[a._v("拿起第三張牌 4, 把 4 insert 到手上的牌 {2 5}, 得到 {2 4 5}。")])]),a._v(" "),t("li",[t("p",[a._v("time&Memory")])])]),a._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[a._v("\n\n\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h2",{attrs:{id:"bubblesort-氣泡排序-o-n-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bubblesort-氣泡排序-o-n-2"}},[a._v("#")]),a._v(" BubbleSort 氣泡排序 O(n^2)")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("簡易的Sort")])]),a._v(" "),t("li",[t("p",[a._v("Array Loop thu 一次")])]),a._v(" "),t("li",[t("p",[a._v("兩兩相比, 如果後者比前者小, 則前後交換")])]),a._v(" "),t("li",[t("p",[a._v("68ms, 10MB")])])]),a._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[a._v("swap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$x")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$y")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$t")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$x")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$x")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$y")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$y")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[a._v("sort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$size")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$i")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$i")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$i")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$j")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$i")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$j")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$j")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$i")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$j")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("swap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$i")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$j")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br")])]),t("h2",{attrs:{id:"dijkstra-algorithm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dijkstra-algorithm"}},[a._v("#")]),a._v(" Dijkstra Algorithm")])])}),[],!1,null,null,null);s.default=r.exports}}]);