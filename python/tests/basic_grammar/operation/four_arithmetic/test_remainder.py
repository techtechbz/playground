import pytest

from basic_grammar.operation.four_arithmetic.remainder import \
    number_and_number_remainder, \
    decimal_and_decimal_remainder, \
    number_and_number_to_zero_remainder, \
    decimal_and_decimal_to_zero_remainder, \
    decimal_and_number_remainder, \
    number_and_decimal_remainder, \
    negative_and_positive_remainder, \
    positive_and_negative_remainder, \
    negative_and_negative_remainder, \
    divide_by_zero_remainder
from tests.get_file_path import get_file_path


class TestRemainder:
    @classmethod
    def setup_class(cls):
        test_cases_path = get_file_path(__file__)
        with open(test_cases_path, encoding='utf-8') as f:
            cls.test_cases_list = [case.replace('\n', '') for case in f.readlines()]
    
    def test_number_and_number_remainder_case(self):
        assert type(number_and_number_remainder) == int
        assert number_and_number_remainder == int(self.test_cases_list[0])

    def test_decimal_and_decimal_remainder_case(self):
        assert type(decimal_and_decimal_remainder) == float
        assert decimal_and_decimal_remainder == float(self.test_cases_list[1])

    def test_number_and_number_to_zero_remainder_case(self):
        assert type(number_and_number_to_zero_remainder) == int
        assert number_and_number_to_zero_remainder == int(self.test_cases_list[2])

    def test_decimal_and_decimal_to_zero_remainder_case(self):
        assert type(decimal_and_decimal_to_zero_remainder) == float
        assert decimal_and_decimal_to_zero_remainder == float(self.test_cases_list[3])

    def test_decimal_and_number_remainder_case(self):
        assert type(decimal_and_number_remainder) == float
        assert decimal_and_number_remainder == float(self.test_cases_list[4])

    def test_number_and_decimal_remainder_case(self):
        assert type(number_and_decimal_remainder) == float
        assert number_and_decimal_remainder == float(self.test_cases_list[5])

    def test_negative_and_positive_remainder_case(self):
        assert type(negative_and_positive_remainder) == int
        assert negative_and_positive_remainder == -int(self.test_cases_list[6])

    def test_positive_and_negative_remainder_case(self):
        assert type(positive_and_negative_remainder) == int
        assert positive_and_negative_remainder == -int(self.test_cases_list[7])

    def test_negative_and_negative_remainder_case(self):
        assert type(negative_and_negative_remainder) == int
        assert negative_and_negative_remainder == int(self.test_cases_list[8])

    def test_divide_by_zero_remainder(self):
        assert type(divide_by_zero_remainder) == int
        assert divide_by_zero_remainder == int(self.test_cases_list[9])

    def test_zero_division(self):
        with pytest.raises(ZeroDivisionError) as e:
            zero_division = -4 % 0
        assert str(e.value) == 'integer division or modulo by zero'
