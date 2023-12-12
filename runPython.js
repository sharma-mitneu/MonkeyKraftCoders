const { PythonShell } = require('python-shell');
const fs = require('fs');

async function executePythonCode(codeBody, testCases, functionName) {
    console.log("Code working");

    const handleTestFunction = `
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
`;

    const timestamp = new Date().getTime();
    const filename = `test_${timestamp}.py`;
    
    fs.writeFileSync(`./${filename}`, `${codeBody}\n${handleTestFunction}\nresult = handle_tests(${JSON.stringify(testCases)}, "${functionName}")\nprint(result)`  );

    // Use PythonShell.run to execute the dynamically named Python script
    const options = {
        pythonPath: 'python3', // Use 'python' if Python 3 is your default version
    };

    try {
        const results = await PythonShell.run(filename, options);
        console.log("Working");
        console.log(results)
        const output = JSON.parse(results.join(''));
        console.log(output);
    } catch (err) {
        console.error("Error:", err);
    } finally {
        // Optionally, you can clean up the dynamically created file after execution
        fs.unlinkSync(filename);
    }
}

// Sample test cases
const testCases = [
    [[1, 2], 3],
    [[-1, 5], 4],
];

// Sample Python code
const pythonCode = `
def add_numbers(a, b):
    return a + b
`;

// Sample function name
const functionName = 'add_numbers';

// Execute Python code with tests
executePythonCode(pythonCode, testCases, functionName);
