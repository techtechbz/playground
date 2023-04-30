#include <iostream>
using namespace std;

int exclusive_or_assignment_operator() {
  int a = 50;
  a ^= 21;
  return a;
}

// 以下のコードは実行できない。
// double decimal_exclusive_or_assignment_operator() {
//   double a = 50;
//   a ^= 21.9;
//   return a;
// }

int negative_exclusive_or_assignment_operator() {
  int a = 50;
  a ^= -21;
  return a;
}

int main() {
  cout << exclusive_or_assignment_operator() << endl;
  // cout << decimal_exclusive_or_assignment_operator() << endl;
  cout << negative_exclusive_or_assignment_operator() << endl;
  return 0;
}