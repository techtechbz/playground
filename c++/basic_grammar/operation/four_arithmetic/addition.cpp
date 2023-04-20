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