# 改行

## 早見表

|言語      |改行のしかた|
|----------|-----------|
|c++       |           |
|typescirpt|文末に`\`   |
|python    |文末に`\`   |

## 出力結果

```
柿食えば鐘が鳴るなり法隆寺
```

> 制約
>
> 文字列を3行に分けて出力

## c++

```c++
#include <bits/stdc++.h>
using namespace std;

int main() {
  cout << "柿食えば"
    << "鐘が鳴るなり"
    << "法隆寺"
    << endl;
}
```

## Python

```python
print("柿食えば\
    鐘が鳴るなり\
    法隆寺"
)
```

## TypeScript

```ts
console.log('柿食えば\
鐘が鳴るなり\
法隆寺')
```