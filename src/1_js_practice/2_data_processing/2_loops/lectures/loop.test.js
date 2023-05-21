test('test can add two numbers', () => {

    // Step 1. Setup your test data
    const num1 = 5;
    const num2 = 10;

    // Step 2. Perform the test
    const result = num1 + num2;

    // Step 3. Assert that everything works as expected
    expect(result).toBe(15);
});

function toArrayOfSquares(arr) {
}
test('test can convert to an array of squares', () => {
    const a = [1, 2, 3]
    const doubles = toArrayOfSquares(a)
    expect(doubles).toEqual([1, 4, 9])
});
