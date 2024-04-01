let arr = [21, 5, 6, 2, 1]
let str="Hello World"
// console.log(str.split(" "))
let bag=[]

let a=Array.from(str)
// console.log(arr)
// console.log(a.includes("W"))
// console.log(a.includes("W",6))
// console.log(a.join("*"))
console.log(a.toString())
// console.log(arr.slice(2,4))
// console.log(str.slice(2,8))
// console.log(arr)
// console.log(arr.splice(2,1,5,7,9))
// console.log("new array")
// console.log(arr)

//!arr.forEach(callBackFunction(val,index,array))
 arr.forEach((e, i) => {  //?does not return new array
    console.log(e, i)
})


//!arr.map(callBackFunction(val,index,array))
//  let newArr = arr.map((val) => {  //?does return new array
//     return val + 10
// })
// console.log(newArr)

//!arr.filter(callBackFunction(val,index,array))
//  let newArr2 = arr.filter((val) => {  //?does return new array
//     return val % 2 === 0
// })
// console.log(newArr2)

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