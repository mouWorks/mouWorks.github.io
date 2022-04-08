### 704 BinarySearch

-  二分查找 BinarySearch 
-  給定一個有排序過的 Array, 其中包含 n 個不重複的數字. 寫一個 function 搜尋是否包含 target, 若有, 則回傳位置, 若無, 則回傳 `-1`

```javascript
let nums = [-1,0,3,5,9,12], target = 9
let ans = 4
```

```javascript
let nums = [-1,0,3,5,9,12], target = 2
let ans = -1
```

#### 重點:
* 若陣列為 `有排序過` 且 `無重複元素` , 則可以考慮用 `二分查找法` 

* 左閉右閉寫法
```javascript
let left = 0
let right = nums.length - 1 //定義在左閉右閉的區間內

while(left <= right){
    let middle = left + (left+right) / 2
    if(nums[middle] > target){
        right = middle - 1 //在左區間, middle -1
    }else{
        left = middle +1
    }else{
        return middle
    }    
    return -1
}
```

#### 本題解法:
1. Loop-thru (暴力解) O(N)
    * 最無腦解法, 但需要遍歷
2. Two-Pointer (雙指針) 
    * 遍歷的加強版, 頭尾走
3. 二分搜尋法
    * 如果已經排序, 又沒有重複元素, 則可以使用二分搜索法.

[二分搜尋-詳細解說](https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0704.%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.md)





