console.log("Connected")

// select and manipulate

// tagname, class, Id, querySelector, and querySelectorAll


// access or select using tagname
// console.log(document.getElementsByTagName("h3")[0])

//access or select using class
// console.log(document.getElementsByClassName("info")[0])

// access or select using ID
// console.log(document.getElementById("info1"))

// access or select using querySelector ---> only takes first element with respective selector
// h3, .info, #info1
// console.log(document.querySelector("h3"))

// access or select using querySelectorAll --> we can select all elements with respective selector
// h3, .info, #info1
// console.log(document.querySelectorAll('.info'))

// Manipulation 

document.getElementById("info1").innerText =" JavaScript is the most famous programming language 🍿🌭 "