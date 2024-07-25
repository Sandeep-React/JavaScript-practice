const movements = [200, -450, 400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

const totalDepositsUsd = movements
.filter((mov) =>{
    return mov > 0
})
.map((mov)=>{
    return mov * euroToUsd
})
.reduce((acc, mov) => {
    return acc + mov
},0)

console.log(totalDepositsUsd)

// using short hand arrow functions

const total_Deposits_Usd = movements

.filter(mov => mov > 0)
.map(mov =>mov * euroToUsd)
.reduce((acc,mov) => acc+mov, 0)

console.log(total_Deposits_Usd)