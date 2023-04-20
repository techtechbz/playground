number_and_number_subtraction = 5 - 2
decimal_and_number_subtraction = 5 - 2.1
number_and_decimal_subtraction = (51 - 20) / 10
decimal_and_decimal_subtraction = round(5.1 - 2.2, 2)
decimal_and_decimal_to_number_subtraction = round(5.1 - 2.1, 2)
# 小数から数値を引く減算の場合、丸め誤差が生じる。結果が整数であっても同様。round関数を用いて桁数を指定し、丸めることができる。
# number_and_decimal_subtraction = 5.1 - 2
# decimal_and_decimal_subtraction = 5.1 - 2.2
# decimal_and_decimal_to_number_subtraction = 5.1 - 2.1
positive_and_negative_to_negative_subtraction = 4 - 8
negative_and_positive_to_negative_subtraction = -3 - 1
negative_and_negative_to_positive_subtraction = -2 - (-4)
negative_zero = -0

print(number_and_number_subtraction)
print(decimal_and_number_subtraction)
print(number_and_decimal_subtraction)
print(decimal_and_decimal_subtraction)
print(decimal_and_decimal_to_number_subtraction)
print(positive_and_negative_to_negative_subtraction)
print(negative_and_positive_to_negative_subtraction)
print(negative_and_negative_to_positive_subtraction)
print(negative_zero)
