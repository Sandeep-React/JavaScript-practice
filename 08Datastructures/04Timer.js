// Timers 

// Set Intervals -- repeats a given function at every given time interval. 
// set Timeout -- executes a function, after waiting a specified number of milliseconds

/* SetTimeout() */

// setTimeout(() =>{
//     console.log("Here is your Pizza")
// },5000)

// console.log("I am ordering a pizza")

// setTimeout((ing1, ing2) =>{
//     console.log(`Here is your Pizza with ${ing1} and ${ing2}` )
// },5000, 'olives', 'mushrooms')

// console.log("Here is my pizza")

console.log("I am ordering a pizza")

const ing = ['olives', 'mushrooms']
setTimeout((ing1, ing2) =>{
    console.log(`Here is your Pizza with ${ing1} and ${ing2}` )
},5000,...ing)

console.log("Here is my pizza")

//We can cancel the timeout in the following way:

console.log("I am ordering a pizza")

const ingred = ['olives', 'mushrooms']
const pizzaTimer = setTimeout((ing1, ing2) =>{
    console.log(`Here is your Pizza with ${ing1} and ${ing2}` )
},5000,...ingred)

if(ingred.includes('olives')){
    clearTimeout(pizzaTimer)
}

console.log("Here is my pizza")


//Set interval

setInterval(() => {
    const now = new Date()
    console.log(now)
},1000)


