def division_assignment_operator():
    a = 64
    for i in range(0, 5):
        a /= 2
    return a


def decimal_division_assignment_operator():
    a = 243
    for i in range(0, 5):
        a /= 1.5
    return a


def negative_division_assignment_operator():
    a = 64
    for i in range(0, 5):
        a /= -2
    return a


print(division_assignment_operator())
print(decimal_division_assignment_operator())
print(negative_division_assignment_operator())
