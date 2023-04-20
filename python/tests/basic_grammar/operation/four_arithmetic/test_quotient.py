import pytest

from basic_grammar.operation.four_arithmetic.quotient import \
    number_and_number_to_number_quotient, \
    decimal_and_decimal_to_number_quotient, \
    number_and_number_to_decimal_quotient, \
    decimal_and_number_to_decimal_quotient, \
    number_and_decimal_to_decimal_quotient, \
    decimal_and_decimal_to_decimal_quotient, \
    negative_and_positive_to_negative_quotient, \
    positive_and_negative_to_negative_quotient, \
    negative_and_negative_to_positive_quotient, \
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
    
    def test_number_and_number_to_number_quotient_case(self):
        assert type(number_and_number_to_number_quotient) == float
        assert number_and_number_to_number_quotient == float(self.test_cases_list[0])

    def test_decimal_and_decimal_to_number_quotient_case(self):
        assert type(decimal_and_decimal_to_number_quotient) == float
        assert decimal_and_decimal_to_number_quotient == float(self.test_cases_list[1])

    def test_number_and_number_to_decimal_quotient_case(self):
        assert type(number_and_number_to_decimal_quotient) == float
        assert number_and_number_to_decimal_quotient == float(self.test_cases_list[2])

    def test_decimal_and_number_to_decimal_quotient_case(self):
        assert type(decimal_and_number_to_decimal_quotient) == float
        assert decimal_and_number_to_decimal_quotient == float(self.test_cases_list[3])

    def test_number_and_decimal_to_decimal_quotient_case(self):
        assert type(number_and_decimal_to_decimal_quotient) == float
        assert number_and_decimal_to_decimal_quotient == float(self.test_cases_list[4])

    def test_decimal_and_decimal_to_decimal_quotient_case(self):
        assert type(decimal_and_decimal_to_decimal_quotient) == float
        assert decimal_and_decimal_to_decimal_quotient == float(self.test_cases_list[5])

    def test_negative_and_positive_to_negative_quotient_case(self):
        assert type(negative_and_positive_to_negative_quotient) == float
        assert negative_and_positive_to_negative_quotient == float(self.test_cases_list[6])

    def test_positive_and_negative_to_negative_quotient_case(self):
        assert type(positive_and_negative_to_negative_quotient) == float
        assert positive_and_negative_to_negative_quotient == float(self.test_cases_list[7])

    def test_negative_and_negative_to_positive_quotient_case(self):
        assert type(negative_and_negative_to_positive_quotient) == float
        assert negative_and_negative_to_positive_quotient == float(self.test_cases_list[8])

    def test_divide_by_zero_quotient_case(self):
        assert type(divide_by_zero_quotient) == float
        assert divide_by_zero_quotient == float(self.test_cases_list[9])

    def test_zero_division_quotient_case(self):
        with pytest.raises(ZeroDivisionError) as e:
            zero_division = -4 / 0
        assert str(e.value) == 'division by zero'
