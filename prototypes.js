// Prototypes are the mechanism by which JavaScript objects inherit features from one another


function Person(name, age) {
    this.name = name;
    this.age = age;
}


Person.prototype.introduce = function() {
    console.log("Hi, my name is " + this.name + " and I am " + this.age + " years old.");
};

var person1 = new Person("John", 30);
var person2 = new Person("Alice", 25);

console.log(person1.pr)
person1.introduce();
person2.introduce();

const employee={
    calculateTax(){
        console.log("Tax = 10000")
    }
}

const arun={
    salary:200000
}

arun.__proto__=employee
employee.calculateTax()
