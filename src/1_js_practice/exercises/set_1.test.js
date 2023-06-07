/*
      Notes:
      - Useful array visualizer: https://array-3d-viz.vercel.app/
      - Before starting this -> give a demo
      - Visualize array, explain what operations can be done on array
      - Visualize array iteration -> forward, backward, with multiple steps
      - Give visualization of a variable
      - Give visualization of an if-else statement
      - Give visualization of different loops
 */
test("write function which always returns 42", () => {
  const f = () => {
    return 42;
  };

  expect(f()).toBe(42);
});

test("write function which prints all elements of array to console", () => {
  const f = (arr) => {};

  //Ask Juliana to do this with each known loop type
});

test("write function which prints all elements of array to console in reverse", () => {
  const f = (arr) => {};
  //Ask Juliana to do this with each known loop type
});

test("write function which prints all elements with even index", () => {
  const f = (arr) => {};
});

test("write function which prints all elements with odd index", () => {
  const f = (arr) => {};
});

test("write function which prints every 3rd element", () => {
  const f = (arr) => {};
});

test("write function which prints every nth element", () => {
  const f = (arr) => {};
});

test("write function which remove all elements more than 10 from array", () => {
  const f = (arr) => {
    return [];
  };

  expect(f([1, 2, 11])).toBe([1, 2]);
});

test("write function which remove all odd elements from array", () => {
  const f = (arr) => {
    return [];
  };

  expect(f([1, 2, 11])).toBe([2]);
});

test("write function which remove all elements which are divisible by 3 from array", () => {
  const f = (arr) => {
    return [];
  };

  expect(f([1, 3, 2, 6, 15])).toBe([1, 2]);
  expect(f([1, 3, 11, 15])).toBe([1, 11]);
});

test("write function which return sum of numbers n to m", () => {
  const f = (n, m) => {
    return 0;
  };

  expect(f(0, 0)).toBe(0);
  expect(f(0, 1)).toBe(1);
  expect(f(0, 2)).toBe(3);
  expect(f(0, 3)).toBe(6);

  expect(f(1, 4)).toBe(10);
  expect(f(2, 3)).toBe(5);
  expect(f(10, 13)).toBe(46);
});

test("write function, which find max element in the array", () => {
  const f = (nums) => {
    return 0;
  };

  expect(f([0])).toBe(0);
  expect(f([1])).toBe(1);
  expect(f([1, 2])).toBe(2);
  expect(f([1, 2, 3])).toBe(3);
});

test("write function, which find min element in the array", () => {
  const f = (nums) => {
    return 0;
  };

  expect(f([0])).toBe(0);
  expect(f([1])).toBe(1);
  expect(f([1, 2])).toBe(1);
  expect(f([1, 2, 3])).toBe(1);
  expect(f([1, 2, 3, -1])).toBe(-1);
});

test("write function, which processes array and increases each positive number by 1", () => {
  const f = (nums) => {
    return 0;
  };

  expect(f([0])).toBe(0);
  expect(f([1])).toBe(1);
  expect(f([1, 2])).toBe(1);
  expect(f([1, 2, 3])).toBe(1);
  expect(f([1, 2, 3, -1])).toBe(-1);
});

test("v2 write function, which processes array and increases each non-negative number by 1", () => {
  // If the number is negative throw error like this -> throw new Error("Negative number found");

  const f = (nums) => {
    return 0;
  };

  expect(f([0])).toBe(1);
  expect(f([1, 2, 5])).toBe([2, 3, 6]);

  try {
    f([2, 1, -1]);
  } catch (e) {
    expect(e.message).toBe("Negative number found");
  }
});

test("write function, which find 2nd biggest element in the array", () => {
  const f = (nums) => {
    return 0;
  };

  expect(f([1, 2])).toBe(1);
  expect(f([1, 2, 3, 4, 5])).toBe(4);
});

test("write function which returns square of a number", () => {
  const f = (n) => {};

  expect(f(0)).toBe(0);
  expect(f(1)).toBe(1);
  expect(f(2)).toBe(4);
  expect(f(3)).toBe(9);
  expect(f(4)).toBe(16);
});

test("write function which returns cube of a number", () => {
  const f = () => {};

  // 8 = 4 * 2
  // = 2 * 2 * 2
  expect(f(0)).toBe(0);
  expect(f(1)).toBe(1);
  expect(f(2)).toBe(8);
});

test("write function which returns sum of 2 numbers", () => {
  const f = (a, b) => {
    return 0;
  };

  expect(f(0, 0)).toBe(0);

  //Now do same for product/subtraction/division
});

