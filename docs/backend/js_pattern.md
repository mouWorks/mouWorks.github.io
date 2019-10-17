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


## JS Functions

* Function statement (函數陳述句)
* 一開始 JS就整個 Load進 記憶體內
* 單純陳述, 需要呼叫才會執行

```javascript
function greet(name){
    console.log('Hello' + name);
}
greet();
```
  
* Function expression (函數表示句)
* 一開始不會放在記憶體內, 當執行到該行的時候,才會創造並且執行

```javascript
var greetFunc = function(name){
    console.log('Hello' + name);
}
greetFunc();
```

* IIFE 
* 類似函數表示句, 只是在後面加了一個括號, 表示創造後 立刻執行

```javascript
var greeting = function(name){
    console.log('Hello' + name);
}();
```

* IIFE 改

```javascript
var greeting = function(name){
    return 'Hello' + name;
}();
```

* 在此情況下, greeting 是一個 string (Function執行後的結果), 而不是 function

## IIFE 的特性

* IIFE 內的變數,有自己的執行空間, 不會受外面影響, 亦不會影響到外部
* 安全的程式碼
* 套件多會使用IIFE的寫法
* 如果一定要用全域變數, 可以用傳的方式將 window 物件傳進去

## Closure

```javascript
function buildFunction(){
    var arr = [];
    
    for (var i=0;i<3;i++){
        arr.push(function(){
            console.log(i);
        })
    }
    return arr;
}

var fs = buildFunction();

fs[0]();
fs[1]();
fs[2]();
```
* 這個例子的結果, 會輸出 (3,3,3) 而非 (1,2,3)
    * 因為 function()內 console.log 並非馬上執行
    * forloop內先把三個 function 丟進去(裡面有console.log指令)
    * forloop跑完, i=3
    * 底下 fs 時,會去呼叫
    * Reference 去找 console.log(i), 此時 i都為3
    * console.log是在底下 fs呼叫時才執行, 而非 loop內. 此時i已經都為 3



