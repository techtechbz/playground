#include <iostream>
using namespace std;

int main() {
  cout << 10 / 2 << endl;
  cout << 8.4 / 2.1 << endl;

  // int型同士の除算ではint型(商と余りのうちの商)で出力される
  cout << 9 / 2 << endl;
  
  // 以下の3つ(double型を含める)のコードは、小数が出力される。
  cout << 9.0 / 2 << endl;
  cout << 9 / 2.0 << endl;
  cout << 9.0 / 2.0 << endl;

  cout << -4 / 2 << endl;
  cout << 4 / -2 << endl;
  cout << -4 / -2 << endl;
  cout << 0 / -2 << endl;
  cout << -4 / 0 << endl;
}