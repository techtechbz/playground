from basic_grammar.calculation.numeric_operation.multiplication import \
    natural_number_multiplication_case,\
    natural_number_result_multiplication_case,\
    decimal_result_case,\
    multiplying_decimal_case,\
    decimal_by_decimal_returns_natural_number_case,\
    multiplication_over_negative_numbers_case,\
    negative_number_result_multiplication_case,\
    negative_number_calculating_multiplication_case
from tests.get_file_path import get_file_path


class TestMultiplication:
    @classmethod
    def setup_class(cls):
        test_cases_path = get_file_path(__file__)
        with open(test_cases_path, encoding='utf-8') as f:
            cls.test_cases_list = [case.replace('\n', '') for case in f.readlines()]
    
    def test_get_test_case(self):
        assert len(self.test_cases_list) == 8

    def test_natural_number_multiplication_case(self):
        assert type(natural_number_multiplication_case) == int
        assert natural_number_multiplication_case == int(self.test_cases_list[0])
    
    def test_natural_number_result_multiplication_case(self):
        assert type(natural_number_result_multiplication_case) == float
        assert natural_number_result_multiplication_case == float(self.test_cases_list[1])
    
    def test_decimal_result_case(self):
        assert type(decimal_result_case) == float
        assert decimal_result_case == float(self.test_cases_list[2])

    def test_multiplying_decimal_case(self):
        assert type(multiplying_decimal_case) == float
        assert multiplying_decimal_case == float(self.test_cases_list[3])

    def test_decimal_by_decimal_returns_natural_number_case(self):
        assert type(decimal_by_decimal_returns_natural_number_case) == float
        assert decimal_by_decimal_returns_natural_number_case == float(self.test_cases_list[4])

    def test_multiplication_over_negative_numbers_case(self):
        assert type(multiplication_over_negative_numbers_case) == int
        assert multiplication_over_negative_numbers_case == int(self.test_cases_list[5])

    def test_negative_number_result_multiplication_case(self):
        assert type(negative_number_result_multiplication_case) == int
        assert negative_number_result_multiplication_case == int(self.test_cases_list[6])

    def test_negative_number_calculating_multiplication_case(self):
        assert type(negative_number_calculating_multiplication_case) == int
        assert negative_number_calculating_multiplication_case == int(self.test_cases_list[7])
