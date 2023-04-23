from basic_grammar.operation.assignment_operator.addition import \
    addition_assignment_operator, \
    front_addition_assignment_operator, \
    decimal_addition_assignment_operator, \
    negative_addition_assignment_operator, \
    string_addition_assignment_operator, \
    array_addition_assignment_operator
from tests.get_file_path import get_file_path


class TestAdditionAssignmentOperator:
    @classmethod
    def setup_class(cls):
        test_cases_path = get_file_path(__file__)
        with open(test_cases_path, encoding='utf-8') as f:
            cls.test_cases_list = [case.replace('\n', '') for case in f.readlines()]

    def test_get_test_case(self):
        assert len(self.test_cases_list) == 7
    
    def test_addition_assignment_operator_case(self):
        result = addition_assignment_operator()
        assert type(result) == int
        assert result == int(self.test_cases_list[0])

    def test_front_addition_assignment_operator_case(self):
        result = front_addition_assignment_operator()
        assert type(result) == int
        assert result != int(self.test_cases_list[2])
        assert result == 0

    def test_decimal_addition_assignment_operator_case(self):
        result = decimal_addition_assignment_operator()
        assert type(result) == float
        assert result == float(self.test_cases_list[3])

    def test_negative_addition_assignment_operator_case(self):
        result = negative_addition_assignment_operator()
        assert type(result) == int
        assert result == int(self.test_cases_list[4])

    def test_string_addition_assignment_operator_case(self):
        result = string_addition_assignment_operator()
        assert type(result) == str
        assert result == self.test_cases_list[5]

    def test_array_addition_assignment_operator_case(self):
        result = array_addition_assignment_operator()
        assert type(result) == list
        assert str(result) == self.test_cases_list[6]
