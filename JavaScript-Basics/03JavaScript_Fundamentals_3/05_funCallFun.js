 function sum(a, b, c){
    return a + b + c;
 }

 function anotherFun() {
    
    const addition = sum (12, 1, 4) // function sum is called from another function
    console.log(addition)
 }

 anotherFun()

 // 

 function c(){
    return function(){
        console.log("inner function")
    }

 }

 // c() // this will not work 

//Access the inner function
const inner = c();
inner()

// We can also access in the following way

c()()

function outer() {
    const a = 10;
    const b = 15;
    const result = inner();
    function inner() {
      return a + b;
    }
   return result;
 }
 console.log(outer());