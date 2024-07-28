// Maths and rounding

// Square root

console.log(Math.sqrt(25))
console.log(25 ** (1/2)) // it will also give square root

console.log(8 ** (1/3))

// Max & Min
console.log(Math.max(4, 12, 80, 53)) // 80
console.log(Math.max(4, 12, '80', 53)) //80
console.log(Math.max(4, 12, '80px', 53)) //NaN

console.log(Math.min(8, 19, 3, 90))

// PI
console.log(Math.PI)

console.log(Math.PI * Number.parseFloat('20px') ** 2)

// Random Numbers 

console.log(Math.random())
console.log(Math.trunc(Math.random() * 6) + 1)

const randomNum = (min, max) => 
    Math.trunc(Math.random() * (max-min) + 1)
    console.log(randomNum(10, 20))

// rounding

console.log(Math.round(23.3))
console.log(Math.round(23.9))
console.log(Math.round(23.2))

console.log(Math.ceil(23, 9))
console.log(Math.ceil(23, 3))

console.log(Math.floor(23.3))
console.log(Math.floor(23.9))

console.log(Math.trunc(23.9))
console.log(Math.trunc(45.9231232))

// Rounding decimals

console.log((2.7).toFixed(0))
console.log((2.7).toFixed(3))
console.log(+(2.3453).toFixed(2))