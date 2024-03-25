//var-global scoped,can be reinitialized,can be redeclared
/* var a = 5
{
    var a=0
}
console.log(a) */


//let - block scoped,cannot be reinitialized,can be redeclared
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