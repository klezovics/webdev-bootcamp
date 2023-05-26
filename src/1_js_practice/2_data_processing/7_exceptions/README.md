\*\*[Exception handling in JavaScript allows you to handle and recover from runtime errors or exceptional situations that may occur during the execution of your code. It helps prevent abrupt program termination and provides a way to gracefully handle errors.

JavaScript provides a `try-catch` statement for exception handling. Here's a summary of the process:

1. The code that might raise an exception is placed inside a `try` block.
2. If an exception occurs within the `try` block, the control immediately jumps to the `catch` block.
3. The `catch` block contains the code that handles the exception. It specifies the type of exception to catch and provides an identifier for accessing the error object.
4. After executing the `catch` block, the program continues with the code that follows.

Here's an example that demonstrates exception handling in JavaScript:

```javascript
try {
  // Code that might raise an exception
  const result = someUndefinedVariable * 2;
  console.log(result);
} catch (error) {
  // Code to handle the exception
  console.log("An error occurred:", error.message);
} finally {
  // Code that always executes, regardless of whether an exception occurred or not
  console.log("Exception handling complete.");
}
```

In this example, we attempt to multiply an undefined variable by 2, which will raise a `ReferenceError`. The `try` block wraps this code. If an exception occurs, the control immediately jumps to the `catch` block, where the error object is caught and handled. We log the error message to the console.

The `finally` block is optional and will execute regardless of whether an exception occurred or not. It allows you to specify code that must always be executed, such as resource cleanup or final actions.

It's also possible to have multiple `catch` blocks to handle different types of exceptions:

```javascript
try {
  // Code that might raise an exception
} catch (error1) {
  // Code to handle a specific type of exception
} catch (error2) {
  // Code to handle another type of exception
} finally {
  // Code that always executes
}
```

By using exception handling, you can catch and handle errors in a controlled manner, allowing your program to continue executing instead of abruptly terminating. It gives you the opportunity to log, handle, or recover from errors, enhancing the reliability and stability of your JavaScript code.

# Error object

Utilizing error objects
When a runtime error occurs, a new Error object is created and thrown. With this Error object, we can determine the type of the Error and handle it according to its type.

Types of Errors:
Besides error constructors, Javascript also has other core Error constructors.

AggregateError
EvalError
InternalError
RangeError
ReferenceError
SyntaxError

```javascript
try {
  willGiveErrorSometime();
} catch (error) {
  if (error instanceof RangeError) {
    rangeErrorHandler(error);
  } else if (error instanceof ReferenceError) {
    referenceErrorHandle(error);
  } else {
    errorHandler(error);
  }
}
```
