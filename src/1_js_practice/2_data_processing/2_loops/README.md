# AK Loop intro

Loop = Repeat a certain action multiple times
Specify loop = Specify action + number of times to repeat
Loop anatomy = Body + Head -> Body(what to do) + Head(how many times to do it)

Specify action -> simple -> just define what you want in the body of the loop
Specify number of times to repeat -> either a simple count or until a condition is met

# Basic Loops

1. **For Loop**: The `for` loop is commonly used when you know the number of iterations in advance. It consists of three
   parts: initialization, condition, and increment/decrement.

   ```javascript
   for (initialization; condition; increment / decrement) {
     // Code to be executed in each iteration
   }
   ```

   Example:

   ```javascript
   for (let i = 0; i < 5; i++) {
     console.log(i);
   }
   ```

   In the above example, the loop initializes `i` to `0`, executes the code block as long as `i` is less than `5`, and
   increments `i` by `1` in each iteration.

2. **While Loop**: The `while` loop repeatedly executes a block of code as long as a specified condition is `true`.

   ```javascript
   while (condition) {
     // Code to be executed in each iteration
   }
   ```

   Example:

   ```javascript
   let i = 0;
   while (i < 5) {
     console.log(i);
     i++;
   }
   ```

   The above code will print the numbers `0` to `4` because the loop continues as long as `i` is less than `5`.

3. **Do...While Loop**: The `do...while` loop is similar to the `while` loop but checks the condition after executing
   the code block, ensuring that the block is executed at least once.

   ```javascript
   do {
     // Code to be executed in each iteration
   } while (condition);
   ```

   Example:

   ```javascript
   let i = 0;
   do {
     console.log(i);
     i++;
   } while (i < 5);
   ```

   The above code will also print the numbers `0` to `4`, but the code block is executed at least once, even if the
   condition is initially `false`.

Loops are powerful tools for automating repetitive tasks and iterating over collections or arrays. They help streamline
your code and make it more efficient. When using loops, be cautious about creating infinite loops by ensuring that the
condition eventually becomes `false` or that there is a way to break out of the loop using control statements
like `break` or `return`.

# Advanced loops

Certainly! Here are code examples for using `for...in` and `for...of` loops in JavaScript:

1. `for...in` loop:
   The `for...in` loop iterates over the enumerable properties of an object. It is used to iterate over keys or property
   names.

```javascript
const obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
  console.log(key); // Output: a, b, c
  console.log(obj[key]); // Output: 1, 2, 3
}
```

In this example, the `for...in` loop iterates over the keys ("a", "b", "c") of the `obj` object and logs each key and
its corresponding value to the console.

2. `for...of` loop:
   The `for...of` loop is used to iterate over iterable objects, such as arrays, strings, or collections. It provides a
   simpler and more concise syntax compared to traditional `for` loops.

```javascript
const arr = [1, 2, 3, 4, 5];

for (let value of arr) {
  console.log(value); // Output: 1, 2, 3, 4, 5
}
```

In this example, the `for...of` loop iterates over each value in the `arr` array and logs it to the console.

Here's another example using a string:

```javascript
const str = "Hello";

for (let char of str) {
  console.log(char); // Output: H, e, l, l, o
}
```

The `for...of` loop iterates over each character in the `str` string and logs it to the console.

The `for...in` loop is used for iterating over object properties, while the `for...of` loop is used for iterating over
iterable values, such as arrays, strings, and collections. These loops provide convenient ways to iterate and work with
the elements of an object or iterable in JavaScript.

# Break and continue

Certainly! Here's an expanded explanation with code examples:

- `break` statement:
  The `break` statement is used to exit a loop prematurely. It terminates the loop and resumes execution at the next
  statement after the loop. Here's an example that uses `break` in a `for` loop:

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // Terminate the loop when i equals 3
  }
  console.log(i);
}
```

Output:

```
1
2
```

In this example, the loop starts with `i` equal to 1 and increments by 1 on each iteration. When `i` becomes 3,
the `break` statement is encountered, and the loop terminates immediately. Therefore, only the numbers 1 and 2 are
printed.

- `continue` statement:
  The `continue` statement is used to skip the current iteration of a loop and proceed to the next iteration. It allows
  you to bypass a part of the loop's code based on a specific condition. Here's an example using `continue` in a `while`
  loop:

```javascript
let i = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue; // Skip the current iteration when i equals 3
  }
  console.log(i);
}
```

Output:

```
1
2
4
5
```

In this example, the loop starts with `i` equal to 0. On each iteration, `i` is incremented by 1. When `i` becomes 3,
the `continue` statement is encountered, and the code skips the remaining part of the loop for that iteration. As a
result, the number 3 is skipped in the output, and the loop continues until `i` reaches 5.

These examples demonstrate how `break` and `continue` statements can alter the flow of execution within loops, providing
control over the loop's behavior.

# Labeled statements

In JavaScript, labeled statements provide a way to associate a label with a specific statement. This label can be used
to control the flow of execution within nested loops or to provide a target for the `break` and `continue` statements.

Here's a brief summary of labeled statements:

- Labeled statements are created by placing an identifier (label) followed by a colon (`:`) before the targeted
  statement.
- The label can be any valid JavaScript identifier.
- Labeled statements are often used with nested loops to provide a target for `break` and `continue` statements that
  need to affect an outer loop.
- The `break` statement, when used with a label, terminates the execution of the labeled statement and transfers control
  to the next statement after the labeled statement.
- The `continue` statement, when used with a label, skips the remaining part of the labeled statement and proceeds to
  the next iteration of the labeled statement.

Here's an example that demonstrates the usage of a labeled statement:

```javascript
outerLoop: for (let i = 1; i <= 3; i++) {
  innerLoop: for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      continue outerLoop; // Skips to the next iteration of the outer loop
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}
```

Output:

```
i: 1, j: 1
i: 2, j: 1
i: 3, j: 1
```

In this example, the `outerLoop` label is associated with the outer `for` loop, while the `innerLoop` label is
associated with the inner `for` loop. When `j` is equal to 2, the `continue outerLoop` statement is encountered, causing
the inner loop to skip to the next iteration of the outer loop. As a result, the second iteration of the inner loop is
bypassed, and the output shows only the iterations where `j` is 1.

Labeled statements provide a way to control the flow of execution in complex loop structures, allowing you to target
specific loops with `break` and `continue` statements.
