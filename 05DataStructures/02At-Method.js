// At method -- the modern way of retrieving elements from an array or a string

let arr = [23, 14, 98];

console.log(arr[1]) //14

// using at() -----
console.log(arr.at(1)) //12


// To get the last element
console.log(arr[arr.length -1]) // 98
console.log(arr.at(-1)) //98
console.log(arr.slice(-1)[0])// 98


// using at method in strings
console.log('Sandeep'.at(0))
console.log('Sandeep'.at(-1))
