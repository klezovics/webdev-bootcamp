test('test can correctly sum numbers in an array', () => {

    const sumOfNumbersInArray = (nums) => {
        return 0;
    }

    expect(sumOfNumbersInArray([0])).toBe(0);
});

test('test can find sum of even digits in array', () => {

    //Even digits: 0,2,4,6,8
    const sumOfEvenDigits = (nums) => {
        return 0;
    }

    expect(sumOfEvenDigits([0])).toBe(0);
});

test('test can find sum of digits in odd indexed position', () => {

    //odd = not visiable by 2
    const sumOfDigitsInOddPositions = (nums) => {
        return 0;
    }

    expect(sumOfDigitsInOddPositions([0])).toBe(0);
});

test('test can find product of numbers in array', () => {
    const f = (nums) => {
        return 0;
    }

    expect(f([0])).toBe(0);
});

test('if array has more than two 0 zeroes, return true else false', () => {
    const f = (nums) => {
        return true;
    }

    expect(f([0,0,0])).toBe(true);
});

test('if array has more 1s than 0 return true, else false', () => {
    const f = (nums) => {
        return 0;
    }

    expect(f([1,1])).toBe(true);
    expect(f([1,1,0])).toBe(true);
    expect(f([1,1,0,0,0])).toBe(false);
    expect(f([7])).toBe(false);
});

test('if string is palindrome', () => {

    // A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.

    const f = (str) => {
        return true;
    }

    expect(f(["a"])).toBe(true);
    expect(f(["ab"])).toBe(false);
    expect(f(["wataw"])).toBe(true);
});
