'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 =    document.querySelector('#section--1')
const nav = document.querySelector('.nav')

btnScrollTo.addEventListener('click',function(e){

    // Coordinates for the section
    const s1coords = section1.getBoundingClientRect()
    // console.log(s1coords)
    
    // Coordinates for the button
    // console.log(e.target.getBoundingClientRect())

    // tells how far we have scrolled
    // console.log("Current X-Y scroll", window.pageXOffset,window.pageYOffset)

    // Tells the viewport height and width
    // console.log("height/Width", document.documentElement.clientHeight,document.documentElement.clientWidth)

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


//Sticky Navigation

// const initialCoords = section1.getBoundingClientRect()
// console.log(initialCoords)

// window.addEventListener('scroll', function(e){
//     // console.log(e)
//     // console.log(window.scrollY)

//     // if(this.window.scrollY > 333){
//     //     // console.log("Nav is sticky")
//     // }

//     if(window.scrollY > initialCoords.top){
//         nav.classList.add('sticky')
//     }else{
//         nav.classList.remove('sticky')
//     }
// })


// Sticky Navigation-- Intersection Observer API

// const obsCallBack = function(entries, observer){
//     entries.forEach(entry => console.log(entry))
// }

// const obsOptions = {
//     root:null,
//     threshold:0.1
// }

// const observer = new IntersectionObserver(obsCallBack,obsOptions);

// observer.observe(section1)

const header = document.querySelector('.header')

const stickyNav = function(entries){
    const [entry] = entries;

    if(!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky')
}

const headerObserver = new IntersectionObserver(stickyNav,{
    root:null,
    threshold:0
})

headerObserver.observe(header)




// reveal section animation

const allSections = document.querySelectorAll('.section')
const revealSection = function(entries, observer){
    // entries.forEach(entry => console.log(entry))

    const [entry] = entries;

    if(!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden')

    observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection,{
    root:null,
    threshold:0.15
})

allSections.forEach(function(section){
    section.classList.add('section--hidden')
    sectionObserver.observe(section)
})


// lazy loading Images for Improved performance

const imgTargets = document.querySelectorAll('img[data-src]')

const loadImg = function(entries,observer){
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function(){
        entry.target.classList.remove('lazy-img')
    })
    observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg,{
    root:null,
    threshold:0
})

imgTargets.forEach(img => imgObserver.observe(img))


// Creating a slider component

const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide')

const btnRight = document.querySelector('.slider__btn--right')
const btnLeft = document.querySelector('.slider__btn--left')

let curSlide = 0 ; // current slide
const maxSlide = slides.length;

slider.style.overflow = 'visible'
slider.style.transform = 'scale(0.5)'

slides.forEach((s,i) =>{
    s.style.transform = `translateX(${100* (i)}%)`
})

function goToSlide (slide){
    slides.forEach((s,i) =>{
        s.style.transform = `translateX(${100* (i-slide)}%)`
    })
}

btnRight.addEventListener('click', function(){
   
    if(curSlide === maxSlide - 1){
        curSlide = 0
    } else {
        curSlide ++
    }

    goToSlide(curSlide)
    
})

btnLeft.addEventListener('click', function(){
    
    if(curSlide === 0){
        curSlide = maxSlide -1
    }else{
        curSlide -- 
    }
    
    goToSlide(curSlide)
    
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


// Navigating the DOM Tree
 
// const h1 = document.querySelector('h1')

//child selection

// console.log(h1.childNodes)
// console.log(h1.children)
// console.log(h1.firstElementChild)
// console.log(h1.lastElementChild)
// h1.firstElementChild.style.color ='white'
// h1.lastElementChild.style.color ='orange'

// going upwards -- Parents

// console.log(h1.parentNode)
// console.log(h1.parentElement)

// h1.closest('.header').style.background = 'orange'
// h1.closest('h1').style.backgroundColor = 'green'

// siblings

// console.log(h1.previousElementSibling)
// console.log(h1.nextElementSibling)

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach((el) => {
//     if(el !==h1) el.style.transform = 'scale(0.5)'
// })



//Tabs component--

const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

//bad approach
// tabs.forEach((t) => {
//     t.addEventListener('click',function(){
//         console.log("clicked")
//     })
// })

// efficent approach
tabContainer.addEventListener('click', function(e){
    // console.log("tabs")
    // const clicked = e.target;
    // const clicked = e.target.parentElement;
    const clicked = e.target.closest('.operations__tab ')
    // console.log(clicked)

    // remove active class
    if(!clicked) return
    tabs.forEach(t => t.classList.remove('operations__tab--active'));

    tabsContent.forEach(c => c.classList.remove('operations__content--active'));

    clicked.classList.add('operations__tab--active')
    document.querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active')
})


// Menu fade animation
    const handleHover = function(e){
        if (e.target.classList.contains('nav__link')){
            const link = e.target;
            const siblings = link.closest('.nav').querySelectorAll('.nav__link')
            const logo = link.closest('.nav').querySelector('img')
    
            siblings.forEach(el => {
                if (el !== link){
                    el.style.opacity = this
                }
            })
            
            logo.style.opacity = this
        }
    }

nav.addEventListener('mouseover', handleHover.bind(0.5))

nav.addEventListener('mouseout', handleHover.bind(1))
