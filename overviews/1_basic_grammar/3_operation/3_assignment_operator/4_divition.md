# 複合代入演算子(割り算)

## 早見表

|規約      |c++   |typescript|python|
|----------|------|----------|------|
|`/=`      |○     |○         |○     |
|小数      |○     |○         |○     |
|負の数    |○     |○         |○     |

## 出力結果

```
2
32
-2
```

1. `/=`
2. 小数
3. 負の数

## c++

```c++
#include <iostream>
using namespace std;

int division_assignment_operator() {
  int a = 64;
  for (int i = 0; i < 5; i++) {
    a /= 2;
  }
  return a;
}

double decimal_division_assignment_operator() {
  double a = 243;
  for (int i = 0; i < 5; i++) {
    a /= 1.5;
  }
  return a;
}

int negative_division_assignment_operator() {
  int a = 64;
  for (int i = 0; i < 5; i++) {
    a /= -2;
  }
  return a;
}

int main() {
  cout << division_assignment_operator() << endl;
  cout << decimal_division_assignment_operator() << endl;
  cout << negative_division_assignment_operator() << endl;
  return 0;
}
```

## Python

```python
def division_assignment_operator():
    a = 64
    for i in range(0, 5):
        a /= 2
    return a


def decimal_division_assignment_operator():
    a = 243
    for i in range(0, 5):
        a /= 1.5
    return a


def negative_division_assignment_operator():
    a = 64
    for i in range(0, 5):
        a /= -2
    return a

print(division_assignment_operator())
print(decimal_division_assignment_operator())
print(negative_division_assignment_operator())

```

## TypeScript

```ts
export const divisionAssignmentOperator = () => {
  let a = 64
  for (let i = 0; i < 5; i++) {
    a /= 2
  }
  return a
}

export const decimalDivisionAssignmentOperator = () => {
  let a = 243
  for (let i = 0; i < 5; i++) {
    a /= 1.5
  }
  return a
}

export const negativeDivisionAssignmentOperator = () => {
  let a = 64
  for (let i = 0; i < 5; i++) {
    a /= -2
  }
  return a
}

console.log(divisionAssignmentOperator())
console.log(decimalDivisionAssignmentOperator())
console.log(negativeDivisionAssignmentOperator())

```