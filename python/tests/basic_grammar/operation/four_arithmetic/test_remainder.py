import pytest

from basic_grammar.operation.four_arithmetic.remainder import \
    calculating_natural_number_remainder, \
    natural_number_remainder, \
    zero_remainder, \
    zero_by_decimal_remainder, \
    divide_by_natural_number_remainder, \
    divide_natural_number_by_decimal_remainder, \
    remainder_of_negative_number, \
    divide_by_negative_number_remainder, \
    positive_number_remainder, \
    divide_by_zero_remainder
from tests.get_file_path import get_file_path


class TestRemainder:
    @classmethod
    def setup_class(cls):
        test_cases_path = get_file_path(__file__)
        with open(test_cases_path, encoding='utf-8') as f:
            cls.test_cases_list = [case.replace('\n', '') for case in f.readlines()]
    
    def test_calculating_natural_number_remainder(self):
        assert calculating_natural_number_remainder == int(self.test_cases_list[0])
    
    def test_natural_number_remainder(self):
        assert type(natural_number_remainder) == float
        assert natural_number_remainder == float(self.test_cases_list[1])

    def test_zero_remainder(self):
        assert type(zero_remainder) == int
        assert zero_remainder == int(self.test_cases_list[2])

    def test_zero_by_decimal_remainder(self):
        assert type(zero_by_decimal_remainder) == float
        assert zero_by_decimal_remainder == float(self.test_cases_list[3])

    def test_divide_by_natural_number_remainder(self):
        assert type(divide_by_natural_number_remainder) == float
        assert divide_by_natural_number_remainder == float(self.test_cases_list[4])

    def test_divide_natural_number_by_decimal_remainder(self):
        assert type(divide_natural_number_by_decimal_remainder) == float
        assert divide_natural_number_by_decimal_remainder == float(self.test_cases_list[5])

    def test_remainder_of_negative_number(self):
        assert type(remainder_of_negative_number) == int
        assert remainder_of_negative_number == -int(self.test_cases_list[6])

    def test_divide_by_negative_number_remainder(self):
        assert type(divide_by_negative_number_remainder) == int
        assert divide_by_negative_number_remainder == -int(self.test_cases_list[7])

    def test_positive_number_remainder(self):
        assert type(positive_number_remainder) == int
        assert positive_number_remainder == int(self.test_cases_list[8])

    def test_divide_by_zero_remainder(self):
        assert type(divide_by_zero_remainder) == int
        assert divide_by_zero_remainder == int(self.test_cases_list[9])

    def test_zero_division(self):
        with pytest.raises(ZeroDivisionError) as e:
            zero_division = -4 % 0
        assert str(e.value) == 'integer division or modulo by zero'
