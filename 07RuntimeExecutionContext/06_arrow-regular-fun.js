// Difference between regular function and arrow function 


// Regular function
/* function regularFun(){
    console.log("Regular function")
}
regularFun() */



// function in java are first class 
const myFun = function(){
    console.log("Function as a variable")
} 

myFun()

// Arrow function or fat arrow function

const myArrow = () =>{
    console.log("This is arrow function | Fat arrow function")
}
myArrow()


// Hoisting 

// Only regular function supports hoisting

regularFun()
function regularFun(){
    console.log("Regular function")
}


// this keyword
// this keyword wont be working in arrow function and function as a variable

