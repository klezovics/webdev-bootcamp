JavaScript hoisting is a mechanism that allows variables and function declarations to be moved to the top of their
respective scopes during the compilation phase. This means that you can use variables and call functions before they are
actually declared in the code.

There are two types of hoisting in JavaScript: hoisting of variable declarations and hoisting of function declarations.

1. Variable Hoisting:
   Variable declarations using `var` are hoisted to the top of their scope, but not their assignments. Here's an
   example:

```javascript
console.log(x); // Output: undefined
var x = 5;
```

In this example, even though the variable `x` is declared after the `console.log()` statement, it does not throw an
error. Instead, it is hoisted to the top of its scope, resulting in `undefined` being logged to the console. The
assignment `x = 5` is not hoisted, so the value is assigned when the code execution reaches that line.

2. Function Hoisting:
   Function declarations are fully hoisted, including both the function name and its implementation. Here's an example:

```javascript
sayHello(); // Output: Hello!
function sayHello() {
    console.log("Hello!");
}
```

In this example, the function `sayHello()` is called before it is declared in the code. However, due to hoisting, the
function declaration is moved to the top, allowing it to be called without any errors.

It's important to note that function expressions (such as using function expressions with `const` or `let`) are not
hoisted. Only function declarations are hoisted.

It's generally considered good practice to declare variables and functions before using them to avoid confusion and
potential bugs. Understanding hoisting can help in understanding the behavior of code, but it's recommended to write
clear and explicit code to avoid relying on hoisting.