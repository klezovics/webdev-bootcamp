/*
1. Write a function called `calculateArea` that takes the length and width of a rectangle as parameters and returns its area.

2. Write a function called `isPrime` that takes a number as a parameter and returns `true` if it's a prime number, and `false` otherwise.

3. Write a function called `capitalize` that takes a string as a parameter and returns the same string with the first letter capitalized.

4. Write a function called `reverseArray` that takes an array as a parameter and returns a new array with the elements reversed.

5. Write a function called `countVowels` that takes a string as a parameter and returns the number of vowels in the string.

6. Write a function called `findMaxValue` that takes an array of numbers as a parameter and returns the maximum value in the array.

7. Write a function called `isPalindrome` that takes a string as a parameter and returns `true` if it's a palindrome, and `false` otherwise.

8. Write a function called `calculateFactorial` that takes a number as a parameter and returns its factorial.

9. Write a function called `sumArray` that takes an array of numbers as a parameter and returns the sum of all the numbers.

10. Write a function called `truncateString` that takes a string and a number as parameters and returns a truncated version of the string with the specified number of characters.

11. Write a function called `isEven` that takes a number as a parameter and returns `true` if it's even, and `false` otherwise.

12. Write a function called `removeDuplicates` that takes an array as a parameter and returns a new array with the duplicate elements removed.

13. Write a function called `titleCase` that takes a string as a parameter and returns the same string with each word capitalized.

14. Write a function called `findLongestWord` that takes an array of strings as a parameter and returns the longest word in the array.

15. Write a function called `calculateBMI` that takes a person's weight (in kilograms) and height (in meters) as parameters and returns their BMI (Body Mass Index).

16. Write a function called `endsWith` that takes two strings as parameters and returns `true` if the first string ends with the second string, and `false` otherwise.

17. Write a function called `isLeapYear` that takes a year as a parameter and returns `true` if it's a leap year, and `false` otherwise.

18. Write a function called `findAverage` that takes an array of numbers as a parameter and returns the average of all the numbers.

19. Write a function called `sumDigits` that takes a number as a parameter and returns the sum of its digits.

20. Write a function called `getUniqueValues` that takes an array as a parameter and returns a new array with only the unique values from the original array.

These exercises cover a variety of concepts and challenges related to JavaScript functions. They will help you practice writing functions, working with different data types, and manipulating arrays and strings. Happy coding!
 */

var expect = require('expect.js');

function getFirstNNumbers(n) {
    var result = [];
    for (var i = 1; i <= n; i++) {
        result.push(i);
    }
    return result;
}

function testGetFirstNNumbers() {
    console.log("Test start")
    expect(getFirstNNumbers(1)).to.eql([1]);
    expect(getFirstNNumbers(2)).to.eql([1,2]);

    // The line below will throw an error because the arrays are not equal
    expect(getFirstNNumbers(2)).to.eql([1,2,3]);
    console.log("Test end")
}

testGetFirstNNumbers()