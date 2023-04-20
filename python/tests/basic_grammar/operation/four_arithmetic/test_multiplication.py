from basic_grammar.operation.four_arithmetic.multiplication import \
    number_and_number_multiplication, \
    decimal_and_number_multiplication, \
    number_and_decimal_multiplication, \
    decimal_and_decimal_multiplication, \
    decimal_and_decimal_to_number_multiplication, \
    negative_and_positive_to_negative_multiplication, \
    positive_and_negative_to_negative_multiplication, \
    negative_and_negative_to_positive_multiplication
from tests.get_file_path import get_file_path


class TestMultiplication:
    @classmethod
    def setup_class(cls):
        test_cases_path = get_file_path(__file__)
        with open(test_cases_path, encoding='utf-8') as f:
            cls.test_cases_list = [case.replace('\n', '') for case in f.readlines()]
    
    def test_get_test_case(self):
        assert len(self.test_cases_list) == 8

    def test_number_and_number_multiplication_case(self):
        assert type(number_and_number_multiplication) == int
        assert number_and_number_multiplication == int(self.test_cases_list[0])
    
    def test_decimal_and_number_multiplication_case(self):
        assert type(decimal_and_number_multiplication) == float
        assert decimal_and_number_multiplication == float(self.test_cases_list[1])
    
    def test_number_and_decimal_multiplication_case(self):
        assert type(number_and_decimal_multiplication) == float
        assert number_and_decimal_multiplication == float(self.test_cases_list[2])

    def test_decimal_and_decimal_multiplication_case(self):
        assert type(decimal_and_decimal_multiplication) == float
        assert decimal_and_decimal_multiplication == float(self.test_cases_list[3])

    def test_decimal_and_decimal_to_number_multiplication_case(self):
        assert type(decimal_and_decimal_to_number_multiplication) == float
        assert decimal_and_decimal_to_number_multiplication == float(self.test_cases_list[4])

    def test_negative_and_positive_to_negative_multiplication_case(self):
        assert type(negative_and_positive_to_negative_multiplication) == int
        assert negative_and_positive_to_negative_multiplication == int(self.test_cases_list[5])

    def test_positive_and_negative_to_negative_multiplication_case(self):
        assert type(positive_and_negative_to_negative_multiplication) == int
        assert positive_and_negative_to_negative_multiplication == int(self.test_cases_list[6])

    def test_negative_and_negative_to_positive_multiplication_case(self):
        assert type(negative_and_negative_to_positive_multiplication) == int
        assert negative_and_negative_to_positive_multiplication == int(self.test_cases_list[7])
