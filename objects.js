// let obj = {
//     prop1: 'value1',
//     prop2: 'value2',
//     prop3: 'value3'
// };

// Deleting prop2 from the object
/* delete obj.prop2;
obj.prop4 = "value4"

console.log(obj); */ // Output: { prop1: 'value1', prop3: 'value3' }

//How many ways we can create an object

//! 1)Object Literals
/* let obj = {
    Name: "Ram",
    ID: 123,
    Salary: "1cr"
} */
//Updating
/* obj.Name = "Krishna"
console.log(obj) */

//Insert
/* obj.city = "Banglore"
console.log(obj) */	//{Name: 'Krishna', ID: 123, Salary: '2cr', city: 'Banglore'}

//Deleting
/* delete obj.ID
console.log(obj) */	// {Name: 'Krishna', Salary: '2cr', city: 'Banglore'}

//! 2)Object.create()
/* let obj = Object.create({ Name: "Ram", ID: 1234, Salary: "10lpa" })
console.log(obj) */					//Output →

//! 3)new Object()
/* let obj = new Object({ Name: "Ram", ID: 1234, Salary: "10lpa" })
console.log(obj) */	// {Name: 'Ram', ID: 1234, Salary: '10lpa'}

//! 4)Object.assign()
/* let obj = Object.assign({ Name: "Ram", ID: 1234, Salary: "10lpa" })
console.log(obj)		// {Name: 'Ram', ID: 1234, Salary: '10lpa'}

let obj2 = Object.assign([], obj)	//Object → Array
console.log(obj2)		//[Name: 'Ram', ID: 123, Salary: '1cr']
for (let iterator in obj2) {
    console.log(obj2[iterator])
}

let array = [10, 20, 30]
let obj4 = Object.assign({}, array)	//Array → Object
console.log(obj4)		//{0: 10, 1: 20, 2: 30} */

// let obj = {
//     Name: "Ranjan",
//     Id: 421,
//     Sal: `100000`,
//     address: {
//         city: 'Banglore',
//         State: 'Karnataka'
//     }
// }
// console.log(obj)
// let obj2 = Object.assign({}, obj)
// console.log(obj2)
// console.log("**********************")
// obj2.address.city = 'Kolkata'
// console.log(obj2)
// console.log(obj)
// console.log(obj == obj2)