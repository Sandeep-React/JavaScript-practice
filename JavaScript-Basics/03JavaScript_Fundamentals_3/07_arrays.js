// Arrays: Collection of data, can be of different types also
// Arrays are dynamic in length, Object, mutable
// Different ways to create an array

// 1.
const myArray = [12, 56, "12","JavaScript", true, null, undefined]
console.log(myArray)

// arrays are mutable -- we can change the values

myArray[1]= 90
console.log(myArray) // [ 12, 90, '12', 'JavaScript', true, null, undefined ]

// 2.

const myArrayTwo = []
myArrayTwo[1] = 123
myArrayTwo[2] = "JavaScript"

console.log(myArrayTwo)

// 3. using constructor

const myArrayThree = new Array(45, 23 ,"javaScript", true)

console.log(myArrayThree)


// Datatype of an array is an object
console.log(typeof myArrayThree)

let array = [false, 71, 1.0, undefined, 'Css', 'Html']
   console.log(typeof(array[3]));

// We can access the value using index. index starts from 0

console.log(myArray[3])// javascript
console.log(myArray[13])// undefined