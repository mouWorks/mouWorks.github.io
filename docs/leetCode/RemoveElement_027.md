### 027 RemoveElement

-   給定一個陣列 nums 和一個值 val, 需要移除陣列內所有 val 的元素, 返回移除陣列後的新長度
-   不要使用額外的陣列空間，你必須僅使用 O（1） 額外空間並原地修改輸入陣列。
-   元素的順序可以改變。 你不需要考慮陣列中超出新長度後面的元素。

*   Input/Output

```javascript
nums = [3，2，2，3]， val = 3
則應該返回 2, 陣列前二應該是 [2,2]
```

```javascript
nums = [0，1，2，2，3，0，4，2]， val = 2
則應該返回 5, 陣列前五應該是 [0,1,3,0,4]
```

-   Solution 1: 暴力解法
-   需要 Loop 兩次
-   時間複雜度: O (n^2)
-   空間複雜度: O (1)

    ```javascript
    let size = nums.length
    for (let i = 0; i < size; i++) {
        //如果中了, 需要移除元素, 但需要把後面所有都往前移動一位
        if(val === nums[i]){
            for(j=i+1; j<size, j++){
                nums[j-1] = nums[j]
            }
            i--;
            size--; // Array 縮短一位, 故 size - 1
        }
    }
    return size
    ```

-   Solution 2: 快慢指針法 (Two Pointers)
-   時間複雜度: O (n^2)
-   空間複雜度: O (1)

```javascript
let slowIndex = 0;
for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    // 如果快指針位置的值不是val
    if (val != nums[fastIndex]) {
        // 則把慢指針設定為 val
        nums[slowIndex] = val;
        slowIndex++;
    }
}
// 最後慢指針的size 就是 array 的大小
return slowIndex;
```

Note:

-   快慢指針解法
-   快慢指針同時走, target != 快指針目標時, 把快指針的目標轉給慢指針
-   快慢指針意味著在一次 loop 內做兩次 loop 的事情.
