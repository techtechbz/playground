from basic_grammar.coding_rule.line_break import line_break_haiku
from tests.get_file_path import get_file_path


class TestRule:
    @classmethod
    def setup_class(cls):
        test_cases_path = get_file_path(__file__)
        with open(test_cases_path, encoding='utf-8') as f:
            cls.test_cases_list = f.readlines()

    def test_line_break_haiku(self):
        assert line_break_haiku == self.test_cases_list[0]
