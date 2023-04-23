#include <iostream>
using namespace std;

int subtraction_assignment_operator() {
  int a = 0;
  for (int i = 0; i < 5; i++) {
    a -= 2;
  }
  return a;
}

int back_subtraction_assignment_operator() {
  int a = 0;
  for (int i = 0; i < 5; i++) {
    a--;
  }
  return a;
}

int front_subtraction_assignment_operator() {
  int a = 0;
  for (int i = 0; i < 5; i++) {
    --a;
  }
  return a;
}

double decimal_subtraction_assignment_operator() {
  double a = 0;
  for (int i = 0; i < 5; i++) {
    a -= 1.5;
  }
  return a;
}

int negative_subtraction_assignment_operator() {
  int a = 0;
  for (int i = 0; i < 5; i++) {
    a -= -2;
  }
  return a;
}

int main() {
  cout << subtraction_assignment_operator() << endl;
  cout << back_subtraction_assignment_operator() << endl;
  cout << front_subtraction_assignment_operator() << endl;
  cout << decimal_subtraction_assignment_operator() << endl;
  cout << negative_subtraction_assignment_operator() << endl;
  return 0;
}