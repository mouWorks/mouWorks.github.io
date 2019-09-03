# Algorithm

![img](/the_big_o.png)

## MergeSort


## QuickSort


## HeapSort


## InsertionSort 插入排序

* 類似拿起撲克牌的過程
* Input: {5 2 4 6 1 3}。
* 首先拿起第一張牌, 手上有 {5}。
* 拿起第二張牌 2, 把 2 insert 到手上的牌 {5}, 得到 {2 5}。
* 拿起第三張牌 4, 把 4 insert 到手上的牌 {2 5}, 得到 {2 4 5}。

* time&Memory

```php




```



## BubbleSort 氣泡排序 O(n^2)

* 簡易的Sort
* Array Loop thu 一次
* 兩兩相比, 如果後者比前者小, 則前後交換

* 68ms, 10MB
```php
function swap(&$x, &$y){
        $t = $x;
        $x = $y;
        $y = $t;
}

public function sort($data)
{
    $size = count($data);

    for($i=0;$i<$size;$i++){
        for($j=$i+1; $j<$size; $j++){
            if($data[$i] > $data[$j]){
                $this->swap($data[$i], $data[$j]);
            }
        }
    }
    return $data;
}
```

## Dijkstra Algorithm


