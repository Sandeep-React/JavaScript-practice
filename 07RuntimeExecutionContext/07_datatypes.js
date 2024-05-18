// Primitive and non primitive data types 

// Primitive : number, string, booleans, null, symbol, undefined
/* Basic they don't include methods and properties
They use stack to store */

let a = 12;
let b = a;
a = 13;
console.log(a, b)



// Non primitive  also called object based/ reference types: type: objects, functions date, array

/* They use heap to store */

const objOne ={
    name: "javaScript"
}
const objTwo = objOne
objOne.name = "Python"
console.log(objOne, objTwo)