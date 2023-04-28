from basic_grammar.operation.assignment_operator.logical_conjunction import \
    logical_conjunction_assignment_operator, \
    negative_logical_conjunction_assignment_operator
from tests.get_file_path import get_file_path


class TestLogicalConjunctionAssignmentOperator:
    @classmethod
    def setup_class(cls):
        test_cases_path = get_file_path(__file__)
        with open(test_cases_path, encoding='utf-8') as f:
            cls.test_cases_list = [case.replace('\n', '') for case in f.readlines()]

    def test_get_test_case(self):
        assert len(self.test_cases_list) == 3
    
    def test_logical_conjunction_assignment_operator_case(self):
        result = logical_conjunction_assignment_operator()
        assert type(result) == int
        assert result == int(self.test_cases_list[0])

    def test_negative_logical_conjunction_assignment_operator_case(self):
        result = negative_logical_conjunction_assignment_operator()
        assert type(result) == int
        assert result == int(self.test_cases_list[2])
