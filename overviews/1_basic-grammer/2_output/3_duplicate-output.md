# 複数の出力

## 出力結果

```
ab
cd
```

1. コンソールに"a"を出力(改行なし)
2. コンソールに"b"を出力(改行あり)
3. コンソールに"c", "d"を出力

## c++

```c++
#include <bits/stdc++.h>
using namespace std;

int main() {
  cout << "a";
  cout << "b" << endl;
  cout << "c" << "d" << endl;
}
```

## Python

```python
print("a", end="")
print("b")
print("c" + "d")

"""
print("c", "d")
> c d
"""
```

## TypeScript

```ts
console.log("a" + "b")
console.log("c" + "d")

// node.js
import process from 'node:process';

process.stdout.write("a")
process.stdout.write("b" + "\n")
process.stdout.write("c" + "d")

/*
console.log("c", "b")
> c d
*/
```