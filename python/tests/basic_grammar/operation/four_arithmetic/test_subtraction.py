from basic_grammar.operation.four_arithmetic.subtraction import \
    number_and_number_subtraction, \
    decimal_and_number_subtraction, \
    number_and_decimal_subtraction, \
    decimal_and_decimal_subtraction, \
    decimal_and_decimal_to_number_subtraction, \
    positive_and_negative_to_negative_subtraction, \
    negative_and_positive_to_negative_subtraction, \
    negative_and_negative_to_positive_subtraction, \
    negative_zero
from tests.get_file_path import get_file_path


class TestSubtraction:
    @classmethod
    def setup_class(cls):
        test_cases_path = get_file_path(__file__)
        with open(test_cases_path, encoding='utf-8') as f:
            cls.test_cases_list = [case.replace('\n', '') for case in f.readlines()]

    def test_get_test_case(self):
        assert len(self.test_cases_list) == 9

    def test_number_and_number_subtraction_case(self):
        assert type(number_and_number_subtraction) == int
        assert number_and_number_subtraction == int(self.test_cases_list[0])

    def test_decimal_and_number_subtraction_case(self):
        assert type(decimal_and_number_subtraction) == float
        assert decimal_and_number_subtraction == float(self.test_cases_list[1])

    def test_number_and_decimal_subtraction_case(self):
        assert type(number_and_decimal_subtraction) == float
        assert number_and_decimal_subtraction == float(self.test_cases_list[2])

    def test_decimal_and_decimal_subtraction_case(self):
        assert type(decimal_and_decimal_subtraction) == float
        assert decimal_and_decimal_subtraction == float(self.test_cases_list[3])

    def test_decimal_and_decimal_to_number_subtraction_case(self):
        assert type(decimal_and_decimal_to_number_subtraction) == float
        assert decimal_and_decimal_to_number_subtraction == float(self.test_cases_list[4])

    def test_positive_and_negative_to_negative_subtraction_case(self):
        assert type(positive_and_negative_to_negative_subtraction) == int
        assert positive_and_negative_to_negative_subtraction == int(self.test_cases_list[5])

    def test_negative_and_positive_to_negative_subtraction_case(self):
        assert type(negative_and_positive_to_negative_subtraction) == int
        assert negative_and_positive_to_negative_subtraction == int(self.test_cases_list[6])

    def test_negative_and_negative_to_positive_subtraction_case(self):
        assert type(negative_and_negative_to_positive_subtraction) == int
        assert negative_and_negative_to_positive_subtraction == int(self.test_cases_list[7])

    def test_negative_zero_case(self):
        assert type(negative_zero) == int
        assert negative_zero == int(self.test_cases_list[8])
