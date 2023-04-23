#include <iostream>
#include <array>
using namespace std;

int addition_assignment_operator() {
  int a = 0;
  for (int i = 0; i < 5; i++) {
    a += 2;
  }
  return a;
}

int back_addition_assignment_operator() {
  int a = 0;
  for (int i = 0; i < 5; i++) {
    a++;
  }
  return a;
}

int front_addition_assignment_operator() {
  int a = 0;
  for (int i = 0; i < 5; i++) {
    ++a;
  }
  return a;
}

double decimal_addition_assignment_operator() {
  double a = 0;
  for (int i = 0; i < 5; i++) {
    a += 1.5;
  }
  return a;
}

int negative_addition_assignment_operator() {
  int a = 0;
  for (int i = 0; i < 5; i++) {
    a += -2;
  }
  return a;
}

std::string string_addition_assignment_operator() {
  std::string s = "";
  for (int i = 0; i < 5; i++) {
    s += "A";
  }
  return s;
}

// 以下のコードは実行できない
// std::array<int> array_addition_assignment_operator() {
//   std::array<int> a = [];
//   for (int i = 0; i < 5; i++) {
//     a += [i];
//   }
//   return a;
// }

int main() {
  cout << addition_assignment_operator() << endl;
  cout << back_addition_assignment_operator() << endl;
  cout << front_addition_assignment_operator() << endl;
  cout << decimal_addition_assignment_operator() << endl;
  cout << negative_addition_assignment_operator() << endl;
  cout << string_addition_assignment_operator() << endl;
  // cout << array_addition_assignment_operator() << endl;
  return 0;
}