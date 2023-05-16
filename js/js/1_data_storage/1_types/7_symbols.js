/*

 Why use symbols? -> https://youtu.be/4J5hnOCj69w

 Yes, in JavaScript, object keys are typically strings. When you define a property on an object using the dot notation (`object.property`) or bracket notation (`object['property']`), the key is implicitly converted to a string.

While strings are the most common and widely used keys for object properties, symbols provide some distinct advantages when used as object keys:

1. **Uniqueness**: Symbols are guaranteed to be unique. Each symbol created with `Symbol()` or `Symbol.for()` is unique and will not clash with other keys, including string keys.
2. **Avoiding naming conflicts**: Since symbols are unique, they can be particularly useful for avoiding naming conflicts, especially when working with libraries, frameworks, or multiple modules where different code might be using the same property name.
3. **Privacy and encapsulation**: Symbols can be used to define private or internal properties. Since symbols are not enumerable by default, they won't appear in iterations or by using `Object.keys()`, helping to hide implementation details and prevent unintended access or modification.
4. **Extensibility**: Symbols allow you to add additional functionality or metadata to objects without modifying their existing structure. You can use symbols as special markers or flags to represent specific behaviors or features.

However, it's important to note that using symbols as object keys also has some trade-offs:

- Symbols are not accessible through iteration or common object traversal methods unless you specifically access them using their symbol reference.
- Symbols are not automatically serialized to JSON. When you convert an object with symbol keys to JSON using `JSON.stringify()`, the symbols will be omitted. This can be both an advantage and a limitation depending on the use case.

In summary, while strings are typically used as object keys in JavaScript, symbols offer unique and non-enumerable keys, making them useful for scenarios where uniqueness, privacy, or avoiding naming conflicts are important considerations.

 */



// Create a new symbol
const mySymbol = Symbol('My Symbol');

// Use the symbol as an object property key
const obj = {};
obj[mySymbol] = 'Value assigned to the symbol key';

// Access the value using the symbol as the key
console.log(obj[mySymbol]); // Output: Value assigned to the symbol key

// Check if a symbol exists as a property key
console.log(Symbol.keyFor(mySymbol)); // Output: undefined (Symbols created with Symbol() do not have a registered key)

// Create a global symbol that can be accessed across realms
const globalSymbol = Symbol.for('Global Symbol');
console.log(Symbol.keyFor(globalSymbol)); // Output: Global Symbol (Symbols created with Symbol.for() have a registered key)

// Use symbols to define unique property keys
const key1 = Symbol();
const key2 = Symbol();

const obj2 = {
    [key1]: 'Value 1',
    [key2]: 'Value 2'
};

console.log(obj2[key1]); // Output: Value 1
console.log(obj2[key2]); // Output: Value 2
