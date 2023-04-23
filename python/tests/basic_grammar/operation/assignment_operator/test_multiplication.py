from basic_grammar.operation.assignment_operator.multiplication import \
    multiplication_assignment_operator, \
    decimal_multiplication_assignment_operator, \
    negative_multiplication_assignment_operator
from tests.get_file_path import get_file_path


class TestMultiplicationAssignmentOperator:
    @classmethod
    def setup_class(cls):
        test_cases_path = get_file_path(__file__)
        with open(test_cases_path, encoding='utf-8') as f:
            cls.test_cases_list = [case.replace('\n', '') for case in f.readlines()]

    def test_get_test_case(self):
        assert len(self.test_cases_list) == 3
    
    def test_multiplication_assignment_operator_case(self):
        result = multiplication_assignment_operator()
        assert type(result) == int
        assert result == int(self.test_cases_list[0])

    def test_decimal_multiplication_assignment_operator_case(self):
        result = decimal_multiplication_assignment_operator()
        assert type(result) == float
        assert result == float(self.test_cases_list[1])

    def test_negative_multiplication_assignment_operator_case(self):
        result = negative_multiplication_assignment_operator()
        assert type(result) == int
        assert result == int(self.test_cases_list[2])
