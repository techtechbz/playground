def logical_conjunction_assignment_operator():
    a = 50
    a &= 21
    return a

# 以下のコードは実行できない
# def decimal_logical_conjunction_assignment_operator():
#     a = 50
#     a &= 21.9
#     return a


def negative_logical_conjunction_assignment_operator():
    a = 50
    a &= -21
    return a

print(logical_conjunction_assignment_operator())
# print(decimal_logical_conjunction_assignment_operator())
print(negative_logical_conjunction_assignment_operator())