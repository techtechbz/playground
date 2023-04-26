# 複合代入演算子(引き算)

## 早見表

|規約      |c++   |typescript|python|
|----------|------|----------|------|
|`-=`      |○     |○         |○     |
|`?--`     |○     |○         |✕    |
|`--?`     |○     |○         |△[^1]|
|小数      |○     |○         |○     |
|負の数    |○     |○         |○     |

[^1]: 変数を別で指定しない場合、値が減算されない。

## 出力結果

```
-10
-5
-5
-7.5
10
```

1. `-=`
2. `?--`
3. `--?`
4. 小数
5. 負の数

## c++

```c++
#include <iostream>
using namespace std;

int subtraction_assignment_operator() {
  int a = 0;
  for (int i = 0; i < 5; i++) {
    a -= 2;
  }
  return a;
}

int back_subtraction_assignment_operator() {
  int a = 0;
  for (int i = 0; i < 5; i++) {
    a--;
  }
  return a;
}

int front_subtraction_assignment_operator() {
  int a = 0;
  for (int i = 0; i < 5; i++) {
    --a;
  }
  return a;
}

double decimal_subtraction_assignment_operator() {
  double a = 0;
  for (int i = 0; i < 5; i++) {
    a -= 1.5;
  }
  return a;
}

int negative_subtraction_assignment_operator() {
  int a = 0;
  for (int i = 0; i < 5; i++) {
    a -= -2;
  }
  return a;
}

int main() {
  cout << subtraction_assignment_operator() << endl;
  cout << back_subtraction_assignment_operator() << endl;
  cout << front_subtraction_assignment_operator() << endl;
  cout << decimal_subtraction_assignment_operator() << endl;
  cout << negative_subtraction_assignment_operator() << endl;
  return 0;
}
```

## Python

```python
def subtraction_assignment_operator():
    a = 0
    for i in range(0, 5):
        a -= 2
    return a

# def back_subtraction_assignment_operator():
#     a = 0
#     for i in range(0, 5):
#         a--
#     return a

def front_subtraction_assignment_operator():
    a = 0
    for i in range(0, 5):
        --a
    return a


def decimal_subtraction_assignment_operator():
    a = 0
    for i in range(0, 5):
        a -= 1.5
    return a


def negative_subtraction_assignment_operator():
    a = 0
    for i in range(0, 5):
        a -= -2
    return a

print(subtraction_assignment_operator())
print(front_subtraction_assignment_operator())
print(decimal_subtraction_assignment_operator())
print(negative_subtraction_assignment_operator())

```

## TypeScript

```ts
export const subtractionAssignmentOperator = () => {
  let a = 0
  for (let i = 0; i < 5; i++) {
    a -= 2
  }
  return a
}

export const backSubtractionAssignmentOperator = () => {
  let a = 0
  for (let i = 0; i < 5; i++) {
    a--
  }
  return a
}

export const frontSubtractionAssignmentOperator = () => {
  let a = 0
  for (let i = 0; i < 5; i++) {
    --a
  }
  return a
}

export const decimalSubtractionAssignmentOperator = () => {
  let a = 0
  for (let i = 0; i < 5; i++) {
    a -= 1.5
  }
  return a
}

export const negativeSubtractionAssignmentOperator = () => {
  let a = 0
  for (let i = 0; i < 5; i++) {
    a -= -2
  }
  return a
}

console.log(subtractionAssignmentOperator())
console.log(backSubtractionAssignmentOperator())
console.log(frontSubtractionAssignmentOperator())
console.log(decimalSubtractionAssignmentOperator())
console.log(negativeSubtractionAssignmentOperator())

```