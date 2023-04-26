from basic_grammar.operation.assignment_operator.remainder import \
    remainder_assignment_operator, \
    decimal_remainder_assignment_operator, \
    negative_remainder_assignment_operator
from tests.get_file_path import get_file_path


class TestRemainderAssignmentOperator:
    @classmethod
    def setup_class(cls):
        test_cases_path = get_file_path(__file__)
        with open(test_cases_path, encoding='utf-8') as f:
            cls.test_cases_list = [case.replace('\n', '') for case in f.readlines()]

    def test_get_test_case(self):
        assert len(self.test_cases_list) == 3
    
    def test_remainder_assignment_operator_case(self):
        result = remainder_assignment_operator()
        assert type(result) == int
        assert result == int(self.test_cases_list[0])

    def test_decimal_remainder_assignment_operator_case(self):
        result = decimal_remainder_assignment_operator()
        assert type(result) == float
        assert result == float(self.test_cases_list[1])

    def test_negative_remainder_assignment_operator_case(self):
        result = negative_remainder_assignment_operator()
        assert type(result) == int
        assert result != int(self.test_cases_list[2])
        assert result == -(7 - int(self.test_cases_list[2]))
