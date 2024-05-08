/* 
Basic operators
----------------
Arithmetic ---> +, -, *, / , %, **
Assignment ---> =, +=, -+, /=, %=, *=
logical
comparison ----> ==, ===, !=, !==, >, <, >=, <=
bitwise ternary
*/


// Arithmetic
let a = 12
let b = 6

console.log(a + b); //Addition
console.log(a - b); //Subtraction
console.log(a * b); //Multiply
console.log(a / b); // Division (Quotient)
console.log(a % b); // Division (remainder)
console.log(a ** b); //power

//Assignment

let c = 12
let d = 56

c += 12 // a = a + 12

console.log(c);

d -= 10 // b = b - 10

console.log(d);


//comparison 

console.log(23 < 1);
console.log( 23 == 23); // true
//value 23 datatype number
console.log( 23 == "23");// true

// == value✅ datatypes❌

console.log(23 === "23");// false

// === value ✅ datatype ✅

TODO:
console.log( 23 > 1 == 45 > 23); 

/*

23 > 1 ----> true
45 > 23----> true

true == true ---> true

*/



