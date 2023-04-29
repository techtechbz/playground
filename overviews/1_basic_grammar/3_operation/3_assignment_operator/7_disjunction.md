# 複合代入演算子(論理積)

## 早見表

|規約      |c++   |typescript|python|
|----------|------|----------|------|
|`|=`      |○     |○         |○     |
|小数      |✕    |△[^1]     |✕    |
|負の数    |○     |○          |○     |

[^1]: 小数点以下を切り捨てた値で実行される

## 出力結果

```
55
55
-5
```

1. `|=`
2. 小数
3. 負の数

## c++

```c++
#include <iostream>
using namespace std;

int disjunction_assignment_operator() {
  int a = 50;
  a |= 21;
  return a;
}

// 以下のコードは実行できない。
// double decimal_disjunction_assignment_operator() {
//   double a = 50;
//   a |= 21.9;
//   return a;
// }

int negative_disjunction_assignment_operator() {
  int a = 50;
  a |= -21;
  return a;
}

int main() {
  cout << disjunction_assignment_operator() << endl;
  // cout << decimal_disjunction_assignment_operator() << endl;
  cout << negative_disjunction_assignment_operator() << endl;
  return 0;
}
```

## Python

```python
def disjunction_assignment_operator():
    a = 50
    a |= 21
    return a

# 以下のコードは実行できない
# def decimal_disjunction_assignment_operator():
#     a = 50
#     a |= 21.9
#     return a


def negative_disjunction_assignment_operator():
    a = 50
    a |= -21
    return a

print(disjunction_assignment_operator())
# print(decimal_disjunction_assignment_operator())
print(negative_disjunction_assignment_operator())

```

## TypeScript

```ts
export const disjunctionAssignmentOperator = () => {
  let a = 50
  a |= 21
  return a
}

export const decimalDisjunctionAssignmentOperator = () => {
  let a = 50
  a |= 21.9
  return a
}

export const negativeDisjunctionAssignmentOperator = () => {
  let a = 50
  a |= -21
  return a
}

console.log(disjunctionAssignmentOperator())
console.log(decimalDisjunctionAssignmentOperator())
console.log(negativeDisjunctionAssignmentOperator())

```