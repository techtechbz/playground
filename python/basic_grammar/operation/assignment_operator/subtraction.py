def subtraction_assignment_operator():
    a = 0
    for i in range(0, 5):
        a -= 2
    return a

# def back_subtraction_assignment_operator():
#     a = 0
#     for i in range(0, 5):
#         a--
#     return a

def front_subtraction_assignment_operator():
    a = 0
    for i in range(0, 5):
        --a
    return a


def decimal_subtraction_assignment_operator():
    a = 0
    for i in range(0, 5):
        a -= 1.5
    return a


def negative_subtraction_assignment_operator():
    a = 0
    for i in range(0, 5):
        a -= -2
    return a


print(subtraction_assignment_operator())
print(front_subtraction_assignment_operator())
print(decimal_subtraction_assignment_operator())
print(negative_subtraction_assignment_operator())
