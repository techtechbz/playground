from basic_grammar.operation.assignment_operator.subtraction import \
    subtraction_assignment_operator, \
    front_subtraction_assignment_operator, \
    decimal_subtraction_assignment_operator, \
    negative_subtraction_assignment_operator
from tests.get_file_path import get_file_path


class TestSubtractionAssignmentOperator:
    @classmethod
    def setup_class(cls):
        test_cases_path = get_file_path(__file__)
        with open(test_cases_path, encoding='utf-8') as f:
            cls.test_cases_list = [case.replace('\n', '') for case in f.readlines()]

    def test_get_test_case(self):
        assert len(self.test_cases_list) == 5
    
    def test_subtraction_assignment_operator_case(self):
        result = subtraction_assignment_operator()
        assert type(result) == int
        assert result == int(self.test_cases_list[0])

    def test_front_subtraction_assignment_operator_case(self):
        result = front_subtraction_assignment_operator()
        assert type(result) == int
        assert result != int(self.test_cases_list[2])
        assert result == 0

    def test_decimal_subtraction_assignment_operator_case(self):
        result = decimal_subtraction_assignment_operator()
        assert type(result) == float
        assert result == float(self.test_cases_list[3])

    def test_negative_subtraction_assignment_operator_case(self):
        result = negative_subtraction_assignment_operator()
        assert type(result) == int
        assert result == int(self.test_cases_list[4])
