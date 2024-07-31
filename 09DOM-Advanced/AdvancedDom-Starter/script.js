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
