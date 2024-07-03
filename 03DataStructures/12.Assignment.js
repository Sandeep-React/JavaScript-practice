/* 
TODO:
Create a function, in which an Array of String is passed. Inside the function, create a new array from index 2 to 5. 
Now loop through the new array and store each item in a Set, and display it. 
After that add the index of all the items in the new Set and display the final Set.

*/

function processArray(arr){
    const newArray = arr.slice(2,6);

    const itemSet = new Set();
    newArray.forEach(item => itemSet.add(item));

    const finalSet = new Set(itemSet);
    newArray.forEach((item, index) => finalSet.add(index + 2));

    console.log("Final set with items and their original indices:", finalSet);
}

const exampleArray = ["a", "b", "c", "d", "e", "f", "g"];
processArray(exampleArray)


//Solutions

const setOps = arr => {
    console.log('Original Array -> ');
    console.log(arr);
    const slicedArr = arr.slice(2, 6);
    console.log('Sliced Array -> ');
    console.log(slicedArr);
    const mySet = new Set();
    for(let i=0; i<slicedArr.length; i++){
        mySet.add(slicedArr[i])
    }
    console.log("Set is -> ");
    console.log(mySet);
    for(let i=0; i<slicedArr.length; i++){
        mySet.add(i)
    }
    console.log("Final Set is -> ");
    console.log(mySet);
}

setOps(['Java', 'JavaScript', 'Cobol', 'Pascal', 'Rust', 'Flutter', 'Kotlin'])