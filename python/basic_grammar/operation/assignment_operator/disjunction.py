def disjunction_assignment_operator():
    a = 50
    a |= 21
    return a

# 以下のコードは実行できない
# def decimal_disjunction_assignment_operator():
#     a = 50
#     a |= 21.9
#     return a


def negative_disjunction_assignment_operator():
    a = 50
    a |= -21
    return a

print(disjunction_assignment_operator())
# print(decimal_disjunction_assignment_operator())
print(negative_disjunction_assignment_operator())