//var-global scoped, function scoped, can be reinitialized,can be redeclared
/* var a = 5
{
    var a=0
}
console.log(a) */


//let - block scoped,can be reinitialized,cannot be redeclared
/* let a = 5
 a = 5
{
    let a = 0
}
console.log(a) */

//const-block scoped,cannot be reinitialized,cannot be redeclared
/* const a = 5
//! a = 5 cannot be done
{
    const a = 0
}
console.log(a) */
function hello(name) {
    let username=name+" hello"
    return function () {
        console.log(username)
    }
}

let hello1 = hello("vishwas");
hello1()