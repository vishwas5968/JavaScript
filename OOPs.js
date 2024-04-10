/*Polymorphism*/
/*class Animal {
    speak() {
        console.log('Animal speaks.');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Dog barks.');
    }
}

const animal = new Animal();
const dog = new Dog();

animal.speak(); // Output: Animal speaks.
dog.speak();    // Output: Dog barks.*/

/**********************************************************************************/

/*Inheritance*/
/*class Animal {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(`My name is ${this.name}.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}*/

/**********************************************************************************/

/*// Functional abstraction example
function createCounter() {
    let count = 0;

    function increment() {
        count++;
    }

    function getCount() {
        return count;
    }

    return { increment, getCount };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // Output: 1*/

// Using ES6 classes
class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    getInfo(){
        return this.#info()
    }

    #info(){
        return `${this.#name} ${this.#age}`
    }
}

const person = new Person('Alice', 30);
console.log(person.getName()); // Output: Alice
console.log(person.getAge());  // Output: 30
console.log(person.getName()); // Output: Bob
console.log(person.name)
console.log(person.getInfo())


// Using constructor functions
/*
function Person(name, age) {
    // Private variables
    let _name = name;
    let _age = age;

    // Public methods
    this.getName = function() {
        return _name;
    };

    this.getAge = function() {
        return _age;
    };

    this.changeName = function(newName) {
        _name = newName;
    };

    // Private method
    function increaseAge() {
        _age++;
    }
}

const person = new Person('Alice', 30);
console.log(person.getName()); // Output: Alice
console.log(person.getAge());  // Output: 30
person.changeName('Bob');
console.log(person.getName()); // Output: Bob*/
