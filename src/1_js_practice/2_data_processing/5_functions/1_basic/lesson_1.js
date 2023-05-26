const expect = require("expect.js");

// Input: Number
// Output: Sum of number digits
// Example: 123 -> 1 + 2 + 3 = 6
// function sumOfDigits(num) {
//   // convert a number to string and string to array
//   let numberArray = num.toString().split("").map(Number);
//   // use for loop
//   let sum = 0;
//   numberArray.forEach((num) => sum +=num );
//   return sum;
// }
//
// expect(sumOfDigits(0)).to.equal(0);
// expect(sumOfDigits(1)).to.equal(1);
// expect(sumOfDigits(2)).to.equal(2);
// expect(sumOfDigits(10)).to.equal(1);
// expect(sumOfDigits(55)).to.equal(10);
// expect(sumOfDigits(1000)).to.equal(1);
// expect(sumOfDigits(9999)).to.equal(36);

// function sumOfNumbersInArray(numbers) {
//   let sum = 0;
//   numbers.forEach((num) => (sum += num));
//   return sum;
// }
// expect(sumOfNumbersInArray([0])).to.equal(0);
// expect(sumOfNumbersInArray([1])).to.equal(1);
// expect(sumOfNumbersInArray([1, 2])).to.equal(3);
// expect(sumOfNumbersInArray([1, 2, 3])).to.equal(6);
// expect(sumOfNumbersInArray([1, 2, 3, 4])).to.equal(10);
// expect(sumOfNumbersInArray([55, -55])).to.equal(0);

// Function must always return 42 irregarless of the input
// function always42(x,y) {
//     return 42;
// }
//
// expect(always42(1,2)).to.equal(42);
// expect(always42(99,-1)).to.equal(42);
// expect(always42(-200,-2)).to.equal(42);
// expect(always42(-1, 9)).to.equal(42);

// Input: Array of strings
// Output: String with all the strings from the array joined together
// Example: ['ad', 'bb', 'c'] -> 'adbbc
// function joinStringsArray(strings) {
//     let result = "";
//     strings.forEach(srt => result+=srt );
//     return result;
// }
//
// expect(joinStringsArray([])).to.equal("");
// expect(joinStringsArray(["a"])).to.equal("a");
// expect(joinStringsArray(["ab","bc","cd"])).to.equal("abbccd");

function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;

  let sum = 0;
  numbers.forEach((num) => (sum += num));
  let result = sum / numbers.length;

  return result;
}

expect(calculateAverage([])).to.equal(0);
expect(calculateAverage([1])).to.equal(1);
expect(calculateAverage([2, 2])).to.equal(2);
expect(calculateAverage([1, 2])).to.equal(1.5);
expect(calculateAverage([1, 2, 3])).to.equal(2);
expect(calculateAverage([1, 2, 3, 4])).to.equal(2.5);
expect(calculateAverage([-100, 100])).to.equal(0);

console.log("All tests passed!!!");
