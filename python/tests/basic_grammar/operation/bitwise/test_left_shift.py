from basic_grammar.operation.bitwise.left_shift import \
    number_and_number_left_shift, \
    negative_and_positive_left_shift
from tests.get_file_path import get_file_path


class TestLeftShift:
    @classmethod
    def setup_class(cls):
        test_cases_path = get_file_path(__file__)
        with open(test_cases_path, encoding='utf-8') as f:
            cls.test_cases_list = [case.replace('\n', '') for case in f.readlines()]

    def test_get_test_case(self):
        assert len(self.test_cases_list) == 7
    
    def test_number_and_number_left_shift_case(self):
        assert type(number_and_number_left_shift) == int
        assert number_and_number_left_shift == int(self.test_cases_list[0])

    def test_negative_and_positive_left_shift_case(self):
        assert type(negative_and_positive_left_shift) == int
        assert negative_and_positive_left_shift == int(self.test_cases_list[1])
