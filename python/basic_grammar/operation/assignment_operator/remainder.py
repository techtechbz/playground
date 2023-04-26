def remainder_assignment_operator():
    a = 51
    a %= 7
    return a


def decimal_remainder_assignment_operator():
    a = 51
    a %= 3.5
    return a


def negative_remainder_assignment_operator():
    a = 51
    a %= -7
    return a

print(remainder_assignment_operator())
print(decimal_remainder_assignment_operator())
print(negative_remainder_assignment_operator())
