// Summary: JS = Variables + Loops + Conditionals + Functions + (Classes)

/*
     Remember:
     - Multiple ways to create variables and objects -> var, let, const
     - Multiple ways to create functions -> ordinary functions & arrow functions
     - Multiple ways to create loops -> for loop(different kinds), while, do-while
     - Multiple ways to create conditionals -> if-elseif-else, switch
 */

// Key aspect one: functions !
function isEven(number) {
    return number % 2 === 0;
}

function checkEvenOdd(numbers) {
    // Key aspect two: loops !
    for (let i = 0; i < numbers.length; i++) {
        // Key aspect three: conditionals !
        if (isEven(numbers[i])) {
            console.log(numbers[i] + ' is even');
        } else {
            console.log(numbers[i] + ' is odd');
        }
    }
}

// Key aspect 4: variable declaration
const numbersArray = [1, 2, 3, 4, 5];
checkEvenOdd(numbersArray);

// Key aspect 5: classes

// Can define a class
class Car {
    constructor(name) {
        this.name = name;
    }

    drive() {
        console.log('Driving ' + this.name);
    }
}

// Can use a class to create objects
const car1 = new Car('BMW');

//Classes exist just to allow us to efficiently create objects
const car1FromObject = {
    name: 'BMW',
    drive: function () {
        console.log('Driving ' + this.name);
    }
}

car1.drive();
const car2FromObject = {
    name: 'Mercedes',
    drive: function () {
        console.log('Driving ' + this.name);
    }
}

const car2 = new Car('Mercedes');
car2.drive()


