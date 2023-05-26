function takeCareOf(kidName) {
  console.log("Juliana feeds " + kidName);
  console.log("Juliana plays with " + kidName);
  console.log("Juliana puts " + kidName + " to sleep");
}

const kids = ["Pavel", "Julia", "Ivan"];

// for (const kidName of kids) {

//     takeCareOf(kidName);

// }

// kids.forEach((kidName) => {
//     takeCareOf(kidName);
// })

// for (let arrayIndex = 0; arrayIndex < kids.length; arrayIndex++) {
//     const kidName = kids[arrayIndex];
//     takeCareOf(kidName);
// }
// let i = 0;
// while (i<kids.length) {
//     const kidName = kids[i];
//     takeCareOf(kidName);
//     i++;

// }
let i = 0;
do {
  const kidName = kids[i];
  takeCareOf(kidName);
  i++;
} while (i < kids.length);
