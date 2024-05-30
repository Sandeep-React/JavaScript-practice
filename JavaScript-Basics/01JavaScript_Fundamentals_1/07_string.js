//Strings:
//'' or ""

let str = "javascript is super easy and awesome"


// length property
console.log(str.length) // 36

//Methods
//1. slice

console.log(str.slice(0,10)) //javascript

// 2. splice --> splice method are only present in arrays

// 3. indexOf
console.log(str.indexOf("is")) //11

// 4. split string ---> array
console.log(str.split(" ")) // [ 'javascript', 'is', 'super', 'easy', 'and', 'awesome' ]

let name = "Sandeep"
let role = "Full Stack Web Developer"

// Concatenation
 let concat = name + " is a best " + role
 console.log(concat) //Sandeep is a best Full Stack Web Developer

//  string literals

let str_lit = `${name} is a best ${role}`
console.log(str_lit) //Sandeep is a best Full Stack Web Developer



