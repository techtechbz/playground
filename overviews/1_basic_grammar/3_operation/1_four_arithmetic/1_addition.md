# 足し算

## 早見表(`+`演算子を使用して、加算または連結が可能か)

|規約                    |c++   |typescript|python|
|------------------------|------|----------|------|
|数値(整数+整数)          |○     |○         |○     |
|数値(小数+整数)          |○     |○         |○     |
|数値(整数+小数)          |○     |○         |○     |
|数値(小数+小数=小数)      |○     |△[^1]    |△[^1]|
|数値(小数+小数=整数or小数)|double|number    |float |
|数値(正の数+負の数=負の数)|○     |○         |○     |
|文字列+文字列            |△[^2]|○          |○    |
|配列                    |✕    |✕         |○     |
|map(辞書)               |✕    |✕         |✕[^3]|

[^1]: 丸め誤差が生じるパターン
[^2]: `+`演算子を使わず半角スペースで結合するか、std::string型で変数を宣言して`+`演算子を用いるかのいずれか
[^3]: Python3.9以降の場合、`|`を用いて結合できる

## 出力結果

```
3
3.1
3.1
6.3
7
-4
Hello, world!
['apple', 'banana', 'orange']
{'name': 'Tom', 'age': 34, 'breakfirst': 'apple'}
```

1. 1 + 2 (整数+整数)
2. 1.1 + 2 (小数+整数)
3. 1 + 2.1 (整数+小数)
4. 2.1 + 4.2 (小数+小数=小数)
5. 2.1 + 4.9 (小数+小数=整数)
6. 4 + -8 (正の数+負の数=負の数)
7. "Hello, " + "world!" (文字列+文字列)
12.  ['apple', 'banana'] + ['orange'] (配列)
13.  {'name': "Tom", 'age': 34} | {'breakfirst': "apple"} (map型)


## c++

```c++
#include <iostream>
using namespace std;

int main() {
  cout << 1 + 2 << endl;
  cout << 1.1 + 2 << endl;
  cout << 1 + 2.1 << endl;
  cout << 2.1 + 4.2 << endl;
  cout << 2.1 + 4.9 << endl;
  cout << 4 + -8 << endl;

  // 1.半角スペースで結合する例
  cout << "Hello, " "world!" << endl;

  // 2.std::string型で変数を宣言して連結する例
  std::string hello_world = "Hello, ";
  hello_world += "world!";
  cout << hello_world << endl;
  
  // 以下のコードはエラーが発生する
  // cout << "Hello, " + "world!" << endl;
}
```

## Python

```python
print(1 + 2)
print(1.1 + 2)
print(1 + 2.1)
print((21 + 42) / 10)
# 小数同士の計算では丸め誤差が生じる。ただし、結果が整数になる加算の場合、丸め誤差は生じない
# print(2.1 + 4.2)
print(2.1 + 4.9)
print(4 + -8)
print("Hello, " + "world!")
# 単にコンソールへ出力するという場合は以下のような書き方でも連結できる
# print("Hello,", "world!")

print( ["apple", "banana"] + ["orange"])
print( {'name': "Tom", 'age': 34} | {'breakfirst': "apple"})

```

## TypeScript

```ts
console.log(1 + 2)
console.log(1.1 + 2)
console.log(1 + 2.1)
console.log((21 + 42) / 10)
// 小数同士の計算では丸め誤差が生じる。ただし、結果が整数になる加算の場合、丸め誤差は生じない
// console.log(2.1 + 4.2)
console.log(2.1 + 4.9)
console.log(4 + -8)
console.log("Hello, " + "world!")

// 単にコンソールへ出力するという場合は以下のような書き方でも連結できる
// console.log("Hello,", "world!")
```