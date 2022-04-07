# 列出常用的 LeetCode 算法

### 遍歷

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

### 雙指針

#### 其實是 for-loop 的變體, 在迴圈內跑 `兩個東西` 而非 `一個`

#### 快慢指針

#### 左右指針

-   可以視為 `頭尾指針`, 一個由 0 走到尾, 一個由尾 走到 0, 兩者在中間相會

```javascript
for (let head = 0; head < data.length; head++) {
    let tail = data.length - head; //Tail 的位置為總長度剪去頭的位子
    console.log("Block statement execution no." + i);
}
```

#### 滑動窗格 (Sliding Window)

#### 動態規劃 DP (Dynamic Programming)
