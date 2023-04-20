#include <iostream>
using namespace std;

// %演算子は、小数で割った余りを導く場合、または小数を整数で割った余りを導く場合には使用できない。

int main() {
  cout << 9 % 2 << endl;
  // cout << 9.0 % 2.0 << endl;
  cout << 10 % 2 << endl;
  // cout << 10.0 % 2.0 << endl;
  // cout << 9.0 % 2 << endl;
  // cout << 9 % 2.0 << endl;
  cout << -5 % 2 << endl;
  cout << 5 % -2 << endl;
  cout << -5 % -2 << endl;
  cout << 0 % -2 << endl;
  cout << -4 % 0 << endl;
}