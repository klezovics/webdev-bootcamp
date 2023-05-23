// Prototypes = Mechanism which powers inheritance in JavaScript
// Protype = Object
// Prototype = Provides properties and methods to child objects
// Protypes are linked toget to form prototype chain by execution environment

const a = {}
const b = {foo: "bar"}

//Each object has prototype property associted with it.
console.log("a.__proto__:", a.__proto__)
console.log("a.prototype:", a.prototype)

//Shows the prototypes exist -> because they give us access to .toString() method
console.log("a.toString():", a.toString())

console.log("Object.getPrototypeOf(a):",Object.getPrototypeOf(a))
console.log("Object.getPrototypeOf(b):",Object.getPrototypeOf(b))


const myNewProtype = {
    toString: function() {
        return "I am a prototype";
    }
}

const myNewObject = Object.create(myNewProtype);

// When searching for a function/propery on an object, JS will first look for it on the object itself
// Then it starts to go down the prototype chain
console.log("newObject to string:",myNewObject.toString());

const f = function() {}

// For some reasons on objects you use .__proto__ and on functions you use .prototype
console.log("f.__proto__:", f.__proto__)
console.log("f.proto:", f.prototype)
