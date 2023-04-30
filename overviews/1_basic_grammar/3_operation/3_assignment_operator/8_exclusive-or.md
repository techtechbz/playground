# 複合代入演算子(論理積)

## 早見表

|規約      |c++   |typescript|python|
|----------|------|----------|------|
|`^=`      |○     |○         |○     |
|小数      |✕    |△[^1]     |✕    |
|負の数    |○     |○          |○     |

[^1]: 小数点以下を切り捨てた値で実行される

## 出力結果

```
39
39
-39
```

1. `^=`
2. 小数
3. 負の数

## c++

```c++
#include <iostream>
using namespace std;

int exclusive_or_assignment_operator() {
  int a = 50;
  a ^= 21;
  return a;
}

// 以下のコードは実行できない。
// double decimal_exclusive_or_assignment_operator() {
//   double a = 50;
//   a ^= 21.9;
//   return a;
// }

int negative_exclusive_or_assignment_operator() {
  int a = 50;
  a ^= -21;
  return a;
}

int main() {
  cout << exclusive_or_assignment_operator() << endl;
  // cout << decimal_exclusive_or_assignment_operator() << endl;
  cout << negative_exclusive_or_assignment_operator() << endl;
  return 0;
}
```

## Python

```python
def exclusive_or_assignment_operator():
    a = 50
    a ^= 21
    return a

# 以下のコードは実行できない
# def decimal_exclusive_or_assignment_operator():
#     a = 50
#     a ^= 21.9
#     return a


def negative_exclusive_or_assignment_operator():
    a = 50
    a ^= -21
    return a

print(exclusive_or_assignment_operator())
# print(decimal_exclusive_or_assignment_operator())
print(negative_exclusive_or_assignment_operator())

```

## TypeScript

```ts
export const exclusiveOrAssignmentOperator = () => {
  let a = 50
  a ^= 21
  return a
}

export const decimalExclusiveOrAssignmentOperator = () => {
  let a = 50
  a ^= 21.9
  return a
}

export const negativeExclusiveOrAssignmentOperator = () => {
  let a = 50
  a ^= -21
  return a
}

console.log(exclusiveOrAssignmentOperator())
console.log(decimalExclusiveOrAssignmentOperator())
console.log(negativeExclusiveOrAssignmentOperator())

```