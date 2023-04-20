# 累乗

## 早見表

|規約                     |c++        |typescript|python|
|-------------------------|-----------|----------|------|
|累乗(記号)                |✕         |`**`      |`**`  |
|累乗(関数)                |`math.pow` |`Math.pow`|`pow` |
|数値(整数^{整数})         |○          |○         |○     |
|数値(小数^{整数})         |○          |○         |○     |
|数値(整数^{小数})         |○          |○         |○     |
|数値(小数^{小数})         |○          |○         |○     |
|数値(負の数^{正の数})     |○          |○         |○     |
|数値(正の数^{負の数})     |○          |○         |○     |
|数値(負の数^{負の数})     |○          |○         |○     |
|数値(整数^{0})           |○          |○         |○     |
|数値(0^{整数})           |○          |○         |○     |

## 出力結果

```
9
9
9
2.25
8
0.008
9
0.1111111111111111
0.1111111111111111
1
0
```

1. 3 ** 2 (累乗(記号))
2. pow(3, 2) (累乗(関数))
3. 3 ** 2 (数値(整数^{整数}))
4. 1.5 ** 2 (数値(小数^{整数}))
5. 4 ** 1.5 (数値(整数^{小数}))
6. 0.04 ** 1.5 (数値(小数^{小数}))
7. (-3) ** 2 (数値(負の数^{正の数}))
8. 3 ** -2 (数値(正の数^{負の数}))
9. (-3) ** -2 (数値(負の数^{負の数}))
10. 3 ** 0 (数値(整数^{0}))
11. 0 ** 2 (数値(0^{整数}))

## c++

```c++
#include <iostream>
#include <cmath>
using namespace std;

int main() {
  // c++では**演算子は使用できない
//   cout << 3 ** 2 << endl;
  cout << pow(3, 2) << endl;
  cout << pow(3, 2) << endl;
  cout << pow(1.5, 2) << endl;
  cout << pow(4, 1.5) << endl;
  cout << pow(0.04, 1.5) << endl;
  cout << pow(-3, 2) << endl;
  cout << pow(3, -2) << endl;
  cout << pow(-3, -2) << endl;
  cout << pow(3, 0) << endl;
  cout << pow(0, 2) << endl;
}
```

## Python

```python
print(3 ** 2)
print(pow(3, 2))
print(3 ** 2)
print(1.5 ** 2)
print(4 ** 1.5)
print(0.04 ** 1.5)
# 負の数の累乗を計算したい場合は、負の数をパーレンで囲む。
# そうでなければ、正の数として計算した値にマイナスが付与される。
print((-3) ** 2)
print(3 ** -2)
print((-3) ** -2)
print(3 ** 0)
print(0 ** 2)

```

## TypeScript

```ts
console.log(3 ** 2)
console.log(Math.pow(3, 2))
console.log(3 ** 2)
console.log(1.5 ** 2)
console.log(4 ** 1.5)
console.log(0.04 ** 1.5)
// 負の数の累乗を計算したい場合は、負の数をパーレンで囲む。
// そうしなければ、エラーが出力される。
console.log((-3) ** 2)
console.log(3 ** -2)
console.log((-3) ** -2)
console.log(3 ** 0)
console.log(0 ** 2)

```