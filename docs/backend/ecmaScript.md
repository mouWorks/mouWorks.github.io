# ECMAScript Update
* Udemy Courses

## Definitions
* ES6
* ES7
* ES8 

### Tips:

* `backtip` :  *`*
    * 用這個取代單or雙 tick
    * 可以直接處理換行 (不需要 \n)
    * 可以在裡面插入變數
        * ``` let msg = `hello ${ppl}`; ```
    * 可以在裡面直接寫運算結果
        * ``` 43*1902 = ${43*1902} ```
    * Ternary Operator 也可以計算
        * ``` 
            isMember = true;
            const result = `Price is ${isMember} ? "$2": "$4"; `
          ```   

* `Tagged Templates` 
```javascript
let string1 = 'Apple is good';
let string2 = 'Banana is yellow';
let string3 = 'Cat is cool';

let lines = [string1, string2, string3];

function buildHTML(tags, lines){

	const newHTML = lines.map(function(line){
		return `${tags[0]}${line}${tags[1]}`;
	});
	return newHTML;
}

const result = buildHTML`<li>${lines}</li>`;
console.log(result[1]);
```
