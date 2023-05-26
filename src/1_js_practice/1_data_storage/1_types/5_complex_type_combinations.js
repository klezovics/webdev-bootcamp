function createAndPrintAnArrayOfArrays() {
  const arr = [
    ["a", "b", "c"],
    ["d", "e", "f"],
  ];

  console.log(arr);
}

function createAndPrintArrayOfObjects() {
  const arr = [
    { a: "Hello", b: "World" },

    {
      a: "Hello",
      b: "Test",
    },
  ];
  console.log(arr);
}

function createAndPrintObjectSomeOfFieldsOfWhichAreArrays() {
  const o1 = {
    a: ["Hello", 12],
    b: [1, 2, 3],
  };
  console.log(o1);
}
createAndPrintObjectSomeOfFieldsOfWhichAreArrays();
