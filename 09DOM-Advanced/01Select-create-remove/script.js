//create select and deleting


console.log(document.documentElement)

console.log(document.head)
console.log(document.body)

// Selection
const header = document.querySelector('.header')
console.log(header)

const allSelections = document.querySelectorAll('.section')
console.log(allSelections)

console.log(document.getElementById('section--1')) 

const allButtons = document.getElementsByTagName('button');
console.log(allButtons)

console.log(document.getElementsByClassName('btn'))

// Create Element 

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = "We use cookies for functionality and and analytics"

console.log(message)
message.innerHTML = 'We use cookies for functionality and and analytics <button class ="btn btn-close-cookie">I accept</button>'

// inserting element 
console.log(message)
// header.prepend(message)
// header.append(message)

header.before(message)
header.after(message)



// remove element
document.querySelector('.btn-close-cookie').addEventListener('click', function(){
    // message.parentElement.removeChild(message);
    message.remove() // This is the a new method
})

