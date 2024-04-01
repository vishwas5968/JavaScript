//Apply
function greet(name,age) {
        return `Hello, ${name}! My name is ${this.name}, age is ${age}`;
 }
    
const person = { name: 'Alice' };
    
console.log(greet.apply(person, ['Bob',25])); // Output: Hello, Bob! My name is Alice.


function greet(name,age) {
    return `Hello, ${name}! My name is ${this.name}, age is ${age}`;
}

const person2 = { name: 'Alice' };
const boundGreet = greet.bind(person2, 'Bob', 25);

console.log(boundGreet()); // Output: Hello, Bob! My name is Alice.


function greet(name,age) {
    return `Hello, ${name}! My name is ${this.name}, age is ${age}`;
}
const person3 = { name: 'Alice' };

console.log(greet.call(person3, 'Bob',25)); // Output: Hello, Bob! My name is Alice.
