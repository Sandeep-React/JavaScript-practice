/* 
Methods: concat | slice | splice | sort and reverse 

property: length 
*/

const arrA = [12, 23, 45, 78]
const arrB = [23,78,32,45,67,789,876,756]

// concat
let arr = arrA.concat(arrB)
console.log(arr) // [12, 23,  45, 78, 23, 78, 756]

arr = arrB.concat(arrA)
console.log(arr)// [23, 78, 756, 12, 23, 45,78]

// slice: performs only deletion of element
// Does not change the original array


console.log(arrA.slice(2)) // [45, 78]
console.log(arrA.slice(1,3)) //[ 23, 45 ]
//                     include, exclude



// ================splice=====================

// Adds , remove and changes the original array
// starts from the 1st element deletes the next two elements
arrB.splice(1,2)
console.log(arrB) // [ 23, 45, 67, 789, 876, 756 ]


// starting from the 1st element deletes the next two elements and adds 90,99
arrB.splice(1, 2, 90, 99)
console.log(arrB) // [ 23, 90, 99, 789, 876, 756 ]


arrB.splice(1, 2, 90, 992, 909, 101, 99)
console.log(arrB) // [ 23, 90, 992, 909,101, 99, 789, 876,756]

// =========== Sort===============

// arrB.sort
// console.log(arrB)

const myArray = ["a", "c", "b", "e", "d" ]
console.log(myArray.sort()) // [ 'a', 'b', 'c', 'd', 'e' ]

// reverse

const myAnother = ["a","c","d","e"] 
myAnother.reverse()
console.log(myAnother) // [ 'e', 'd', 'c', 'a' ]

//length

console.log(arrB.length) // 9
