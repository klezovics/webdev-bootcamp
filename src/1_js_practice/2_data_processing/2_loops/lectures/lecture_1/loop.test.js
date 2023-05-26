test("test can add two numbers", () => {
  // Step 1. Setup your test data
  const num1 = 5;
  const num2 = 10;

  // Step 2. Perform the test
  const result = num1 + num2;

  // Step 3. Assert that everything works as expected
  expect(result).toBe(15);
});

test("test can negate every number in an array", () => {
  let result = [1, -2, 3, -4, 5];

  //Implementation goes here!

  expect(result).toEqual([-1, 2, -3, 4, -5]);
});

test("test can create list of numbers one to ten", () => {
  var result = [];

  //Implementation goes here!

  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

function toArrayOfSquares(arr) {}

test("test can convert to an array of squares", () => {
  const a = [1, 2, 3];
  const doubles = toArrayOfSquares(a);
  expect(doubles).toEqual([1, 4, 9]);
});
