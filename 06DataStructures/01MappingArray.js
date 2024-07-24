// Array map method

let arr = [1, 10, 33, 22, 34];
let arr2 = arr.map(function(el){
    return el*2;
})

console.log(arr2)

// converting from one currency to another currency 
const movements = [200, -450, 400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;;

// Using normal function
// const movementsUsd = movements.map(function(mov){
//     return mov * euroToUsd
// })

//Using arrow function

// const movementsUsd = movements.map((mov) =>{
//     return mov * euroToUsd
// })

//with Arrow shorthand
const movementsUsd = movements.map(mov => mov * euroToUsd)

console.log(movements)
console.log(movementsUsd)


// Using forOf loop

const movementsUsdof =[];
for(const mov of movements){
    movementsUsdof.push(mov * euroToUsd)
}

console.log(movementsUsdof)


const movementDescription = movements.map((mov,i) => {
//     if(mov > 0){
//         return `${i+1} Transaction : Money deposited : ${mov}`
//     }else{
//         return `${i+1} Transaction : Money Withdrew : ${mov}`
//     }
// })

return `${i+1} Transaction : Money ${mov > 0 ? 'deposited': 'Withdrew'}`
})
console.log(movementDescription)