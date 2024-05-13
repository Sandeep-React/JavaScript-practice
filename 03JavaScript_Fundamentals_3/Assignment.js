// Write a code in which you call an arrow function called arrayOps().
//  It will take two parameters.
//  Inside the function add the first argument passed to the start of the array.
//  And the second argument passed to the end of the array. 
// Console log the array both before the operations and after all, operations are done.


const arrayOps = (start, last) => {
    let myArray = [12, 13, 56, "a", "JavaScript"]
    console.log(myArray) // [ 12, 13, 56, 'a', 'JavaScript' ]
    myArray.unshift(start)
    myArray.push(last)
    console.log(myArray) // [ 1, 12, 13, 56, 'a', 'JavaScript', 'React' ]
    
}

arrayOps(1, "React")