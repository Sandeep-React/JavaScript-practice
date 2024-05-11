// function: block oof code, which get executed when it's called.
// calling a function is called a Function invocation

//basic function
function fun1(){
    console.log("I'm function declaration")
}

fun1()

//function expression

const fun2 = function(){
    console.log("function expression")
}

fun2()

// arrow function / fat arrow

const fun3 = () => {
    console.log("fat arrow function")
}

fun3()