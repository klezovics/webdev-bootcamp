test("test can correctly sum numbers in an array", () => {
  const sumOfNumbersInArray = (nums) => {
    let sum = 0;
    nums.forEach((num) => (sum += num));
    return sum;
  };

  expect(sumOfNumbersInArray([0])).toBe(0);
  expect(sumOfNumbersInArray([1])).toBe(1);
  expect(sumOfNumbersInArray([1, 2])).toBe(3);
  expect(sumOfNumbersInArray([1, 2, 3])).toBe(6);
  expect(sumOfNumbersInArray([1, 1, 5, 5])).toBe(12);
  expect(sumOfNumbersInArray([-1, 1, 3, 2])).toBe(5);
  expect(sumOfNumbersInArray([0, 7, -3])).toBe(4);
});

test("test can find sum of even digits in array", () => {
  //Even digits: 0,2,4,6,8
  const sumOfEvenDigits = (nums) => {
    let sum = 0;
    for (let index = 0; index < nums.length; index++) {
      if (nums[index] % 2 === 0) {
        sum += nums[index];
      }
    }
    return sum;
  };
  expect(sumOfEvenDigits([0])).toBe(0);
  expect(sumOfEvenDigits([2])).toBe(2);
  expect(sumOfEvenDigits([2, 4])).toBe(6);
  expect(sumOfEvenDigits([2, 4, 1])).toBe(6);
  expect(sumOfEvenDigits([2, 1, 3, 2])).toBe(4);
  expect(sumOfEvenDigits([1, 1, 1, 9])).toBe(0);
  expect(sumOfEvenDigits([2, 8, 4, 5])).toBe(14);
  expect(sumOfEvenDigits([6, 6, 1, 3, 4])).toBe(16);
});

test("test can find sum of digits in odd indexed position", () => {
  //odd = not visiable by 2
  const sumOfDigitsInOddPositions = (nums) => {
    return 0;
  };

  expect(sumOfDigitsInOddPositions([0])).toBe(0);
});

test("test can find product of numbers in array", () => {
  const f = (nums) => {
    return 0;
  };

  expect(f([0])).toBe(0);
});

test("if array has more than two 0 zeroes, return true else false", () => {
  const f = (nums) => {
    return true;
  };

  expect(f([0, 0, 0])).toBe(true);
});

test("if array has more 1s than 0 return true, else false", () => {
  const f = (nums) => {
    return 0;
  };

  expect(f([1, 1])).toBe(true);
  expect(f([1, 1, 0])).toBe(true);
  expect(f([1, 1, 0, 0, 0])).toBe(false);
  expect(f([7])).toBe(false);
});

test("if string is palindrome", () => {
  // A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.

  const f = (str) => {
    return true;
  };

  expect(f(["a"])).toBe(true);
  expect(f(["ab"])).toBe(false);
  expect(f(["wataw"])).toBe(true);
});
