//Scope and the scope chain

// scope is the boundary to which a particular variable or expression is available

// 1.Global scope --> available throughout the code
// 2. local / functional scope --> available inside a function only
// 3. block scope -- available inside {}

// const and let follow block scope and var not

let lang = "javascript" //Global scope

// block {}
{
    let nameOfLang = "java"
    console.log(nameOfLang)
    console.log(lang)
}

// console.log(nameOfLang) // error
function scopeFun(){
    let proLang = "python" // functional scope
    console.log(proLang) 
    console.log(lang) //Global Scope 
}

// console.log(proLang) // error
scopeFun()

let num = 45;
function outer(){
    function inner(){
        // console.log(num)          // || scope chaining -- going outside the function to find a value
    }
    inner()
}

outer()