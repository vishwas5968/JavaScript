// (async () => {
//     console.log('Hello I am an Immediately Invoked Function Expressions');
// })()//Arrow

( function () {
    console.log('Hello I am an Nameless Immediately Invoked Function Expressions');
})()//Nameless

// (function hello() {
//     console.log('Hello I am an Immediately Invoked Function Expressions');
// })
// ()//named

var a=(async function () {
    console.log('Hello I am an Immediately Invoked Function Expressions With return value');
    return "Hello";
})()//With return value