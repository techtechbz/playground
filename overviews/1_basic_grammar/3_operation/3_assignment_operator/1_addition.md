# 複合代入演算子(足し算)

## 早見表

|規約      |c++   |typescript|python|
|----------|------|----------|------|
|`+=`      |○     |○         |○     |
|`?++`     |○     |○         |✕    |
|`++?`     |○     |○         |△[^1]|
|小数      |○     |○         |○     |
|負の数    |○     |○         |○     |
|文字列    |○     |○         |○     |
|配列      |✕    |✕        |○     |

[^1]: 変数を別で指定しない場合、値が加算されない。

## 出力結果

```
10
5
5
7.5
-10
AAAAA
[0, 1, 2, 3, 4]
```

1. `+=`
2. `?++`
3. `++?`
4. 小数
5. 負の数
6. 文字列
7. 配列

## c++

```c++
#include <iostream>
#include <array>
using namespace std;

int addition_assignment_operator() {
  int a = 0;
  for (int i = 0; i < 5; i++) {
    a += 2;
  }
  return a;
}

int back_addition_assignment_operator() {
  int a = 0;
  for (int i = 0; i < 5; i++) {
    a++;
  }
  return a;
}

int front_addition_assignment_operator() {
  int a = 0;
  for (int i = 0; i < 5; i++) {
    ++a;
  }
  return a;
}

double decimal_addition_assignment_operator() {
  double a = 0;
  for (int i = 0; i < 5; i++) {
    a += 1.5;
  }
  return a;
}

int negative_addition_assignment_operator() {
  int a = 0;
  for (int i = 0; i < 5; i++) {
    a += -2;
  }
  return a;
}

std::string string_addition_assignment_operator() {
  std::string s = "";
  for (int i = 0; i < 5; i++) {
    s += "A";
  }
  return s;
}

// std::array<int> array_addition_assignment_operator() {
//   std::array<int> a = [];
//   for (int i = 0; i < 5; i++) {
//     a += [i];
//   }
//   return a;
// }

int main() {
  cout << addition_assignment_operator() << endl;
  cout << back_addition_assignment_operator() << endl;
  cout << front_addition_assignment_operator() << endl;
  cout << decimal_addition_assignment_operator() << endl;
  cout << negative_addition_assignment_operator() << endl;
  cout << string_addition_assignment_operator() << endl;
  // cout << array_addition_assignment_operator() << endl;
  return 0;
}
```

## Python

```python
def addition_assignment_operator():
    a = 0
    for i in range(0, 5):
        a += 2
    return a

# def back_addition_assignment_operator():
#     a = 0
#     for i in range(0, 5):
#         a++
#     return a

def front_addition_assignment_operator():
    a = 0
    for i in range(0, 5):
        ++a
    return a


def decimal_addition_assignment_operator():
    a = 0
    for i in range(0, 5):
        a += 1.5
    return a


def negative_addition_assignment_operator():
    a = 0
    for i in range(0, 5):
        a += -2
    return a


def string_addition_assignment_operator():
    s = ""
    for i in range(0, 5):
        s += "A"
    return s


def array_addition_assignment_operator():
    a = []
    for i in range(0, 5):
        a += [i]
    return a


print(addition_assignment_operator())
print(front_addition_assignment_operator())
print(decimal_addition_assignment_operator())
print(negative_addition_assignment_operator())
print(string_addition_assignment_operator())
print(array_addition_assignment_operator())

```

## TypeScript

```ts
export const additionAssignmentOperator = () => {
  let a = 0
  for (let i = 0; i < 5; i++) {
    a += 2
  }
  return a
}

export const backAdditionAssignmentOperator = () => {
  let a = 0
  for (let i = 0; i < 5; i++) {
    a++
  }
  return a
}

export const frontAdditionAssignmentOperator = () => {
  let a = 0
  for (let i = 0; i < 5; i++) {
    ++a
  }
  return a
}

export const decimalAdditionAssignmentOperator = () => {
  let a = 0
  for (let i = 0; i < 5; i++) {
    a += 1.5
  }
  return a
}

export const negativeAdditionAssignmentOperator = () => {
  let a = 0
  for (let i = 0; i < 5; i++) {
    a += -2
  }
  return a
}

export const stringAdditionAssignmentOperator = () => {
  let s = ""
  for (let i = 0; i < 5; i++) {
    s += "A"
  }
  return s
}

console.log(additionAssignmentOperator())
console.log(backAdditionAssignmentOperator())
console.log(frontAdditionAssignmentOperator())
console.log(decimalAdditionAssignmentOperator())
console.log(negativeAdditionAssignmentOperator())
console.log(stringAdditionAssignmentOperator())

```