const movements = [200, -450, 400, 3000, -650, -130, 70, 1300]
console.log(movements)
console.log(movements.includes(400))

// some -- any values satisfies that conditions

console.log(movements.some((mov)=>{
    return mov >5000
}))


// every -- all the value must be satisfies

console.log(movements.every((mov)=>{
    return mov >100
}))


// separate call back function

const deposit = mov => mov > 0
console.log(movements.some(deposit))
console.log(movements.every(deposit))
console.log(movements.filter(deposit))