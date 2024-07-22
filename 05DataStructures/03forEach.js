	
// forEach can only be used with arrays, while for...of can be used with any iterable object.


let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (let movement of movements){
    if(movement > 0){
        console.log(`you deposited ${movement}`)
    }else{
        console.log(`You withdrew ${Math.abs(movement)}`)
    }
}

//To get the index 
for (let [i, movement] of movements.entries()){
    if(movement > 0){
        console.log(`Transaction ${i+1}: you deposited ${movement}`)
    }else{
        console.log(`Transaction ${i+1}: You withdrew ${Math.abs(movement)}`)
    }
}

// Using forEach()
console.log("------------forEach------------")
movements.forEach(function(movement){
    if(movement > 0){
        console.log(`you deposited ${movement}`)
    }else{
        console.log(`You withdrew ${Math.abs(movement)}`)
    }
})

//To get the index
console.log("------------forEach------------")
movements.forEach(function(movement, index, array){
    if(movement > 0){
        console.log(`Transaction ${index+1}: you deposited ${movement}`)
    }else{
        console.log(`Transaction ${index+1}: You withdrew ${Math.abs(movement)}`)
    }
})