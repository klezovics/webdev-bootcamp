const expect = require("expect.js");

// Input: Number
// Output: Sum of number digits
// Example: 123 -> 1 + 2 + 3 = 6
function sumOfDigits(num) {
  // convert a number to string and string to array
  let numberArray = num.toString().split("").map(Number);
  // use for loop
  let sum = 0;
  numberArray.forEach((num) => sum +=num );
  return sum;
}

expect(sumOfDigits(0)).to.equal(0);
expect(sumOfDigits(1)).to.equal(1);
expect(sumOfDigits(2)).to.equal(2);
expect(sumOfDigits(10)).to.equal(1);
expect(sumOfDigits(55)).to.equal(10);
expect(sumOfDigits(1000)).to.equal(1);
expect(sumOfDigits(9999)).to.equal(36);
