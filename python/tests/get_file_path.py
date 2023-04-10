import os


def get_file_path(full_path: str) -> str:
    if os.name == 'nt':
        test_file_path = full_path.replace('python\\tests', 'testcase')
    else:
        test_file_path = full_path.replace('python/tests', 'testcase')
    test_cases_path = test_file_path.replace('test_', '').replace('.py', '.txt')
    return test_cases_path
