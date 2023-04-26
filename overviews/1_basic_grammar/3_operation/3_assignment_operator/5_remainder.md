# 複合代入演算子(剰余)

## 早見表

|規約      |c++   |typescript|python|
|----------|------|----------|------|
|`%=`      |○     |○         |○     |
|小数      |✕    |○         |○     |
|負の数    |△[^1]|△[^1]    |○     |

[^1]: 割る数が負の数の場合は、絶対値で割った値が出力される

## 出力結果

### C++・TypeScript

```
2
2
2
```

### Python

```
2
2
-5
```

1. `%=`
2. 小数
3. 負の数

## c++

```c++
#include <iostream>
using namespace std;

int remainder_assignment_operator() {
  int a = 51;
  a %= 7;
  return a;
}

// %演算子は、小数で割った余りを導く場合、または小数を整数で割った余りを導く場合には使用できない。
// double decimal_remainder_assignment_operator() {
//   double a = 51;
//   a %= 3.5;
//   return a;
// }

int negative_remainder_assignment_operator() {
  int a = 51;
  a %= -7;
  return a;
}

int main() {
  cout << remainder_assignment_operator() << endl;
  // cout << decimal_remainder_assignment_operator() << endl;
  cout << negative_remainder_assignment_operator() << endl;
  return 0;
}
```

## Python

```python
def remainder_assignment_operator():
    a = 51
    a %= 7
    return a


def decimal_remainder_assignment_operator():
    a = 51
    a %= 3.5
    return a


def negative_remainder_assignment_operator():
    a = 51
    a %= -7
    return a

print(remainder_assignment_operator())
print(decimal_remainder_assignment_operator())
print(negative_remainder_assignment_operator())

```

## TypeScript

```ts
export const remainderAssignmentOperator = () => {
  let a = 51
  a %= 7
  return a
}

export const decimalRemainderAssignmentOperator = () => {
  let a = 51
  a %= 3.5
  return a
}

export const negativeRemainderAssignmentOperator = () => {
  let a = 51
  a %= -7
  return a
}

console.log(remainderAssignmentOperator())
console.log(decimalRemainderAssignmentOperator())
console.log(negativeRemainderAssignmentOperator())

```