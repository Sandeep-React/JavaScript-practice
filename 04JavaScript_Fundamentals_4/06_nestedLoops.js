// Looping backwards and nesting of loop

// Looping backward in a array

const myArray = [ 10, 48, 56, 21, 19];

// console.log(myArray.length)

for(let i = myArray.length-1; i >=0; i--){
    // console.log(myArray[i]) // prints the reverse array elements
}


// calculate the factorial

let fact = 1;
for(let i = 5; i > 0; i--){
    fact = fact * i
}
// console.log(fact) // 120

// nested for loop

let arr = [[1, 2], [3,4], [5,6]]

for(let i = 0; i <= arr.length-1; i++){
    for(let j = 0; j < 2; j++){
        console.log(arr[i][j])
    }
}


const courses = ["Javascript"];
for(let x = 0; x < courses.length; x++) {
       console.log(` I am the Outer loop -  ${courses[x]}`);
    for(let y = 0; y < courses[x].length; y++) {
          console.log(` I am the Inner loop - ${courses[x][y]}`);
       }
  }