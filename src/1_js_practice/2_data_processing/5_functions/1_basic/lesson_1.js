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

function sumOfNumbersInArray(numbers) {
  let sum = 0;
  numbers.forEach((num) => (sum += num));
  return sum;
}
expect(sumOfNumbersInArray([0])).to.equal(0);
expect(sumOfNumbersInArray([1])).to.equal(1);
expect(sumOfNumbersInArray([1, 2])).to.equal(3);
expect(sumOfNumbersInArray([1, 2, 3])).to.equal(6);
expect(sumOfNumbersInArray([1, 2, 3, 4])).to.equal(10);
expect(sumOfNumbersInArray([55, -55])).to.equal(0);

console.log("All tests passed!!!");
