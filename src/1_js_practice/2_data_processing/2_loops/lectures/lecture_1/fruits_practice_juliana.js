const vegetables = ["patato", "carrot", "eggplant"];

// vegetables.forEach((vegetable) => {
//   console.log("Juliana cuts " + vegetable);
//   console.log("Juliana eats " + vegetable);
// });

// for (const vegetable of vegetables) {
//     console.log("Juliana cuts " + vegetable);
//     console.log("Juliana eats " + vegetable);
// }

// for (let i = 0; i < vegetables.length; i++) {
//     const vegetable = vegetables[i];
//     console.log("Juliana cuts " + vegetable);
//     console.log("Juliana eats " + vegetable);

// }
// let i = 0;
// while (i<vegetables.length) {
//     const vegetable = vegetables[i];
//     console.log("Juliana cuts " + vegetable);
//     console.log("Juliana eats " + vegetable);

//     i++;

// }

let i = 0;

do {
  const vegetable = vegetables[i];
  console.log("Juliana cuts " + vegetable);
  console.log("Juliana eats " + vegetable);

  i++;
} while (i < vegetables.length);
