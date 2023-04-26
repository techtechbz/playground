#include <iostream>
using namespace std;

int remainder_assignment_operator() {
  int a = 51;
  a %= 7;
  return a;
}

// %演算子は、小数で割った余りを導く場合、または小数を整数で割った余りを導く場合には使用できない。
// double decimal_remainder_assignment_operator() {
//   int a = 51;
//   a %= 3.5;
//   return a;
// }

int negative_remainder_assignment_operator() {
  int a = 51;
  a %= -7;
  return a;
}

int main() {
  cout << remainder_assignment_operator() << endl;
  // cout << decimal_remainder_assignment_operator() << endl;
  cout << negative_remainder_assignment_operator() << endl;
  return 0;
}