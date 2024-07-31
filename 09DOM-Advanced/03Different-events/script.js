// Event and event listeners

// different ways to apply event listener 

const h1 =document.querySelector('h1')

//  1
// h1.addEventListener('mouseenter', function(){
//     alert("Great! you are reading the heading now")
// })

const alertH1 = function(){
    alert("Great! you are reading the heading now")
    h1.removeEventListener('mouseenter', alertH1) // remove an event
}


h1.addEventListener('mouseenter', alertH1)



// 2

// h1.onmouseenter = function(){
//     alert('onMouseenter: you are seeing this heading.');
// }

// Removing an event



