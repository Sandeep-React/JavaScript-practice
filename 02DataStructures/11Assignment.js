/* Write a function in which we can send any number of elements using arguments. Except for the first three parameters, 
convert the rest to an array. Give the sum of the first three parameters and the minimum and maximum of the rest of the array. */

function processElements(a, b, c, ...rest){
    
    console.log(`The numbers are ${a}, ${b} and ${c}`);
    console.log('The array is -> ');
    console.log(rest);
    
    const sum = a + b + c;
    const min = Math.min(...rest);
    const max = Math.max(...rest);

    return{
        sum:sum,
        min:min,
        max: max
    };
}

console.log(processElements(1, 2, 3, 4, 5, 6, 7, 8, 9)); // { sum: 6, min: 4, max: 9 }
console.log(processElements(10, 20, 30, 5, 15, 25, 35)); // { sum: 60, min: 5, max: 35 }
console.log(processElements(3, 6, 9)); //{ sum: 18, min: Infinity, max: -Infinity } (when there are no rest elements)