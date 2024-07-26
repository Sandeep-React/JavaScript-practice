console.log(23 === 23.0)

// All the numbers are treated as Binary

console.log(0.1 +0.2)

console.log(0.1 + 0.2 === 0.3)

console.log("This is a string")
console.log(Number(23))
console.log(+'23') // + operator does the work of a Number

// parsing 

console.log(Number.parseInt('25px',10))
console.log(Number.parseInt('e89,10'))


// 2.5rem

console.log(Number.parseInt('     2.5rem    '))
console.log(Number.parseFloat('  2.5rem    '))

//Check if value is NaN
console.log(Number.isNaN(20))
console.log(Number.isNaN('20'))
console.log(Number.isNaN(+'20x'))

console.log(Number.isNaN(23/0))

console.log(Number.isFinite(20))
console.log(Number.isFinite('20'))
console.log(Number.isFinite(+'20x'))

console.log(Number.isFinite(23/0))

console.log(Number.isInteger('20'))
console.log(Number.isInteger(+'20x'))
console.log(Number.isInteger(20))
console.log(Number.isInteger(23/0))
