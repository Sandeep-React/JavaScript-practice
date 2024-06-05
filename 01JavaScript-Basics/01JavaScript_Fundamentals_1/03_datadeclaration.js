// Data declaration 
// var let and const


//a = "python";

var a = "JavaScript"
console.log(a);

// var -- variable 

var b = 12
console.log(b);
b = 56
console.log(b);

// const --- constant
const c = 78
// c = 90 //Error constant cannot be changed
console.log(78);

//let 

let d = 57;
console.log(d);
d = 45;
console.log(d);

/* let and const keyword introduced in ES6 (2015) 

-->var ----- global | allows re-initialization
let and const --> block | does not allows re-initialization 

*/

var x = 12;
var x = 22;
{
    console.log(x);
} 

let y = 12;
// let y = 22; // does not allows re-initialization
{
    console.log(x);
} 

let z = "animals are kind"

{
    let z = "fox is smart"
}

console.log(z); // cannot access the z inside the block

