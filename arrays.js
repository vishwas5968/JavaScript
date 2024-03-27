let arr = [21, 5, 6, 2, 1]


//!arr.forEach(callBackFunction(val,index,array))
/* arr.forEach((e, i) => {  //?does not return new array
    console.log(e, i)
}) */


//!arr.map(callBackFunction(val,index,array))
/* let newArr = arr.map((val) => {  //?does return new array
    return val + 10
})
console.log(newArr) */

//!arr.filter(callBackFunction(val,index,array))
/* let newArr2 = arr.filter((val) => {  //?does return new array
    return val % 2 === 0
})
console.log(newArr2) */

/* let newArr = arr.filter((val) => {  
    return val % 2 === 0
}).map((val) => {  
    return val + 10
})
console.log(newArr) */

//!arr.reduce(callBackFunction(result, current ,index ,array))
/* let sum = arr.reduce((result, curr, i) => {
    return result + curr
}, 10) //?10 is the initial value that the sum begins with
console.log(sum)

let min = arr.reduce((result, curr, i) => {
    return result < curr ? result : curr
}, 10)
console.log(min) */