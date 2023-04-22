#include <iostream>
using namespace std;

int main() {
  cout << (50 >> 2) << endl;
  cout << (-50 >> 2) << endl;
  // 以下のコードをコンパイルすると、警告が表示される
  cout << (50 >> -2) << endl;
  cout << (-50 >> -2) << endl;
  // 以下のコードは実行できない
  // cout << (50 << 2.1) << endl;
  // cout << (5.1 << 2) << endl;
  // cout << (5.1 << 2.2) << endl;
}