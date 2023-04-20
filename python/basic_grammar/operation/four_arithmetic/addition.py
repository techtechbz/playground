from typing import Union

number_and_number_addition = 1 + 2
decimal_and_number_addition = 1.1 + 2
number_and_decimal_addition = 1 + 2.1
decimal_and_decimal_addition = (21 + 42) / 10
# 小数同士の計算では丸め誤差が生じる。ただし、結果が整数になる加算の場合、丸め誤差は生じない
# decimal_and_decimal_addition 2.1 + 4.2
decimal_and_decimal_to_number_addition = 2.1 + 4.9
positive_and_negative_to_negative_addition = 4 + (-8)
string_and_string_addition = "Hello, " + "world!"
array_addition: list[str] = ["apple", "banana"] + ["orange"]
dictionary_addition: dict[str, Union[str, int]] = {'name': "Tom", 'age': 34} | {'breakfirst': "apple"}

print(number_and_number_addition)
print(decimal_and_number_addition)
print(number_and_decimal_addition)
print(decimal_and_decimal_addition)
print(decimal_and_decimal_to_number_addition)
print(positive_and_negative_to_negative_addition)

print(string_and_string_addition)
# 単にコンソールへ出力するという場合は以下のような書き方でも連結できる
# print("Hello,", "world!")

print(array_addition)
print(dictionary_addition)
