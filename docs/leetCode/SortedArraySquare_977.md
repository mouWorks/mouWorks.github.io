### 977 Sorted Array Square

-   給予一個 `遞增排序` 的數字陣列 (但包含負數), 回傳一個陣列為其平方, 且也需要 `遞增排序`

-   input/output

```javascript
nums = [-4, -1, 0, 3, 10];
output = [0, 1, 9, 16, 100];
```

```javascript
nums = [-7, -3, 2, 3, 11];
output = [4, 9, 9, 49, 121];
```

#### 解法分析:

##### 暴力法:

-   先 loop 一次將數字平方, 再跑一次排序.

```javascript
function sortedSquares(nums: number[]): number[] {
    return nums.map((i) => i * i).sort((a, b) => a - b);
}
```

##### 雙指標法:

-   建立一個新的陣列
-   舊分別從頭尾走, 平方後兩兩相比, 較大的塞後面, 較小的塞前面.
-   Tip: 雖然是雙指針, 但可以單次判定要移動左指針或者是右指針

```javascript
let result: number[] = [];
let resultIndex = nums.length - 1; // 重點:這邊不要跟左右指針混淆
let left = 0;
let right = nums.length - 1;
while (left <= right) {
    //當左指針比右指針小的時候
    let headSquare = nums[left] * nums[left];
    let tailSquare = nums[right] * nums[right];
    //把較大的, 丟到新陣列的最後面, 如果是左,則左指針走一個, 若右則右反過來走一個
    if (headSquare > tailSquare) {
        result[resultIndex--] = headSquare;
        left++;
    } else {
        result[resultIndex--] = tailSquare;
        right--;
    }
}

return result;
```
