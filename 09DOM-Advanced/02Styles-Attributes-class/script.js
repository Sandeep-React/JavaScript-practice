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
header.prepend(message)
// header.append(message)

// header.before(message)
// header.after(message)



// remove element
document.querySelector('.btn-close-cookie').addEventListener('click', function(){
    // message.parentElement.removeChild(message);
    message.remove() // This is the a new method
})

// Styles attribute and classes

//----> use camel case


message.style.backgroundColor = "#37383d"

message.style.height = '80px';

console.log(message.style.backgroundColor)
console.log(message.style.width) // this will only work for the proporties which added via Javascirpt

console.log(getComputedStyle(message).width)
console.log(getComputedStyle(message).color)

message.style.height = Number.parseFloat(getComputedStyle(message).height,10) + 30 + 'px';
console.log(getComputedStyle(message).height)

// 
// document.documentElement.style.setProperty('--color-primary','red')

//Attributes 
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);

console.log(logo.className)

logo.alt = "A modern logo";

//To access a custom designed attribute
console.log(logo.designer) // Undefined
console.log(logo.getAttribute('designer'))
console.log(logo.getAttribute('designer'))

//To access a data attribute
console.log(logo.dataset.versionNumber)

console.log(logo.src) // we get absolute URL
console.log(logo.getAttribute('src')) // we get the relative URL



// classes 
logo.classList.add('c', 'j')
logo.classList.remove('c','j')
logo.classList.toggle('c')
logo.classList.contains('c');



// Don't do this 

//Update the classes
logo.classList ="dark-mode"



