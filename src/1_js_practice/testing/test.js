var expect = require('expect.js');
const { test } = require('jest');

console.log('Hello, Tests!');


test('add function should return the sum of two numbers', () => {
    // Arrange
    const num1 = 5;
    const num2 = 10;

    // Act
    const result = num1 + num2;

    // Assert
    expect(result).toBe(15);
});
