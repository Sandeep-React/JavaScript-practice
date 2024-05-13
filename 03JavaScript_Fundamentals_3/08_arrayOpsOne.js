/* 
-> join
-> toString
-> pop
-> push
-> shift
-> unshift
*/

const arrStr = ["I", "Love", "JavaScript"]

// -> join: converts arrays to string

console.log(arrStr.join(" ")) // // I Love JavaScript
console.log(arrStr.join("")) // ILoveJavaScript
console.log(arrStr.join("-")) // I-Love-JavaScript



// -> toString -----> string

console.log(arrStr.toString()) // I,Love,JavaScript

// pop: deletes the last element from an array.

arrStr.pop()
// console.log(arrStr.pop())
console.log(arrStr) // [ 'I', 'Love' ]

// push: adds elements in the last

arrStr.push("python")
console.log(arrStr) //[ 'I', 'Love', 'python' ]

// shift: removes the first element

arrStr.shift()
console.log(arrStr) // [ 'Love', 'python' ]

// unshift: adds element to the start of an array

arrStr.unshift("We")
console.log(arrStr) // [ 'We', 'Love', 'python' ]
console.log(arrStr.join(" "))