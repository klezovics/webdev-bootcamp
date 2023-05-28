import { info } from "console";

test("test print all numbers 1..n", () => {
  const printNumbers = (n) => {};

  printNumbers(5);
});

test("test print all even numbers 1..n", () => {
  const printNumbers = (n) => {};

  printNumbers(5);
  // Part 2: Do it also for odd numbers
});

test("test can reverse an array", () => {
  const reverseArray = (nums) => {
    return [];
  };

  expect(reverseArray([1])).toEqual([1]);
  expect(reverseArray([1, 2])).toEqual([2, 1]);
  expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);

  expect(reverseArray([1, 1, 5, 5])).toEqual([5, 5, 1, 1]);
  expect(reverseArray([-1, 1, 3, 2])).toEqual([2, 3, 1, -1]);
  expect(reverseArray([0, 7, -3])).toEqual([-3, 7, 0]);
});

test("test print all even numbers 1..n in reverse order", () => {
  const printNumbers = (n) => {};

  printNumbers(5);
  // Part 2: Do it also for odd numbers
});

test("test print all numbers 1..n in reverse order", () => {
  const printNumbers = (n) => {};

  printNumbers(5);
});

test("test can find sum of numbers 1,2 .. n", () => {
  const f = (n) => {
    return 0;
  };

  expect(f(0)).toBe(0);
});

test("test can find sum of first N odd numbers", () => {
  const f = (n) => {
    return 0;
  };

  expect(f(0)).toBe(0);
});

test("test can find sum of first N even numbers", () => {
  const f = (n) => {
    return 0;
  };

  expect(f(0)).toBe(0);
});

test("find sum of first N numbers which are divisable by 3", () => {
  const f = (n) => {
    return 0;
  };

  expect(f(0)).toBe(0);
});

test("find sum of first N numbers which are divisable by 5", () => {
  const f = (n) => {
    return 0;
  };

  expect(f(0)).toBe(0);
});

test("test can find product of first N numbers", () => {
  const f = (n) => {
    return 0;
  };

  expect(f(0)).toBe(0);
});

test("test can filter out negative numbers", () => {
  const f = (nums) => {
    return nums;
  };

  expect(f([0])).toBe([0]);
});

test("test can filter out negative numbers and positive more than 100", () => {
  const f = (nums) => {
    return nums;
  };

  expect(f([0])).toBe([0]);
});

test("test can find sum of object fields", () => {
  const f = (myObject) => {
    return 0;
  };

  expect(f({ a: 0, b: 0 })).toBe(0);
});

test("test can find subarray sum", () => {
  const f = (arr, startIndex, endIndex) => {
    return 0;
  };

  expect(f([0], 0, 0)).toBe(0);
});

test("test can print 2D array", () => {
  // On the board draw a 2D array diagram and show basic operations
  // Before explaining this topic give examples of other arrays
  // Show an array objects
  // Array is also an object (typeof) and therefore can be stored as a value in another array

  const array2D = [
    [1, 2], // row 0
    [3, 4], // row 1
  ];

  const print2dArrayShowIterationOrder = (array2D) => {
    for (let row = 0; row < array2D.length; row++) {
      info("Printing row ", row);
      for (let col = 0; col < array2D[row].length; col++) {
        info("(" + row + ":" + col + ") -> " + array2D[row][col]);
      }
    }
  };

  const print2dArray = (array2D) => {
    for (let row = 0; row < array2D.length; row++) {
      let rowString = "";
      for (let col = 0; col < array2D[row].length; col++) {
        rowString += String(array2D[row][col]) + " ";
      }
      info(rowString);
    }
  };

  print2dArray(array2D);
});

test("test can get sum of elements in 2D array", () => {
  const array2D = [
    [1, 2], // row 0
    [3, 4], // row 1
  ];

  const f = (array2D) => {
    return 0;
  };

  expect(f([[0]])).toBe(0);
});
