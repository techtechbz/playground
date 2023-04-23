#include <iostream>
using namespace std;

int multiplication_assignment_operator() {
  int a = 1;
  for (int i = 0; i < 5; i++) {
    a *= 2;
  }
  return a;
}

double decimal_multiplication_assignment_operator() {
  double a = 1;
  for (int i = 0; i < 5; i++) {
    a *= 1.5;
  }
  return a;
}

int negative_multiplication_assignment_operator() {
  int a = 1;
  for (int i = 0; i < 5; i++) {
    a *= -2;
  }
  return a;
}

int main() {
  cout << multiplication_assignment_operator() << endl;
  cout << decimal_multiplication_assignment_operator() << endl;
  cout << negative_multiplication_assignment_operator() << endl;
  return 0;
}