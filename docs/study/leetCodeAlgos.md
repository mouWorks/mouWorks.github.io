# 列出常用的 LeetCode 算法

### 遍歷 (Brute-force?)

-   最簡單的, for-loop 全部跑一遍, 最 easy 的情況下跑一遍 O

```javascript
for (let i = 0; i < data.length; i++) {
    console.log("Block statement execution no." + i);
}
```

-   但最常發生的事需要 兩層 for-loop O^2 -> 這通常是要避免的情況

```javascript
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
        console.log("Block statement execution no." + j);
    }
}
```

-   TwoSum 用 brute force 解法:

```javascript
let rest: number;
for (let i = 0; i < nums.length; i++) {
    rest = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
        if (rest == nums[j]) {
            return [i, j];
        }
    }
}
```

* 001 TwoSum


### 雜湊 HashMap

-   在跑 loop 的時候建立一個 hashMap, 把值丟進去
-   好處是能夠降低時間複雜度 (O)n , 缺點是會使用較多的記憶體空間
-   HashTable 最大好處是 input 不需要為 sorted Array 也能使用

-   TwoSum 用 hashMap 解法

```javascript
let map: any = {};
for (let index = 0; index < nums.length; index++) {
    let num1 = nums[index];
    let rest = target - num1;
    if (map[rest] >= 0) {
        return [map[rest], index];
    }
    map[num1] = index;
}
```

* 001 TwoSum

### 雙指針

#### 其實是 for-loop 的變體, 在迴圈內跑 `兩個東西` 而非 `一個`

#### 快慢指針

#### 左右指針

-  重點: 需要 array 為 `Sorted` 排序過的.
-  可以視為 `頭尾指針`, 一個由 0 走到尾, 一個由尾 走到 0, 兩者在中間相會

```javascript
for (let head = 0; head < data.length; head++) {
    let tail = data.length - head; //Tail 的位置為總長度剪去頭的位子
    console.log("Block statement execution no." + i);
}
```

#### 滑動窗格 (Sliding Window)
##### 可以視為雙指針的變體

#### 二元搜索 (Binary Search)

#### 動態規劃 DP (Dynamic Programming)
