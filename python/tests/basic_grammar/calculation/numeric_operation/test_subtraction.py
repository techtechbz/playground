from basic_grammar.calculation.numeric_operation.subtraction import \
    natural_number_multiplication_case, \
    decimal_multiplication_case, \
    negative_number_result_multiplication_case, \
    subtract_from_negative_number_case, \
    subtracting_negative_number_case
from tests.get_file_path import get_file_path


class TestSubtraction:
    @classmethod
    def setup_class(cls):
        test_cases_path = get_file_path(__file__)
        with open(test_cases_path, encoding='utf-8') as f:
            cls.test_cases_list = [case.replace('\n', '') for case in f.readlines()]

    def test_get_test_case(self):
        assert len(self.test_cases_list) == 5

    def test_natural_number_multiplication_case(self):
        assert type(natural_number_multiplication_case) == int
        assert natural_number_multiplication_case == int(self.test_cases_list[0])

    def test_decimal_multiplication_case(self):
        assert type(decimal_multiplication_case) == float
        assert decimal_multiplication_case == float(self.test_cases_list[1])

    def test_negative_number_result_multiplication_case(self):
        assert type(negative_number_result_multiplication_case) == int
        assert negative_number_result_multiplication_case == int(self.test_cases_list[2])

    def test_subtract_from_negative_number_case(self):
        assert type(subtract_from_negative_number_case) == int
        assert subtract_from_negative_number_case == int(self.test_cases_list[3])

    def test_subtracting_negative_number_case(self):
        assert type(subtracting_negative_number_case) == int
        assert subtracting_negative_number_case == int(self.test_cases_list[4])
