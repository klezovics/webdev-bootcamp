Indexed collections in JavaScript refer to data structures that store and retrieve values using numerical indices or
positions. These collections provide efficient ways to access elements by their index and perform operations like
adding, updating, and removing elements.

# Indexed collections

## Arrays

The primary indexed collection in JavaScript is the Array. Here's a summary with a code example:

1. Array:
   ```javascript
   const array = [1, 2, 3, 4, 5];

   console.log(array[0]);   // Output: 1l
   console.log(array.length); // Output: 5

   array.push(6);           // Add an element at the end
   console.log(array);      // Output: [1, 2, 3, 4, 5, 6]

   array[1] = 10;           // Update an element at index 1
   console.log(array);      // Output: [1, 10, 3, 4, 5, 6]

   array.pop();             // Remove the last element
   console.log(array);      // Output: [1, 10, 3, 4, 5]
   ```

Arrays allow you to access elements using their numerical indices and provide methods for manipulation, such as adding
elements at the end with `push()`, updating elements using their index, and removing elements from the end with `pop()`.

Additionally, JavaScript provides other data structures with indexed access, such as typed arrays and strings. However,
arrays are the most commonly used indexed collection in JavaScript.

Indexed collections are versatile and widely used for various tasks, including storing collections of values, iterating
over elements, and performing operations based on their position within the collection.

## Typed Arrays

Typed Arrays in JavaScript are specialized array-like objects that provide a way to work with binary data in a more
efficient and structured manner. They are designed to store and manipulate data in a specific format, such as integers
or floating-point numbers, using a fixed memory layout.

Here's an overview of Typed Arrays along with some code examples:

1. Int8Array:
   ```javascript
   const int8Array = new Int8Array(4);  // Create an Int8Array with length 4

   int8Array[0] = 10;
   int8Array[1] = -5;
   int8Array[2] = 2;
   int8Array[3] = 0;

   console.log(int8Array);  // Output: Int8Array [10, -5, 2, 0]
   ```

2. Uint16Array:
   ```javascript
   const uint16Array = new Uint16Array([100, 200, 300]);  // Create a Uint16Array from an array

   console.log(uint16Array[0]);     // Output: 100
   console.log(uint16Array.length); // Output: 3
   ```

3. Float32Array:
   ```javascript
   const float32Array = new Float32Array([1.5, 2.7, 3.2]);  // Create a Float32Array from an array

   float32Array[1] = 4.1;

   console.log(float32Array);      // Output: Float32Array [1.5, 4.1, 3.2]
   ```

Typed Arrays provide a variety of typed array constructors, such as `Int8Array`, `Uint16Array`, `Float32Array`, and
more. They can be created with a fixed length or by converting existing data, like arrays or ArrayBuffer.

Using Typed Arrays, you can efficiently manipulate binary data, perform mathematical operations, and interface with
other APIs that expect data in specific formats, such as WebGL or Web Audio.

It's important to note that Typed Arrays have a fixed length and type, and the elements are stored in a contiguous block
of memory. This allows for efficient memory management and optimized operations on large datasets compared to
traditional JavaScript arrays.

Typed Arrays provide a powerful and performant way to work with binary data and are particularly useful in scenarios
that involve low-level manipulation or interfacing with external systems.