const expect = require("expect.js");

function add(num1, num2) {
  return num1 + num2;
}

expect(add(1, 2)).to.equal(3);
console.log("First test passed!");

expect(add(10, 20)).to.equal(30);
console.log("Second test passed!");
