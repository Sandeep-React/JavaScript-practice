//Simple Array Methods

let arr = ['a', 'b', 'c', 'd', 'e']

// slice
console.log(arr.slice(2)); // [ 'c', 'd', 'e' ]
console.log(arr) // Does not change the original array

console.log(arr.slice(1,4)) // [ 'b', 'c', 'd' ]
console.log(arr.slice(-2)) // [ 'd', 'e' ]
console.log(arr.slice(1,-2)) // [ 'b', 'c' ]
console.log(arr.slice())
// or
console.log([...arr]) // [ 'a', 'b', 'c', 'd', 'e' ]

// splice
// console.log(arr.splice(2)) // [ 'c', 'd', 'e' ]
// console.log(arr.splice(1,2))
console.log(arr) // change original array


// reverse
let arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse())
console.log(arr) //change original array



// concat
const letters = arr.concat(arr2)
console.log(letters);
//or
console.log([...arr, ...arr2]);


//join
console.log(letters.join("-"))
console.log(letters.join(" "))







// [ 'a', 'b', 'c', 'd', 'e' ]
// [ 'f', 'g', 'h', 'i', 'j' ]
// [ 'a', 'b', 'c', 'd', 'e' ]
// [
//   'a', 'b', 'c', 'd',
//   'e', 'f', 'g', 'h',
//   'i', 'j'
// ]
// [
//   'a', 'b', 'c', 'd',
//   'e', 'f', 'g', 'h',
//   'i', 'j'
// ]
// a-b-c-d-e-f-g-h-i-j
// a b c d e f g h i j