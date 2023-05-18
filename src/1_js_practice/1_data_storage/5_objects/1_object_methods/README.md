1. `Object.keys(obj)`: Returns an array containing all the enumerable property names of an object.
   ```javascript
   const obj = { a: 1, b: 2, c: 3 };
   const keys = Object.keys(obj);
   console.log(keys); // Output: ["a", "b", "c"]
   ```

2. `Object.values(obj)`: Returns an array containing all the enumerable property values of an object.
   ```javascript
   const obj = { a: 1, b: 2, c: 3 };
   const values = Object.values(obj);
   console.log(values); // Output: [1, 2, 3]
   ```

3. `Object.entries(obj)`: Returns an array containing arrays of key-value pairs for each enumerable property of an object.
   ```javascript
   const obj = { a: 1, b: 2, c: 3 };
   const entries = Object.entries(obj);
   console.log(entries); // Output: [["a", 1], ["b", 2], ["c", 3]]
   ```

4. `Object.assign(target, ...sources)`: Copies the values of all enumerable properties from one or more source objects to a target object.
   ```javascript
   const target = { a: 1 };
   const source = { b: 2 };
   const result = Object.assign(target, source);
   console.log(target); // Output: { a: 1, b: 2 }
   console.log(result); // Output: { a: 1, b: 2 }
   ```

5. `Object.getOwnPropertyNames(obj)`: Returns an array containing all the property names (including non-enumerable properties) of an object.
   ```javascript
   const obj = { a: 1, b: 2 };
   Object.defineProperty(obj, "c", {
     value: 3,
     enumerable: false
   });
   const propertyNames = Object.getOwnPropertyNames(obj);
   console.log(propertyNames); // Output: ["a", "b", "c"]
   ```

6. `obj.hasOwnProperty(prop)`: Returns a boolean indicating whether an object has a property with the specified name, ignoring the prototype chain.
   ```javascript
   const obj = { a: 1, b: 2 };
   console.log(obj.hasOwnProperty("a")); // Output: true
   console.log(obj.hasOwnProperty("toString")); // Output: false
   ```

7. `Object.create(proto[, propertiesObject])`: Creates a new object with the specified prototype object and optional additional properties.
   ```javascript
   const vehiclePrototype = {
     start() {
       console.log("Starting the vehicle...");
     },
     stop() {
       console.log("Stopping the vehicle...");
     }
   };

   const car = Object.create(vehiclePrototype, {
     drive: {
       value: function() {
         console.log("Driving the car...");
       }
     }
   });

   car.start(); // Output: Starting the vehicle...
   car.drive(); // Output: Driving the car...
   car.stop();  // Output: Stopping the vehicle...
   ```

These are just a few examples of useful methods for working with objects in JavaScript. They can help you manipulate, iterate over, and extract information from objects efficiently.