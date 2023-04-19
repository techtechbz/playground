import pytest

from basic_grammar.calculation.numeric_operation.exponentiation import \
    exponentiation_operator, \
    exponentiation_function, \
    number_number_exponentiation, \
    decimal_number_exponentiation, \
    number_decimal_exponentiation, \
    decimal_decimal_exponentiation, \
    negative_positive_exponentiation, \
    positive_negative_exponentiation, \
    negative_negative_exponentiation, \
    number_zero_exponentiation, \
    zero_number_exponentiation
from tests.get_file_path import get_file_path


class TestRemainder:
    @classmethod
    def setup_class(cls):
        test_cases_path = get_file_path(__file__)
        with open(test_cases_path, encoding='utf-8') as f:
            cls.test_cases_list = [case.replace('\n', '') for case in f.readlines()]
    
    def test_exponentiation_operator(self):
        assert exponentiation_operator == int(self.test_cases_list[0])
    
    def test_exponentiation_operator(self):
        assert exponentiation_function == int(self.test_cases_list[1])

    def test_number_number_exponentiation(self):
        assert type(number_number_exponentiation) == int
        assert number_number_exponentiation == int(self.test_cases_list[2])

    def test_decimal_number_exponentiation(self):
        assert type(decimal_number_exponentiation) == float
        assert decimal_number_exponentiation == float(self.test_cases_list[3])

    def test_number_decimal_exponentiation(self):
        assert type(number_decimal_exponentiation) == float
        assert number_decimal_exponentiation == float(self.test_cases_list[4])

    def test_decimal_decimal_exponentiation(self):
        assert type(decimal_decimal_exponentiation) == float
        assert decimal_decimal_exponentiation == float(self.test_cases_list[5])

    def test_negative_positive_exponentiation(self):
        assert type(negative_positive_exponentiation) == int
        assert negative_positive_exponentiation == int(self.test_cases_list[6])

    def test_positive_negative_exponentiation(self):
        assert type(positive_negative_exponentiation) == float
        assert positive_negative_exponentiation == float(self.test_cases_list[7])

    def test_negative_negative_exponentiation(self):
        assert type(negative_negative_exponentiation) == float
        assert negative_negative_exponentiation == float(self.test_cases_list[8])

    def test_number_zero_exponentiation(self):
        assert type(number_zero_exponentiation) == int
        assert number_zero_exponentiation == int(self.test_cases_list[9])

    def test_zero_number_exponentiation(self):
        assert type(zero_number_exponentiation) == int
        assert zero_number_exponentiation == int(self.test_cases_list[10])
