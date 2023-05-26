Its this course: https://egghead.io/courses/asynchronous-javascript-with-async-await

# Summary

- Async await is a way to write asynchronous code that looks synchronous
- The two keywords are async and await

## Await

- await can be used only in async functions, to avoid blocking the main thread
- await can only be applied to a promise
- you can apply it to a promise object directly or to a function that returns a promise
- await is a nicer way to write then() callbacks
- if promise is rejected await method throws an exception

## Async

- if you declare a function as async, it will return a promise
