# コメント

## 早見表

|言語      |一行(行の先頭)|複数行(コメント部分を囲む)     |
|----------|-------------|-----------------------------|
|c++       |`//`         |`/* {content} */`            |
|typescirpt|`//`         |`/* {content} */`            |
|python    |`#`          |`""" {content} """`          |

## 出力結果

```
Hello, world!
```

## c++

```c++
#include <bits/stdc++.h>
using namespace std;

int main(void) {
  // Comment out one line
  /*
    Multi-line comment out
    Multi-line comment out
  */
  cout << "Hello, world!" << endl; 
}
```

## Python

```python
# Comment out one line
"""
Multi-line comment out
Multi-line comment out
"""
print("Hello, world!")
```

## TypeScript

```ts
// Comment out one line
/*
  Multi-line comment out
  Multi-line comment out
*/
console.log("Hello, world!")
```