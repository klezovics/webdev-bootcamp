test("if string is palindrome", () => {
  // A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.

  const f = (str) => {
    return true;
  };

  expect(f(["a"])).toBe(true);
  expect(f(["ab"])).toBe(false);
  expect(f(["wataw"])).toBe(true);
});

test("recursive array generator", () => {
  // A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.

  // parameters: min and max
  // return array min..max
  // if min > max return empty array
  // function must be recursive
  const f = (min, max) => {
    // Base -> can solve the problem directly
    if (min > max) return [];
    if (min == max) return [min];

    // Recursive case -> break the problem into smaller pieces
    let arrayForMin = f(min, min);
    let arrayForMinPlusOneToMax = f(min + 1, max);

    return arrayForMin.concat(arrayForMinPlusOneToMax);
  };

  expect(f(1, 1)).toEqual([1]);
  expect(f(1, 2)).toEqual([1, 2]);
  expect(f(3, 7)).toEqual([3, 4, 5, 6, 7]);
  expect(f(3, 7)).toEqual([3, 4, 5, 6, 7]);
  expect(f(10, 7)).toEqual([]);
});

test("contact check", () => {
  // Setup
  const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];

  function lookUpProfile(name, prop) {
    for (let contact of contacts) {
      if (contact.firstName === name) {
        console.log(contact.firstName, name);
        // if contact found we will return from here
        if (contact.hasOwnProperty(prop)) {
          return contact[prop];
        } else {
          return "No such property";
        }
      }
    }

    return "No such contact";
  }

  expect(lookUpProfile("Akira", "likes")).toEqual([
    "Pizza",
    "Coding",
    "Brownie Points",
  ]);
  expect(lookUpProfile("FakeGuy", "likes")).toEqual("No such contact");
  expect(lookUpProfile("Akira", "loves_Putin")).toEqual("No such property");
});

test("get every 3rd element", () => {
  const f = (arr) => {
    const result = [];
    if (arr.length < 3) return result;

    for (let i = 2; i < arr.length; i += 3) {
      result.push(arr[i]);
    }
    return result;
  };

  expect(f([1, 2])).toEqual([]);
  expect(f([1, 2, 3])).toEqual([3]);
  expect(f([1, 2, 3, 4])).toEqual([3]);
  expect(f([1, 2, 3, 4, 5])).toEqual([3]);
  expect(f([1, 2, 3, 4, 5, 6])).toEqual([3, 6]);
});

test("cost of the order", () => {
  const fullPrice = 100;
  const discountPercent = 10;

  const f = (itemCount) => {
    // Count number of discounted and full price items
    let numberOfDiscountedItems = 10 * Math.floor(itemCount / 10);
    let numberOfFullPriceItems = itemCount - numberOfDiscountedItems;

    // Count price of discount
    let priceWithDiscount = fullPrice * (1 - discountPercent / 100);

    // Count the total cost for each item group
    let totalCostOfDiscountedItems =
      priceWithDiscount * numberOfDiscountedItems;
    let totalCostOfFullPriceItems = numberOfFullPriceItems * fullPrice;

    return totalCostOfDiscountedItems + totalCostOfFullPriceItems;
  };

  expect(f(1)).toEqual(100);
  expect(f(9)).toEqual(900);
  expect(f(10)).toEqual(900);
  expect(f(19)).toEqual(1800);
  expect(f(20)).toEqual(1800);
  expect(f(21)).toEqual(1900);
});

test("recursive sum of first n array elements", () => {
  //[1,2,3,4,5,6], 4
  const f = (arr, n) => {
    // Base case
    if (n == 0) return 0;
    if (n == 1) return arr[0];

    // Recurive case -> n >= 2
    return arr[n - 1] + f(arr, n - 1);
  };

  expect(f([1], 1)).toEqual(1);
  expect(f([1, 2, 3, 4, 5], 3)).toEqual(6);
  expect(f([1, 2, 3, 4, 5], 5)).toEqual(15);
});

test("concat array or array element to existing array", () => {
  const f = (arr, toAdd) => {
    let clone = [].concat(arr);

    if (Array.isArray(toAdd)) return clone.concat(toAdd);

    clone.push(toAdd);
    return clone;
  };

  expect(f([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
  expect(f([1, 2, 3], [4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test("count letters a in a string", () => {
  const f = (str) => {
    const lowercase = str.toLowerCase();

    let aCount = 0;
    for (let char of lowercase) {
      if (char === "a") {
        aCount++;
      }
    }

    return aCount;
  };

  expect(f("a")).toEqual(1);
  expect(f("aa")).toEqual(2);
  expect(f("ab")).toEqual(1);
  expect(f("this is fine")).toEqual(0);
  expect(f("my name is Ann")).toEqual(2);
});
