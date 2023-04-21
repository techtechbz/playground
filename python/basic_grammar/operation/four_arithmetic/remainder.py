number_and_number_remainder = 9 % 2
decimal_and_decimal_remainder = 9.0 % 2.0
number_and_number_to_zero_remainder = 10 % 2
decimal_and_decimal_to_zero_remainder = 10.0 % 2.0
decimal_and_number_remainder = 9.0 % 2
number_and_decimal_remainder = 9 % 2.0
negative_and_positive_remainder = -5 % 2
positive_and_negative_remainder = 5 % -2
negative_and_negative_remainder = -5 % -2
divide_by_zero_remainder = 0 % -2
# 以下の計算は「ZeroDivisionError」を出力する
# zero_division = -4 % 0

print(number_and_number_remainder)
print(decimal_and_decimal_remainder)
print(number_and_number_to_zero_remainder)
print(decimal_and_decimal_to_zero_remainder)
print(decimal_and_number_remainder)
print(number_and_decimal_remainder)
print(negative_and_positive_remainder)
print(positive_and_negative_remainder)
print(negative_and_negative_remainder)
print(divide_by_zero_remainder)
# print(zero_division)
