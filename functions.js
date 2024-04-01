//!normal function
/* function demo() {
    console.log("Named Function")
}
demo(); */


//!HOF, callback function
/* function mathOperations(a, b, x) {
    return x(a, b)					//2,4
}
let res = mathOperations(10, 20, function (a, b) {		//1
    return a + b;						//3
})
console.log(res) */

// let arr = [21, 5, 6, 2, 1]
// arr.forEach((e,i) => {
//     console.log(e , i)
// })

//!Arrow Function
/* let Triangle = (l, b) => {
    return l * b
}
console.log(Triangle(10, 20)) */

function add() {
    let counter=5
    return function plus() {
        console.log(counter += 1) ;
    }
    
}
let a = add()
a()