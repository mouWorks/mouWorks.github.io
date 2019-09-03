# Algorithm

![img](/the_big_o.png)

## MergeSort


## QuickSort


## HeapSort


## BubbleSort

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

## Dijkstra Alsorithm


## 
