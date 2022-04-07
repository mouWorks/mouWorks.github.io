### 001 Two Sum

-   給予一個數字陣列, 找出其中的兩個數相加得到 target

-   Brute Force 暴力解

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

-   Hash Map 解法

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
