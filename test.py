def add_numbers(a, b):
    return a + b


def handle_tests(test_cases, function_name):
    results = []
    for test_case in test_cases:
        input_data = test_case[0]
        expected_output = test_case[1]
        try:
            user_output = globals()[function_name](*input_data)
            result = {
                "status": "Success" if user_output == expected_output else "Failure",
                "test_case_number": "undefined",
                "test_case": input_data,
                "expected_output": expected_output,
                "user_output": user_output,
            }
        except Exception as e:
            result = {
                "status": "Runtime Error",
                "test_case_number": "undefined",
                "test_case": input_data,
                "expected_output": expected_output,
                "user_output": "undefined",
                "error_message": str(e),
            }
        results.append(result)
    return results

result = handle_tests([[[1,2],3],[[-1,5],4]], "add_numbers")
print(result)
