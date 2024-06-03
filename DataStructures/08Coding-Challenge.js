// TODO:
/* 1. Write a function called "getFirstAndLast" that takes an array of numbers as its parameter. 
The function should return an object that has two properties: first and last.
The first property should be the first number in the array, and the last property should be the last number in the array.

However, you can only use array destructuring to accomplish this task.

Here's an example of what the function should do:

getFirstAndLast([1, 2, 3, 4, 5]); // { first: 1, last: 5 }
getFirstAndLast([10, 20, 30, 40]); // { first: 10, last: 40 } */

function getFirstAndLast(arr){

    const [first, ...rest] = arr;
    const last = rest[rest.length-1];

    return {
        first: first,
        last: last
    };

}

 // { first: 1, last: 5 }
 // { first: 10, last: 40 }

console.log(getFirstAndLast([1, 2, 3, 4, 5]))
console.log(getFirstAndLast([10, 20, 30, 40]))

// TODO:
/* 2. Write a function called "mergeArrays" that takes two arrays as its parameters. 
The function should merge the two arrays into a single array and return the merged array.
However, you can only use array destructuring to accomplish this task.

Here's an example of what the function should do:

mergeArrays([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]
mergeArrays(['apple', 'banana'], ['orange', 'grape']); // ['apple', 'banana', 'orange', 'grape'] */

function mergeArrays(arr1, arr2){

    return {
        mergedArray: [...arr1, ...arr2] 
    }
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]))
console.log(mergeArrays(['apple', 'banana'], ['orange', 'grape']))

// TODO:
/* 3. Write a function called "addElementsToArray" that takes an array and a variable number of additional
elements as its parameters. The function should add the additional elements to the end of the original array 
and return the modified array.

However, you must use array destructuring to accomplish this task.

Here's an example of what the function should do:

let arr = [1, 2, 3];
addElementsToArray(arr, 4, 5, 6); // arr should now be [1, 2, 3, 4, 5, 6]
 
let arr2 = ['apple', 'banana'];
addElementsToArray(arr2, 'orange', 'grape'); // arr2 should now be ['apple', 'banana', 'orange', 'grape']  */

function addElementsToArray(arr, ...elements){
    const newArray = [...arr, ...elements];

    arr.length = 0

    arr.push(...newArray);

    return arr;
}

let originalArray = [1, 2, 3];
console.log(addElementsToArray(originalArray, 4, 5, 6));

let originalArray2=['apple', 'banana'];
console.log(addElementsToArray(originalArray2, 'orange', 'grape'));


// :TODO:

/* 4. Write a function called "getPersonInfo" that takes an object representing a person as its parameter. 
The person object should have the following properties:

name: a string representing the person's name
age: a number representing the person's age
city: a string representing the person's city of residence
country: a string representing the person's country of residence

The getPersonInfo function should return a string that combines the person's name, age, and location into a single sentence.
However, you must use object destructuring to extract the necessary properties from the person object.

Here's an example of what the function should do:

let person = { name: 'John Doe', age: 30, city: 'New York', country: 'USA' };
getPersonInfo(person); // "John Doe is 30 years old and lives in New York, USA."
 */

function getPersonInfo(person){
    const { name, age, city, country} = person

    return `${name} is ${age} years old and lives in ${city}, ${country}`;
    
}

let person = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    country: 'USA'
}

let personInfo = getPersonInfo(person)
console.log(personInfo)