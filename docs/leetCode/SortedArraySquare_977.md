### 977 Sorted Array Square

* 給予一個 `遞增排序` 的數字陣列 (但包含負數), 回傳一個陣列為其平方, 且也需要 `遞增排序` 

* input/output

```javascript
nums = [-4,-1,0,3,10] 
output = [0,1,9,16,100]
```

```javascript
nums = [-7,-3,2,3,11]
output = [4,9,9,49,121]
```

#### 解法分析:

##### 暴力法:
* 先 loop 一次將數字平方, 在跑一次排序.

```javascript

```

##### 雙指標法:
* 建立一個新的陣列
* 舊分別從頭尾走, 平方後兩兩相比, 較大的塞後面, 較小的塞前面.

* Not yet completed.
```javascript
// let head = 0
// let tail = nums.length
// let result = []

// for (let head = 0; head < nums.length; head++) {
//   if(nums[head]*nums[head]) > (nums[tail] * nums[tail]){
//       result[tail] = nums[tail]*nums[tail]
//   }else{
//       result[tail] = nums[head]*nums[head]
//   }  
//   tail --  
// }
// return result
```
