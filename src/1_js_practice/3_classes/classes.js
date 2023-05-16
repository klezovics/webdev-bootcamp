// Here's an example of a class in JavaScript.
class Car {
    constructor(name) {
        this.name = name;
    }

    drive() {
        console.log(`Driving the ${this.name}`);
        // Additional logic for driving the car goes here
    }
}

// Example usage:
const myCar = new Car("Tesla");
myCar.drive(); // Output: Driving the Tesla

const otherCar = new Car("Toyota");
otherCar.drive(); // Output: Driving the Toyota


//Task 1: Create a simple counter class.
//The class should have the following methods: increment, decrement, get, and reset.