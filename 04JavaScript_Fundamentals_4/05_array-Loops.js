// Looping arrays , breaking and continuing

// =======Looping arrays =======================

const arr1 = [12, 64, 56, 34, 78, 678]

for (let index = 0; index < arr1.length; index++) {

    //   console.log(arr1[index])   
}

// for in ---> gives the index of the array
for(let a in arr1){
   // console.log(a) // prints the index
   // console.log(arr1) // prints the entire array the number of it's index times
}

// for of
for(let a of arr1){
    // console.log(a) // prints the values
    // console.log(arr1) // prints the entire array the number of it's index times
}

let myArray = ['Audi','Benz','Jaguar','Bugatti'];
let sortedArray = myArray.sort();
for(let car of myArray){ 
  console.log(car[0])
}

let myArray2 = [2, 'a', 3, 'b', 4];
for(let char of myArray2){
  console.log(myArray2.length-1);
  break;
}

//============ Beak and continue=================

// break  ----> stop and end 

const arr2 = [12, 64, 56, 34, 78, 678]

for(let i = 0; i < arr2.length; i++){
    
    if(arr2[i] == 78){
        break;
    }

   // console.log(arr2[i])
}

// continue ----> skip and continue with the rest

for(let i = 0; i < arr2.length; i++){
    
    if(arr2[i] == 78){
        continue;
    }

   console.log(arr2[i])
}


