// Immediately Invoked function Expressions

const runOnce = function(){
    console.log("I'll only run once");
}
runOnce()
runOnce(); //It will also run

// if we want to run our funtion only once
(function(){
    console.log("This will never run again")
})();



// for arrow functions
(() => console.log("I will also never run again"))();


(function(){
    console.log("This will never run again")
    const isPrivate = 34;
})();

// console.log(isPrivate) // not defined

{
    const isPrivate = 34;
    var notPrivate = 12
}

// console.log(isPrivate)
console.log(notPrivate)