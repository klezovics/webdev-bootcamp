Keyed collections in JavaScript refer to data structures that allow storing and retrieving values using keys or indices.
These collections provide efficient ways to work with data and enable various operations like adding, updating, and
removing elements.

There are several built-in keyed collections in JavaScript, including:

1. Map: A collection that stores key-value pairs where the keys can be of any type. It maintains the insertion order of
   the elements and allows efficient lookup and manipulation operations.

2. Set: A collection that stores unique values of any type. It does not allow duplicate values and provides methods for
   adding, deleting, and checking the presence of elements.

3. WeakMap: Similar to Map, but with some differences. It allows only objects as keys, and the references to the keys
   are weakly held, which means they can be garbage collected if there are no other references to them.

4. WeakSet: Similar to Set, but with the same differences as WeakMap. It allows only objects as values and holds weak
   references to the values.

Keyed collections provide powerful data structures to manage and manipulate data in JavaScript. They offer flexibility
and efficiency when working with key-value pairs or unique values, allowing you to solve a wide range of programming
problems effectively.

Certainly! Here's a summary of keyed collections in JavaScript with code examples:

1. Map:

   ```javascript
   const map = new Map();

   map.set("key1", "value1");
   map.set("key2", "value2");

   console.log(map.get("key1")); // Output: value1
   console.log(map.size); // Output: 2

   map.delete("key2");
   console.log(map.has("key2")); // Output: false
   ```

2. Set:

   ```javascript
   const set = new Set();

   set.add("value1");
   set.add("value2");
   set.add("value1"); // Duplicates are ignored

   console.log(set.size); // Output: 2
   console.log(set.has("value1")); // Output: true

   set.delete("value2");
   console.log(set.has("value2")); // Output: false
   ```

3. WeakMap:

   ```javascript
   const weakMap = new WeakMap();

   const key1 = { id: 1 };
   const key2 = { id: 2 };

   weakMap.set(key1, "value1");
   weakMap.set(key2, "value2");

   console.log(weakMap.get(key1)); // Output: value1
   console.log(weakMap.has(key2)); // Output: true

   weakMap.delete(key2);
   console.log(weakMap.has(key2)); // Output: false
   ```

4. WeakSet:

   ```javascript
   const weakSet = new WeakSet();

   const obj1 = { id: 1 };
   const obj2 = { id: 2 };

   weakSet.add(obj1);
   weakSet.add(obj2);

   console.log(weakSet.has(obj1)); // Output: true
   console.log(weakSet.has(obj2)); // Output: true

   weakSet.delete(obj2);
   console.log(weakSet.has(obj2)); // Output: false
   ```

These examples demonstrate the usage of different keyed collections in JavaScript. They allow you to store and
manipulate data efficiently using keys or unique values, providing powerful data structures for various programming
scenarios.
