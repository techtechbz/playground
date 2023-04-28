# 複合代入演算子(論理積)

## 早見表

|規約      |c++   |typescript|python|
|----------|------|----------|------|
|`&=`      |○     |○         |○     |
|小数      |✕    |△[^1]     |✕    |
|負の数    |○     |○          |○     |

[^1]: 小数点以下を切り捨てた値で実行される

## 出力結果

```
16
16
34
```

1. `&=`
2. 小数
3. 負の数

## c++

```c++
#include <iostream>
using namespace std;

int logical_conjunction_assignment_operator() {
  int a = 50;
  a &= 21;
  return a;
}

// 以下のコードは実行できない。
// double decimal_logical_conjunction_assignment_operator() {
//   double a = 50;
//   a &= 21.9;
//   return a;
// }

int negative_logical_conjunction_assignment_operator() {
  int a = 50;
  a &= -21;
  return a;
}

int main() {
  cout << logical_conjunction_assignment_operator() << endl;
  // cout << decimal_logical_conjunction_assignment_operator() << endl;
  cout << negative_logical_conjunction_assignment_operator() << endl;
  return 0;
}
```

## Python

```python
def logical_conjunction_assignment_operator():
    a = 50
    a &= 21
    return a

# 以下のコードは実行できない
# def decimal_logical_conjunction_assignment_operator():
#     a = 50
#     a &= 21.9
#     return a


def negative_logical_conjunction_assignment_operator():
    a = 50
    a &= -21
    return a

print(logical_conjunction_assignment_operator())
# print(decimal_logical_conjunction_assignment_operator())
print(negative_logical_conjunction_assignment_operator())

```

## TypeScript

```ts
export const logicalConjunctionAssignmentOperator = () => {
  let a = 50
  a &= 21
  return a
}

export const decimalLogicalConjunctionAssignmentOperator = () => {
  let a = 50
  a &= 21.9
  return a
}

export const negativeLogicalConjunctionAssignmentOperator = () => {
  let a = 50
  a &= -21
  return a
}

console.log(logicalConjunctionAssignmentOperator())
console.log(decimalLogicalConjunctionAssignmentOperator())
console.log(negativeLogicalConjunctionAssignmentOperator())

```