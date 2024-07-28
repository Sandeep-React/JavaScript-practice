// BigInt data types

// Biggest number JavaScript can hold

console.log(2 ** 53 - 1)
console.log(Number.MAX_SAFE_INTEGER)

console.log(2 ** 53  + 1)
console.log(2 ** 53  + 2)
console.log(2 ** 53  + 3)
console.log(2 ** 53  + 4)
console.log(2 ** 53  + 5)

console.log(6545444554564654546010992n) // BigInt Number

console.log(BigInt(65454445)) // BigInt Number


// Operations on BigInt 

console.log(3000n + 1000n);
console.log(23345678908756n * 1000n)

const huge = 456789765478667n
const num = 23;

// console.log(huge * num) // not allowed 

console.log(20n > 15)
console.log(20n === 20)

console.log(typeof 20n)
console.log(typeof 20)

console.log(20n == '20')

// Division

console.log(11n/2n)
console.log(11/3)





