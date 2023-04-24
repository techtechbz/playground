def multiplication_assignment_operator():
    a = 1
    for i in range(0, 5):
        a *= 2
    return a


def decimal_multiplication_assignment_operator():
    a = 1
    for i in range(0, 5):
        a *= 1.5
    return a


def negative_multiplication_assignment_operator():
    a = 1
    for i in range(0, 5):
        a *= -2
    return a


print(multiplication_assignment_operator())
print(decimal_multiplication_assignment_operator())
print(negative_multiplication_assignment_operator())
