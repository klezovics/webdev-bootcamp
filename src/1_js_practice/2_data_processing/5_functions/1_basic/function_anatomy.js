// Function exist to extract reusable code and remove code duplication
// Function can be declared or used !
// Functions have 2 types: ordinary and arrow functions -> different creation syntax, same usage syntax

// Functions has: input and output
// Function converts inputs to outputs
// Inputs -> functional arguments
// Outputs -> return statement
function isEven(number) {
  return number % 2 === 0;
}

const a = 2;
console.log("isEven(2):", isEven(2));
console.log("isEven(17):", isEven(17));

// You can also have functions without any arguments
function sayHello() {
  console.log("Hello!");
}

function getMagicNumber() {
  return 42;
}

// Function attributes: name, arguments, body, return value
