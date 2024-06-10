/* 1. Write a function called "findMax" that takes an array of numbers as its parameter. The function should use a for...of loop
 to find the largest number in the array and return that number.

Here's an example of what the function should do:

findMax([1, 5, 10, 3]); // 10
findMax([6, 2, 8, 4, 9]); // 9
 */

function findMax(numbers){
    let max = numbers[0];
    for (let number of numbers) {
        if (number > max){
            max = number;
        }
    }
    return max;
}

console.log(findMax([1, 5, 10, 3]));
console.log(findMax([6, 2, 8, 4, 9]))

/* 2 . Write a function called sumObjectValues that takes an object with numeric values as its parameter. 
The function should use object. values to extract an array of the values from the object, 
and then use a for...of loop to iterate over the array and calculate the sum of all the values.

Here's an example of what the function should do:

let obj = { a: 1, b: 2, c: 3 };
sumObjectValues(obj); // 6
let obj2 = { x: 10, y: 20, z: 30 };

sumObjectValues(obj2); // 60 */

function sumObjectValues(obj){
    let values = Object.values(obj);
    let sum = 0;
    
    for(let value of values){
        sum += value;
    }
    return sum;
}

let obj = {a: 1, b: 2, c: 3};
console.log(sumObjectValues(obj));

let obj2 = { x: 10, y: 20, z: 30}
console.log(sumObjectValues(obj2));












