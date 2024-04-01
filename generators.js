function* generator() {
    for (let i = 0; i < 6; i++) {
        yield i
    }
}

let num = generator()
// console.log(num.next())
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)

for (let i = 0; i < 6; i++) {
    console.log(num.next())
}

// for (let i of num) {
    // console.log(i)
    // console.log(num.next().value)  
// } 
