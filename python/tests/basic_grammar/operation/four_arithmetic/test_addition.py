from basic_grammar.operation.four_arithmetic.addition import \
    number_and_number_addition, \
    decimal_and_number_addition, \
    number_and_decimal_addition, \
    decimal_and_decimal_addition, \
    decimal_and_decimal_to_number_addition, \
    positive_and_negative_to_negative_addition, \
    string_and_string_addition, \
    array_addition, \
    dictionary_addition
from tests.get_file_path import get_file_path


class TestAddition:
    @classmethod
    def setup_class(cls):
        test_cases_path = get_file_path(__file__)
        with open(test_cases_path, encoding='utf-8') as f:
            cls.test_cases_list = [case.replace('\n', '') for case in f.readlines()]

    def test_get_test_case(self):
        assert len(self.test_cases_list) == 9
    
    def test_number_and_number_addition_case(self):
        assert type(number_and_number_addition) == int
        assert number_and_number_addition == int(self.test_cases_list[0])

    def test_decimal_and_number_addition_case(self):
        assert type(decimal_and_number_addition) == float
        assert decimal_and_number_addition == float(self.test_cases_list[1])

    def test_number_and_decimal_addition_case(self):
        assert type(number_and_decimal_addition) == float
        assert number_and_decimal_addition == float(self.test_cases_list[2])

    def test_decimal_and_decimal_addition_case(self):
        assert type(decimal_and_decimal_addition) == float
        assert decimal_and_decimal_addition == float(self.test_cases_list[3])

    def test_decimal_and_decimal_to_number_addition_case(self):
        assert type(decimal_and_decimal_to_number_addition) == float
        assert decimal_and_decimal_to_number_addition == float(self.test_cases_list[4])

    def test_positive_and_negative_to_negative_addition_case(self):
        assert type(positive_and_negative_to_negative_addition) == int
        assert positive_and_negative_to_negative_addition == float(self.test_cases_list[5])

    def test_string_and_string_addition_case(self):
        assert type(string_and_string_addition) == str
        assert string_and_string_addition == self.test_cases_list[6]

    def test_array_addition_case(self):
        assert type(array_addition) == list
        assert str(array_addition) == self.test_cases_list[7]

    def test_dictionary_addition_case(self):
        assert type(dictionary_addition) == dict
        assert str(dictionary_addition) == self.test_cases_list[8]
