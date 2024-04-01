function greet(name,age) {
    return `Hello, ${name}! My name is ${this.name}, age is ${age}`;
}

const person = { name: 'Alice' };
const boundGreet = greet.bind(person, 'Bob', 25);

console.log(boundGreet()); // Output: Hello, Bob! My name is Alice.

// function greet(name,age) {
//     return `Hello, ${name}! My name is ${this.name}, age is ${age}`;
// }

// const person = { name: 'Alice' };

// console.log(greet.apply(person, ['Bob',25])); // Output: Hello, Bob! My name is Alice.

// function greet(name) {
//     return `Hello, ${name}! My name is ${this.name}.`;
// }

// const person = { name: 'Alice' };

// console.log(greet.call(person, 'Bob')); // Output: Hello, Bob! My name is Alice.
// console.log("5" + + 2)
// let str = "371"
// let rev = 0
// for (let i = 0; i < str.length; i++){
//     rev=(str[i]**3)+rev
// }
// console.log(rev)