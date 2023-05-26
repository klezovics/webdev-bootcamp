// Spread operator can be applied to
// 1. Arrays
// 2. Objects
// 3. Function arguments
// 4. React props
// Its purpose is to create a copy of the original array/object and maybe also change it a bit

// Example 1: Spreading an array into another array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log(combinedArray);
// Output: [1, 2, 3, 4, 5, 6]

// Example 2: Spreading an object into another object
const object1 = { prop1: "Value 1", prop2: "Value 2" };
const object2 = { prop3: "Value 3", prop4: "Value 4" };
const combinedObject = { ...object1, ...object2 };

console.log(combinedObject);
// Output: { prop1: 'Value 1', prop2: 'Value 2', prop3: 'Value 3', prop4: 'Value 4' }

// Example 3: Spreading elements of an array into function arguments
const numbers = [1, 2, 3, 4, 5];
const sum = (a, b, c, d, e) => a + b + c + d + e;

const result = sum(...numbers);
console.log(result);
// Output: 15

// Example 4: Creating a copy of an array or an object
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray);
// Output: [1, 2, 3]

const originalObject = { prop1: "Value 1", prop2: "Value 2" };
const copiedObject = { ...originalObject };

console.log(copiedObject);
// Output: { prop1: 'Value 1', prop2: 'Value 2' }

// Example 5: Adding or modifying properties of an object
const user = {
  name: "John Doe",
  age: 30,
};

const updatedUser = {
  ...user,
  age: 31,
  occupation: "Developer",
};

console.log(updatedUser);
// Output: { name: 'John Doe', age: 31, occupation: 'Developer' }
