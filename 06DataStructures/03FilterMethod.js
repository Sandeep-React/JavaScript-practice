// filter method

const movements = [200, -450, 400, 3000, -650, -130, 70, 1300];

// using filter method to separate the deposit and withdrawal
const deposits = movements.filter((mov) => {
    return mov > 0
})

console.log(deposits);

// using forOf 
const depositFor = [];

for(const mov of movements){
    if(mov > 0){
        depositFor.push(mov)
    }
}

console.log(depositFor)

// withdrwal
const withdrawal = movements.filter((mov) =>{
        return mov < 0
})

console.log(withdrawal)

// using forOf loop

const withdrawalFor = [];

for(const mov of movements){
    if(mov < 0){
        withdrawalFor.push(mov)
    }
}

console.log(withdrawalFor)