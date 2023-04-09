from typing import Union

natural_number_addition_case = 1 + 2
decimal_addition_case = 2.1 + 4.2
negative_number_addition_case = -8 + 4
string_addition_case = "Hello, " + "world!"
array_addition_case: list[str] = ["apple", "banana"] + ["orange"]
dictionary_addition_case: dict[str, Union[str, int]] = {'name': "Tom", 'age': 34} | {'breakfirst': "apple"}

print(natural_number_addition_case)
print(decimal_addition_case)
print(negative_number_addition_case)
print(string_addition_case)
print(array_addition_case)
print(dictionary_addition_case)

# 単にコンソールへ出力するという場合は以下のような書き方でも連結できる
# print("Hello,", "world!")
