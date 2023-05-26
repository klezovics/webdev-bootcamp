Prototypal inheritance is a fundamental concept in JavaScript that allows objects to inherit properties and methods from other objects. It forms the basis of JavaScript's object-oriented programming paradigm. Here's a brief summary of prototypal inheritance in JavaScript along with some code examples to illustrate the concepts:

1. Prototype Chain:

   - Each object in JavaScript has a prototype, which is another object from which it inherits properties and methods.
   - Objects form a chain-like structure called the prototype chain, where an object's prototype is linked to its parent prototype, forming a hierarchy.
   - The prototype chain allows objects to access properties and methods defined in their prototype and higher up in the chain.

2. Creating Objects with Prototypes:

   - You can create objects with a specific prototype using `Object.create()` or by setting the `__proto__` property.
   - Example:
     ```javascript
     const parent = {
       greet() {
         console.log("Hello!");
       },
     };
     const child = Object.create(parent);
     child.greet(); // Output: Hello!
     ```

3. Constructor Functions and Prototypes:

   - Constructor functions are used to create objects with a shared prototype.
   - Properties and methods defined in the constructor's prototype are shared by all instances created by that constructor.
   - Example:
     ```javascript
     function Person(name) {
       this.name = name;
     }
     Person.prototype.greet = function () {
       console.log(`Hello, my name is ${this.name}!`);
     };
     const person1 = new Person("Alice");
     const person2 = new Person("Bob");
     person1.greet(); // Output: Hello, my name is Alice!
     person2.greet(); // Output: Hello, my name is Bob!
     ```

4. Inheritance and Object Extensions:

   - Objects can inherit from other objects using `Object.create()` or by extending constructor prototypes.
   - Extending an object's prototype allows it to inherit properties and methods from another object or constructor.
   - Example:
     ```javascript
     function Teacher(name, subject) {
       Person.call(this, name);
       this.subject = subject;
     }
     Teacher.prototype = Object.create(Person.prototype);
     Teacher.prototype.teach = function () {
       console.log(`${this.name} teaches ${this.subject}.`);
     };
     const teacher = new Teacher("Carol", "Math");
     teacher.greet(); // Output: Hello, my name is Carol!
     teacher.teach(); // Output: Carol teaches Math.
     ```

5. Object Property Lookup:
   - When accessing a property or invoking a method on an object, JavaScript looks for it first in the object itself, then in its prototype, and continues up the prototype chain until the property is found or the chain ends.
   - Example:
     ```javascript
     const obj = { a: 1 };
     console.log(obj.a); // Output: 1
     console.log(obj.toString()); // Output: [object Object]
     ```

Prototypal inheritance is a powerful feature in JavaScript that allows for code reusability and object composition. It forms the basis for object-oriented patterns and provides flexibility in designing complex software systems.
