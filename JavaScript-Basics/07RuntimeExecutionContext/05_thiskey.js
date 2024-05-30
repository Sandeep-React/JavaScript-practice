//This keyword
//This keyword -- > always hold reference to a single object
                   // define current execution context


//Using this Keyword in Object
const lang = "python"
const Obj1 = {
    lang: "javaScript",
    next: function(){
        console.log(lang) // python
        console.log(this.lang)//javaScript
    }
}

Obj1.next()

// this keyword also refers to global | window

// console.log(this == window) //true (in browser) 

// Scope : functional scope | local scope
function a(){
    // let val = "HTML"
   this.val = "HTML"
}
a()
console.log(val)