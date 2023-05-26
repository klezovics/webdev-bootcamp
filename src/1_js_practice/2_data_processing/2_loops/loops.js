const ar1 = [1, 2, 3, 4, 5, 8, 7, 5, 9, 5];

// function createABasicForLoop() {
// for (i=35; i > 0;){
//     i= i-5
//     console.log(i);
// }

// }
//

// function createABasicWhileLoop() {
//     let i = 5;
//     while (i<=25) {
//         console.log(i);
//         i++;

//     }

// }
// createABasicWhileLoop();

// function createABasicDoWhileLoop() {
//     let i = 5;
//     do {

//         console.log(i);
//         i++;
//     }
//     while (i<20);

// }
// createABasicDoWhileLoop();

function printFirstTenNumbers() {
  for (let i = 0; i < 11; i++) {
    console.log(i);
  }
}
// printFirstTenNumbers(); //ouput: will print first 10 numbers;

function printFirstTenEvenNumbers() {
  for (let i = 1; i < 21; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
// printFirstTenEvenNumbers(); //output: will print 10 even numbers;

function printFirstTenOddNumbers() {
  for (let i = 0; i < 21; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
}

// printFirstTenOddNumbers();  // output: will print 10 odd numbers;

function calculateSumOfFirstNumbers(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
}

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log(reversed);
}

// reverseString("Iuliana"); //output: anailuI

function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  console.log(count);
}
// countOccurrences("hello", "l"); //output: 2, because hello contains 2 letters "l";
function findMaxValue(arr) {
  for (let i = 0; i <= arr.length; i++) {
    let max = arr[0];
    if (arr[i] > max) {
      max = arr[i];
      console.log(max);
    }
  }
}
// const ar2=[8,3,9,2];
// findMaxValue(ar2); // output: 9

function repeatString(str, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  console.log(result);
}
repeatString("hello", 4); //output string "hello" 4 times.
