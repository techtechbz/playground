# 足し算

## 早見表(`+`演算子を使用して、加算または連結が可能か)

|規約                    |c++         |typescript   |python      |
|------------------------|------------|------------|-------------|
|数値(整数)               |○           |○           |○            |
|数値(小数)               |○           |○           |○            |
|数値(負の数)             |○           |○           |○            |
|文字列                   |△[^1]      |○           |○            |
|配列                    |✕           |✕          |○            |
|map(辞書)               |✕           |✕          |✕[^2]       |

[^1]: `+`演算子を使わず半角スペースで結合するか、std::string型で変数を宣言して`+`演算子を用いるかのいずれか
[^2]: Python3.9以降の場合、`|`を用いて結合できる

## 出力結果

```
3
6.3
-4
Hello, world!
["apple", "banana", "orange"]
{'name': 'Tom', 'age': 34, 'breakfirst': 'apple'}
```

1. 1 + 2 (数値型同士の足し算)
2. 2.1 + 4.2 (小数型同士の足し算)
3. -8 + 4 (マイナスの足し算)
4. "Hello, " + "world!" (文字列同士の足し算(`+`が使用できるか)) 

## c++

```c++
#include <iostream>
using namespace std;

int main() {
  cout << 1 + 2 << endl;
  cout << 2.1 + 4.2 << endl;
  cout << -8 + 4 << endl;

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
print(2.1 + 4.2)
print(-8 + 4)
print("Hello, " + "world!")

# 単にコンソールへ出力するという場合は以下のような書き方でも連結できる
# print("Hello,", "world!")

print(["apple", "banana"] + ["orange"])
print({'name': "Tom", 'age': 34} | {'breakfirst': "apple"})

```

## TypeScript

```ts
console.log(1 + 2)
console.log(2.1 + 4.2)
console.log(-8 + 4)
console.log("Hello, " + "world!")

// 単にコンソールへ出力するという場合は以下のような書き方でも連結できる
// console.log("Hello,", "world!")
```