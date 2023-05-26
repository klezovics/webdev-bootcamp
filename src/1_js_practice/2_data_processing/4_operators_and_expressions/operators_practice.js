// We have operators
// Operators -> Input + Output -> Because they process data

// Operator types -> + - * / -> arithmetic operators
// String operator -> + -> concatenation
// Logical operators -> &&, ||
// Unary operators -> Arithmetic(++/--) or Logica (!)
// Comparison operators ==/===/</<=/>/>==
// Assignment operators =, +=, -=

// Can drive a car in europe
let hasCar = true;
let hasLicense = false;

let canDrive = hasCar && hasLicense;
let canDriveFuckTheRules = hasCar || hasLicense;

let myVal = 17;
myVal--;
console.log(myVal);
myVal++;
myVal++;
console.log(myVal);

var amIGood = true;
console.log(!amIGood);

var x = 17;
console.log(x);
var y = x;
console.log(y);

let x1 = 0;
x1 += 5; // x1 = x1 + 5
console.log(x1);

let myLongVariableName = 0;
myLongVariableName += 99;
console.log(myLongVariableName);
