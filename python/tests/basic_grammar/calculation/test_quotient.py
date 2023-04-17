import pytest

from basic_grammar.calculation.quotient import \
    calculating_natural_number_quotient, \
    natural_number_quotient, \
    decimal_quotient, \
    divide_by_natural_number_quotient, \
    divide_natural_number_by_decimal_quotient, \
    calculating_decimal_quotient, \
    quotient_of_negative_number, \
    divide_by_negative_number_quotient, \
    positive_number_quotient, \
    divide_by_zero_quotient
from tests.get_file_path import get_file_path


class TestQuotient:
    @classmethod
    def setup_class(cls):
        test_cases_path = get_file_path(__file__)
        with open(test_cases_path, encoding='utf-8') as f:
            cls.test_cases_list = [case.replace('\n', '') for case in f.readlines()]

    def test_get_test_case(self):
        assert len(self.test_cases_list) == 11
    
    def test_calculating_natural_number_quotient(self):
        assert type(calculating_natural_number_quotient) == float
        assert calculating_natural_number_quotient == float(self.test_cases_list[0])

    def test_natural_number_quotient(self):
        assert type(natural_number_quotient) == float
        assert natural_number_quotient == float(self.test_cases_list[1])

    def test_decimal_quotient(self):
        assert type(decimal_quotient) == float
        assert decimal_quotient == float(self.test_cases_list[2])

    def test_divide_by_natural_number_quotient(self):
        assert type(divide_by_natural_number_quotient) == float
        assert divide_by_natural_number_quotient == float(self.test_cases_list[3])

    def test_divide_natural_number_by_decimal_quotient(self):
        assert type(divide_natural_number_by_decimal_quotient) == float
        assert divide_natural_number_by_decimal_quotient == float(self.test_cases_list[4])

    def test_calculating_decimal_quotient(self):
        assert type(calculating_decimal_quotient) == float
        assert calculating_decimal_quotient == float(self.test_cases_list[5])

    def test_quotient_of_negative_number(self):
        assert type(quotient_of_negative_number) == float
        assert quotient_of_negative_number == float(self.test_cases_list[6])

    def test_divide_by_negative_number_quotient(self):
        assert type(divide_by_negative_number_quotient) == float
        assert divide_by_negative_number_quotient == float(self.test_cases_list[7])

    def test_positive_number_quotient(self):
        assert type(positive_number_quotient) == float
        assert positive_number_quotient == float(self.test_cases_list[8])

    def test_divide_by_zero_quotient(self):
        assert type(divide_by_zero_quotient) == float
        assert divide_by_zero_quotient == float(self.test_cases_list[9])

    def test_zero_division_quotient(self):
        with pytest.raises(ZeroDivisionError) as e:
            zero_division = -4 / 0
        assert str(e.value) == 'division by zero'
