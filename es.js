/*ES6*/

//Function parameter default value
function sum(a=10,b=20) {
    return a+b;
}
let add=sum()
console.log(add)

//Template literal
const str=`Sum is ${add}`
console.log(str)

//Destructuring assignment
const array=[1,2,3,4,5]
const[one,two,three]=array
const [first,,,,last]=array
console.log(one,two,three,first,last)

// Objects can also be destructurized and assigned
const student = {
    name: 'Vishwas',
    age: 23,
    city: 'Bengaluru'
}
const {name, age, city} = student
console.log(name)
console.log(age)
console.log(city)

//Spread operator
const array2=[0,...array,6,7]
console.log(array2)

/*ES7*/

// Array.prototype.includes()
const array3=[1,2,3,4,5]
console.log(array3.includes(2))

//Exponentiation Operator
console.log(2**2) //instead of math.pow()

/*ES8*/

//async, await

//Object.values()
/*
    const student = {
        name: 'Vishwas',
        age: 23,
        city: 'Bengaluru'
}*/
console.log(Object.values(student))
console.log(Object.keys(student))
console.log(Object.entries(student))
for (const [key, value] of Object.entries(student)) {
    console.log(`key: ${key}, value: ${value}`);
}

//String padStart() & padEnd()
console.log("100".padStart(6,"1234"))

//Rest
function rest(a,b,...c) {
    console.log(a, b, c)
}
rest(1,2,3,4,5)
const values = [19, 90, -2, 6, 25];
console.log( Math.max(...values) );

//Regexp

/*ES10*/

//Array.prototype.flat()
let arr=[1,2,[3,4,5]]
console.log(arr.flat())
let arr2=[7,8,arr]
console.log(arr2.flat())
console.log(arr2.flat(2))

//Array.prototype.flatMap()
let strings=["ABC","DE","FGHIJ"]
let maps = strings.map((value)=>{
    return value.split("")
});
console.log(maps)
let flatMaps = strings.flatMap(value=>{
     value.split("")
});
console.log(flatMaps)
