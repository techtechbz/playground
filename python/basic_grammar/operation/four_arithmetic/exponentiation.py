exponentiation_operator = 3 ** 2
exponentiation_function = pow(3, 2)
number_number_exponentiation = 3 ** 2
decimal_number_exponentiation = 1.5 ** 2
number_decimal_exponentiation = 4 ** 1.5
decimal_decimal_exponentiation = 0.04 ** 1.5
# 負の数の累乗を計算したい場合は、負の数をパーレンで囲む。
# そうでなければ、正の数として計算した値にマイナスが付与される。
negative_positive_exponentiation = (-3) ** 2
positive_negative_exponentiation = 3 ** -2
negative_negative_exponentiation = (-3) ** -2
number_zero_exponentiation = 3 ** 0
zero_number_exponentiation = 0 ** 2

print(exponentiation_operator)
print(exponentiation_function)
print(number_number_exponentiation)
print(decimal_number_exponentiation)
print(number_decimal_exponentiation)
print(decimal_decimal_exponentiation)
print(negative_positive_exponentiation)
print(positive_negative_exponentiation)
print(negative_negative_exponentiation)
print(number_zero_exponentiation)
print(zero_number_exponentiation)
