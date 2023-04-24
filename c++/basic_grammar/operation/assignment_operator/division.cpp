#include <iostream>
using namespace std;

int division_assignment_operator() {
  int a = 64;
  for (int i = 0; i < 5; i++) {
    a /= 2;
  }
  return a;
}

double decimal_division_assignment_operator() {
  double a = 243;
  for (int i = 0; i < 5; i++) {
    a /= 1.5;
  }
  return a;
}

int negative_division_assignment_operator() {
  int a = 64;
  for (int i = 0; i < 5; i++) {
    a /= -2;
  }
  return a;
}

int main() {
  cout << division_assignment_operator() << endl;
  cout << decimal_division_assignment_operator() << endl;
  cout << negative_division_assignment_operator() << endl;
  return 0;
}