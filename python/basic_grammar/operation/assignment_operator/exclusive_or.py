def exclusive_or_assignment_operator():
    a = 50
    a ^= 21
    return a

# 以下のコードは実行できない
# def decimal_exclusive_or_assignment_operator():
#     a = 50
#     a ^= 21.9
#     return a


def negative_exclusive_or_assignment_operator():
    a = 50
    a ^= -21
    return a

print(exclusive_or_assignment_operator())
# print(decimal_exclusive_or_assignment_operator())
print(negative_exclusive_or_assignment_operator())