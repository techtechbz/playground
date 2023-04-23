def addition_assignment_operator():
    a = 0
    for i in range(0, 5):
        a += 2
    return a

# def back_addition_assignment_operator():
#     a = 0
#     for i in range(0, 5):
#         a++
#     return a

def front_addition_assignment_operator():
    a = 0
    for i in range(0, 5):
        ++a
    return a


def decimal_addition_assignment_operator():
    a = 0
    for i in range(0, 5):
        a += 1.5
    return a


def negative_addition_assignment_operator():
    a = 0
    for i in range(0, 5):
        a += -2
    return a


def string_addition_assignment_operator():
    s = ""
    for i in range(0, 5):
        s += "A"
    return s


def array_addition_assignment_operator():
    a = []
    for i in range(0, 5):
        a += [i]
    return a


print(addition_assignment_operator())
print(front_addition_assignment_operator())
print(decimal_addition_assignment_operator())
print(negative_addition_assignment_operator())
print(string_addition_assignment_operator())
print(array_addition_assignment_operator())
