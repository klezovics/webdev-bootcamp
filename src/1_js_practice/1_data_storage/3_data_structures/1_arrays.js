const array = [1, 2, 3];
// array.push("q");
// console.log(array);

// array.pop();
// console.log(array);

// array.shift();
// console.log(array);

// array.unshift(4, "a");
// console.log(array);

// const array2 = ["a2", "d1"];
// array3 = array.concat(array2);
// console.log(array3);

// const array4 = array.slice(1);
// console.log(array4);

// array.forEach((element) =>console.log(element));

// const array6 = array.map((el) =>el+2 );
// console.log(array6);
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function numberToEnglishName(n) {
  const numberToEnglishName = new Map();
  numberToEnglishName.set(1, "one");
  numberToEnglishName.set(2, "two");
  numberToEnglishName.set(3, "three");
  numberToEnglishName.set(4, "four");
  numberToEnglishName.set(5, "five");
  numberToEnglishName.set(6, "six");
  numberToEnglishName.set(7, "seven");
  numberToEnglishName.set(8, "eight");
  numberToEnglishName.set(9, "nine");
  numberToEnglishName.set(10, "ten");
  return numberToEnglishName.get(n);
}
const myFunction = (el) => numberToEnglishName(el).includes("n");
const array7 = array1.filter(myFunction);
console.log(array7);
// console.log(array7);
// const array8 = array.find((el) =>(el=="a"));
// console.log(array8);
