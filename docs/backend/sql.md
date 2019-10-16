SQL 練習題
===

#### Source: TestDome

Q1. `Medium` - 有點難有卡一段時間

* Table : Session

    | id      | userId     | duration     |
    | :------------- | :----------: | -----------: |
    | 1 | 1  | 10    |
    | 2 | 2 | 18 |
    | 3 | 1 | 14 |

* Question:
    * Write a query that selects userId and average session duration for each user who has more than one session.
    * 列出有超過一個Session的User, 他的UserID和平均Session Duration
Ans
```sql=
SELECT userId, AVG(duration)
  FROM sessions
 GROUP BY userId
HAVING COUNT(userId) > 1
```
* Tips:
    * 先用 Group By 聚合同User 的情況
    * 再用 Having 下條件



---
Q2. `Done` - 使用 `UNION` 來組合兩個Table

* Table: dogs

    | id      | name    |
    | :------------- | :----------: |
    | 1 | More Stuff   | 
    | 2 | Put Pipes In | 

* Table: cats

    | id      | name    |
    | :------------- | :----------: |
    | 1 | More Stuff   | 
    | 2 | Put Pipes In | 


Question:
* Write a query that select all distinct pet names
* 列出所有動物的名字(不包含重複名稱)

Solution: 使用`UNION`
```sql=
SELECT name 
  FROM cats
 UNION 
SELECT name
  FROM dogs
```
* 說明: UNION 不會列出重複的部分
---
Q3.

* Table: employees

    | id      | managerId    | Name
    | :------------- | :----------: |:----------: |
    | 1 |    | John |
    | 2 |1 | Mike |

* Write a query that selects the names of employees who are not managers.
* 列出不是Manager 的員工名字
    
```sql=
SELECT name 
  FROM employees
 WHERE managerId = ''; 

```