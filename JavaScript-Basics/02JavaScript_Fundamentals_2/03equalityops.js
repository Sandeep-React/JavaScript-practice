//Equality operators == (loose equal to) and === (strict equal to)

console.log(1 == 1)     // true
console.log(1 == "1")   //true

// Coercion happens
// == checks the values only 

console.log(1 === 1) // true 
console.log(1 === "1") // false

// === checks values as well as datatypes
// does not allow coercion