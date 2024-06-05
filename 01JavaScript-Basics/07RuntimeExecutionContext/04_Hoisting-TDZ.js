// Hoisting | TDZ

// Hoisting: variable and function in runtime moves to the top of the scope

// Hoisting
myFunction()
function myFunction(){
    console.log("JavaScript is awesome")
}

var a 
console.log(a) // undefine
a=12

// Many developer says that hoisting is only supported by var but that's wrong

// In fact var let and cont all three supports Hoisting 

// But in let and var concept of TZD comes up

// TZD -- Temporal Dead zone ---> Block of code where without initialization let and const variable or functions cannot be accessed

var x = 10;
function test()
{
    var x = 20;
}
 
test();
console.log(x);