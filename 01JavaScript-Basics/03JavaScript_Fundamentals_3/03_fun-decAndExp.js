// Function declaration

// function funDec(){
//     console.log("I'm function declaration")
// }

// funDec()


funDec() // in function declaration the function can be called before it's initialization 
function funDec(){
    console.log("I'm function declaration")
}


// Function Expression


const funExp = function() {
    console.log("I'm function Expression")
}

funExp()
// ========================================================================


// funExp() // ERROR It cannot be called before initialization 
// const funExp = function() {
//     console.log("I'm function Expression")
// }