test("write function which returns sum of 3 numbers", () => {
  const f = (a, b, c) => {
    return 0;
  };

  expect(f(0, 0, 0)).toBe(0);

  //Now do same for product/subtraction/division
});

test("write function which returns sum of 4 numbers", () => {
  const f = (a, b, c, d) => {
    return 0;
  };

  expect(f(0, 0, 0, 0)).toBe(0);

  //Now do same for product/subtraction/division
});

test("write function which returns sum of an array", () => {
  const f = (arr) => {
    return 0;
  };

  expect(f([0])).toBe(0);

  //Now do same for product/subtraction/division
});

test("write function which returns sqrt of number", () => {
  // you can use Math.sqrt(number) javascript function to get square root of a number
  const f = () => {};

  expect(f(4)).toBe(2);
  expect(f(9)).toBe(3);
  expect(f(16)).toBe(4);
});

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

test("test is string is palindrome", () => {
  const isPalindrome = (str) => {
    return false;
  };

  expect(isPalindrome("")).toBe(true);
  expect(isPalindrome("a")).toBe(true);

  expect(isPalindrome("aa")).toBe(true);
  expect(isPalindrome("ab")).toBe(false);
  expect(isPalindrome("aba")).toBe(true);

  expect(isPalindrome("abba")).toBe(true);
  expect(isPalindrome("abab")).toBe(false);

  expect(isPalindrome("wowow")).toBe(true);
  expect(isPalindrome("ttbbb")).toBe(false);
});

test("test can calculate person age from date of birth", () => {
  const myBirthday = new Date(1990, 2, 27);

  const calculateAge = (dob) => {
    return 0;
  };

  expect(calculateAge(myBirthday)).toBe(33);
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

test("count number of different characters in string", () => {
  const f = (str) => {
    return 0;
  };

  expect(f("")).toBe(0);
  expect(f("a")).toBe(1);
  expect(f("aa")).toBe(1);
  expect(f("ab")).toBe(2);
  expect(f("aba")).toBe(2);
  expect(f("abc")).toBe(3);
  expect(f("abca")).toBe(3);
  expect(f("abcb")).toBe(3);
  expect(f("abcc")).toBe(3);
});

test("find number of element occurrences in array", () => {
  const f = (arr, element) => {
    return 0;
  };

  expect(f([1], 1)).toBe(1);
  expect(f([1], 2)).toBe(0);

  expect(f([1, 2, 3], 1)).toBe(1);
  expect(f([1, 2, 3], 2)).toBe(1);
  expect(f([1, 2, 3], 3)).toBe(1);
  expect(f([1, 2, 3], 4)).toBe(0);

  expect(f([1, 1, 1], 1)).toBe(3);
  expect(f([1, 1, 1], 2)).toBe(0);

  expect(f([1, 2, 1], 1)).toBe(2);
  expect(f([1, 2, 1], 2)).toBe(1);
  expect(f([1, 2, 1], 3)).toBe(0);
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

test("get average of only positive numbers in array", () => {
  const f = (arr) => {
    return 0;
  };

  expect(f([])).toBe(0);
  expect(f([0])).toBe(0);
  expect(f([1])).toBe(1);
  expect(f([1, 2])).toBe(1.5);
  expect(f([1, 2, 3])).toBe(2);

  expect(f([4, 4, 4, -100, -99])).toBe(4);

  expect(f([-1])).toBe(0);
  expect(f([-100, 1, 2, -1000])).toBe(1.5);
});

test("remove duplicates from array", () => {
  const f = (arr) => {
    return [];
  };

  expect(f([])).toEqual([]);
  expect(f([1])).toEqual([1]);
  expect(f([1, 2])).toEqual([1, 2]);
  expect(f([1, 1])).toEqual([1]);

  expect(f([1, 1, 1])).toEqual([1]);
  expect(f([1, 2, 1])).toEqual([1, 2]);
  expect(f([1, 2, 2])).toEqual([1, 2]);
  expect(f([1, 2, 1, 2])).toEqual([1, 2]);

  expect(f([1, 2, 1, 2, 1])).toEqual([1, 2]);
  expect(f([1, 2, 3, 3, 100, 777])).toEqual([1, 2, 3, 100, 777]);
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
    // for (let row = 0; row < array2D.length; row++) {
    //   info("Printing row ", row);
    //   for (let col = 0; col < array2D[row].length; col++) {
    //     info("(" + row + ":" + col + ") -> " + array2D[row][col]);
    //   }
    // }
  };

  const print2dArray = (array2D) => {
    for (let row = 0; row < array2D.length; row++) {
      let rowString = "";
      for (let col = 0; col < array2D[row].length; col++) {
        rowString += String(array2D[row][col]) + " ";
      }
      //info(rowString);
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
