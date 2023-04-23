# 複合代入演算子(掛け算)

## 早見表

|規約      |c++   |typescript|python|
|----------|------|----------|------|
|`*=`      |○     |○         |○     |
|小数      |○     |○         |○     |
|負の数    |○     |○         |○     |

## 出力結果

```
32
7.59375
-32
```

1. `*=`
2. 小数
3. 負の数

## c++

```c++
#include <iostream>
using namespace std;

int multiplication_assignment_operator() {
  int a = 1;
  for (int i = 0; i < 5; i++) {
    a *= 2;
  }
  return a;
}

double decimal_multiplication_assignment_operator() {
  double a = 1;
  for (int i = 0; i < 5; i++) {
    a *= 1.5;
  }
  return a;
}

int negative_multiplication_assignment_operator() {
  int a = 1;
  for (int i = 0; i < 5; i++) {
    a *= -2;
  }
  return a;
}

int main() {
  cout << multiplication_assignment_operator() << endl;
  cout << decimal_multiplication_assignment_operator() << endl;
  cout << negative_multiplication_assignment_operator() << endl;
  return 0;
}
```

## Python

```python
def multiplication_assignment_operator():
    a = 1
    for i in range(0, 5):
        a *= 2
    return a


def decimal_multiplication_assignment_operator():
    a = 1
    for i in range(0, 5):
        a *= 1.5
    return a


def negative_multiplication_assignment_operator():
    a = 1
    for i in range(0, 5):
        a *= -2
    return a

print(multiplication_assignment_operator())
print(decimal_multiplication_assignment_operator())
print(negative_multiplication_assignment_operator())

```

## TypeScript

```ts
export const multiplicationAssignmentOperator = () => {
  let a = 1
  for (let i = 0; i < 5; i++) {
    a *= 2
  }
  return a
}

export const decimalMultiplicationAssignmentOperator = () => {
  let a = 1
  for (let i = 0; i < 5; i++) {
    a *= 1.5
  }
  return a
}

export const negativeMultiplicationAssignmentOperator = () => {
  let a = 1
  for (let i = 0; i < 5; i++) {
    a *= -2
  }
  return a
}

console.log(additionAssignmentOperator())
console.log(decimalMultiplicationAssignmentOperator())
console.log(negativeMultiplicationAssignmentOperator())

```