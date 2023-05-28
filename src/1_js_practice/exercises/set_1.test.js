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
  const array2D = [
    [1, 2], // row 0
    [3, 4], // row 1
  ];

  const f = (array2D) => {
    for (let row = 0; row < array2D.length; row++) {
      console.log("Printing row ", row);
      for (let col = 0; col < array2D[row].length; col++) {
        console.log(
          "Row:" + row + " Column:" + col + " Value:" + array2D[row][col]
        );
      }
    }
  };

  f(array2D);
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
