# 最小化

## 出力結果

```
ab
cd
```

> 制約
>
> [1.3](../1_output/3_duplicate-output)のコードを最小限の行数&スペース数で書く

## c++

```c++
#include <bits/stdc++.h>
using namespace std;int main(){cout<<"a";cout<<"b"<<endl;cout<<"c"<<"d"<<endl;}
```

## Python

```python
print("a", end="")
print("b")
print("c"+"d")
```

## TypeScript

```ts
console.log("a" + "b");console.log("c" + "d")

// node.js
import process
process.stdout.write("a");process.stdout.write("b" + "\n");process.stdout.write("c" + "d")
```