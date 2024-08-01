'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 =    document.querySelector('#section--1')

btnScrollTo.addEventListener('click',function(e){

    // Coordinates for the section
    const s1coords = section1.getBoundingClientRect()
    console.log(s1coords)
    
    // Coordinates for the button
    console.log(e.target.getBoundingClientRect())

    // tells how far we have scrolled
    console.log("Current X-Y scroll", window.pageXOffset,window.pageYOffset)

    // Tells the viewport height and width
    console.log("height/Width", document.documentElement.clientHeight,document.documentElement.clientWidth)

    // Implementation of scroll feature 

    // code for instant scrolling
    // window.scrollTo(s1coords.left + window.pageXOffset,s1coords.top + window.pageYOffset)
    
    // Modern way 
    // section1.scrollIntoView()

    //Code for smooth scrolling
    // window.scrollTo({
    //     left : s1coords.left + window.pageXOffset,
    //     top: s1coords.top + window.pageYOffset,
    //     behavior:'smooth'
    // })

    //Modern way of smooth scrolling

    section1.scrollIntoView({behavior:'smooth'})
})

// Page Navigation

// console.log(document.querySelectorAll('.nav__link'))
// document.querySelectorAll('.nav__link').forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.preventDefault()
//         // console.log(this.getAttribute('href'))
//         const id  = this.getAttribute('href')
//         document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//     })
// })

// More efficient code for Page navigation

// Using Event Bubbling

// 1 Add event listener to common parent el
// 2 Determine what el originated the event

document.querySelector('.nav__links').addEventListener('click',function(e){
    // console.log("click")
    e.preventDefault()
// console.log(e.target)

    if(e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('href')
        document.querySelector(id).scrollIntoView({behavior: 'smooth'})
    }
})




// Practical Application onn Event Propagation

// const randomInt = (min,max) => 
//     Math.floor(Math.random() * (max-min + 1) + min)
// console.log(randomInt(0,255))

// const randomColor = () =>
//     `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`

//     console.log(randomColor())


// document.querySelector('.nav__link').addEventListener('click', function(e){
//     console.log("LINK",e.target,e.currentTarget)
//     this.style.backgroundColor =randomColor()

//     // Stop propagation 
//     e.stopPropagation()
// })
// document.querySelector('.nav__links').addEventListener('click', function(e){
//     console.log("Container",e.target,e.currentTarget)
//     this.style.backgroundColor =randomColor()
// })
// document.querySelector('.nav').addEventListener('click', function(e){
//     console.log("Nav",e.target,e.currentTarget)
//     this.style.backgroundColor =randomColor()
// })