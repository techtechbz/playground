from basic_grammar.operation.bitwise.disjunction import \
    number_and_number_disjunction, \
    positive_and_negative_disjunction, \
    negative_and_positive_disjunction, \
    negative_and_negative_disjunction
from tests.get_file_path import get_file_path


class TestDisjunction:
    @classmethod
    def setup_class(cls):
        test_cases_path = get_file_path(__file__)
        with open(test_cases_path, encoding='utf-8') as f:
            cls.test_cases_list = [case.replace('\n', '') for case in f.readlines()]

    def test_get_test_case(self):
        assert len(self.test_cases_list) == 7
    
    def test_number_and_number_disjunction_case(self):
        assert type(number_and_number_disjunction) == int
        assert number_and_number_disjunction == int(self.test_cases_list[0])

    def test_positive_and_negative_disjunction_case(self):
        assert type(positive_and_negative_disjunction) == int
        assert positive_and_negative_disjunction == int(self.test_cases_list[1])

    def test_negative_and_positive_disjunction_case(self):
        assert type(negative_and_positive_disjunction) == int
        assert negative_and_positive_disjunction == int(self.test_cases_list[2])

    def test_negative_and_negative_disjunction_case(self):
        assert type(negative_and_negative_disjunction) == int
        assert negative_and_negative_disjunction == int(self.test_cases_list[3])