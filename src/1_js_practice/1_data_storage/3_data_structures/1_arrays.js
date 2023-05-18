const array =[1, 2, 3];
array.push("q");
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

array.unshift(4, "a");
console.log(array);

const array2 = ["a2", "d1"];
array3 = array.concat(array2);
console.log(array3);

const array4 = array.slice(1);
console.log(array4);

array.forEach((element) =>console.log(element));

const array6 = array.map((el) =>el+2 );
console.log(array6);

const array7 = array.filter((el) => el>3);
console.log(array7);
const array8 = array.find((el) =>(el=="a"));
console.log(array8);







