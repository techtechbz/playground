from basic_grammar.calculation.addition import \
    natural_number_addition_case, \
    decimal_addition_case, \
    negative_number_addition_case, \
    string_addition_case, \
    array_addition_case, \
    dictionary_addition_case
from tests.get_file_path import get_file_path


class TestAddition:
    @classmethod
    def setup_class(cls):
        test_cases_path = get_file_path(__file__)
        with open(test_cases_path, encoding='utf-8') as f:
            cls.test_cases_list = [case.replace('\n', '') for case in f.readlines()]

    def test_get_test_case(self):
        assert len(self.test_cases_list) == 6
    
    def test_natural_number_addition_case(self):
        assert natural_number_addition_case == int(self.test_cases_list[0])

    def test_decimal_addition_case(self):
        assert decimal_addition_case == float(self.test_cases_list[1])

    def test_negative_number_addition_case(self):
        assert negative_number_addition_case == int(self.test_cases_list[2])

    def test_string_addition_case(self):
        assert string_addition_case == self.test_cases_list[3]

    def test_array_addition_case(self):
        assert str(array_addition_case) == self.test_cases_list[4]

    def test_dictionary_addition_case(self):
        assert str(dictionary_addition_case) == self.test_cases_list[5]
