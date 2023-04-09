# 引き算

## 早見表(`-`演算子を使用して、減算が可能か)

|規約                    |c++         |typescript   |python      |
|------------------------|------------|------------|-------------|
|数値(整数)               |○           |○           |○            |
|数値(小数)               |○           |○           |○            |
|数値(結果が負の数)        |○           |○           |○            |
|数値(マイナスの計算)      |○           |○           |○            |
|数値(負の数の引き算)      |○           |○           |○            |

## 出力結果

```
3
6.3
-4
-4
6
```

1. 5 - 2 (数値型同士の引き算)
2. 8.4 - 2.1 (小数型同士の引き算)
3. 4 - 8 (結果がマイナスの引き算)
4. -3 - 1 (マイナスの引き算)
5. 2 - (-4) (負の数の引き算)

## c++

```c++
#include <iostream>
using namespace std;

int main() {
  cout << 5 - 2 << endl;
  cout << 8.4 - 2.1 << endl;
  cout << 4 - 8 << endl;
  cout << -3 - 1 << endl;
  cout << 2 - (-4) << endl;
}
```

## Python

```python
print(5 - 2)
print(8.4 - 2.1)
print(4 - 8)
print(-3 - 1)
print(2 - (-4))

```

## TypeScript

```ts
console.log(5 - 2)
console.log(8.4 - 2.1)
console.log(4 - 8)
console.log(-3 - 1)
console.log(2 - (-4))
```