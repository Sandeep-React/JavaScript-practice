const movements = [200, -450, 400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce(function(acc, mov, index, array){
    console.log((`Iteration no : ${index + 1}: Acc value is ${acc}`))
    return acc + mov 

},0);
console.log(balance)

// Implement the same using forOf 

let balance2 = 0;
for(const mov of movements){
    balance2 += mov

}

console.log(balance2);

//Find the max value

const max = movements.reduce((acc,mov)=>{
    if(acc > mov) return acc;
    else return mov
},movements[0]);

console.log(max)