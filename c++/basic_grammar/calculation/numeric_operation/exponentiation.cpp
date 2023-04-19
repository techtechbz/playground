#include <iostream>
#include <cmath>
using namespace std;

int main() {
  // c++では**演算子は使用できない
//   cout << 3 ** 2 << endl;
  cout << pow(3, 2) << endl;
  cout << pow(3, 2) << endl;
  cout << pow(1.5, 2) << endl;
  cout << pow(4, 1.5) << endl;
  cout << pow(0.4, 1.5) << endl;
  cout << pow(-3, 2) << endl;
  cout << pow(3, -2) << endl;
  cout << pow(-3, -2) << endl;
  cout << pow(3, 0) << endl;
  cout << pow(0, 2) << endl;
}