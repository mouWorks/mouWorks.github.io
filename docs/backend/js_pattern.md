# JS Pattern

## 重要概念

* `use strict` 嚴格模式
* `JS` 沒有 class
* 避免全域變數 (要用 var)
    * Why ?
        * 避免用全域變數讓你的 code 更 portable 
    * How ?
        * 忘了用 var 會不經意的生出 `全域變數`
        * 使用命名空間 (namespace)
        * 用自我執行的立即函示 (immediate function)
    
* `var` vs `let` vs `const`?
    * `let` 為 `ES6` 之後新增的宣告概念
    * var 的作用域在 function 內, 但 let 作用域在區塊之內
    * var 在同名的情況下, 區域變數可能會蓋到全域變數
    * `let` 不可重複宣告, 會錯, `var` 可以
    * `const` -> 如果宣告後 不會重新賦值, 使用 const

* JS `Hoisting` 問題



