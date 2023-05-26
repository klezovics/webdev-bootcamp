// Here's an example of a class in JavaScript.
// Create the car blueprint

// Class = Name + Constructor + Fields + Methods

class Car {
  //manufacturing process!
  constructor(name) {
    this.name = name;
  }

  drive() {
    console.log(`Driving the ${this.name}`);
    // Additional logic for driving the car goes here
  }
}

// Example usage:
// Easy peasy car manufacturing
const myCar = new Car("Tesla");
myCar.drive(); // Output: Driving the Tesla

const otherCar = new Car("Toyota");
otherCar.drive(); // Output: Driving the Toyota

class NPrinter {
  constructor(n) {
    this.n = n;
  }

  print(str) {
    let result = "";
    for (let ii = 1; ii <= this.n; ii++) {
      result = result + str;
    }

    console.log("Result:", result);
  }
}

const n = new NPrinter(4);
n.print("acb");

//Task 1: Create a simple counter class.
//The class should have the following methods: increment, decrement, get, and reset.
