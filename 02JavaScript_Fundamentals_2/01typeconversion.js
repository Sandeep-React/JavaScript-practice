// Type conversion and Coercion 
// ===================================

/* 
Type conversion
-- Converting data type
There are two types of type conversion
1. Implicit (coercion) ---> Happens automatically at the time of Execution 
    let = 15 + "js"
        = 15js ---> string (done automatically by Js)

2. Explicit (type casting) ---> Done by user
    let b = 153
    console.log(typeof(b)) ---> number
    
    let c = string(b)
    console.log(typeof(c)) ---> string --> done by user

    JavaScript is loosly packed programming language

*/

let a = 12 + "js"
console.log(a) // 12js
console.log(typeof a) // String

//string  ----> number
let c = "Computer"
let d  = Number(c)
console.log(d) //NaN
console.log(typeof d) // number
