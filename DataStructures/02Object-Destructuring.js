const restaurant = {
    name : 'Classic Indian',
    location : 'CP, New Delhi, India',
    categories: ['India', 'Punjab', 'Chinese', 'Mexican'],
    starterMenu : ['soup','Fries','Burger', 'Garlic bread'],
    mainMenu: ['Dal makhani', 'Paneer','Soya Chaap'],
    order: function(starterIndex, mainIndex){
            return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
    },
    /* deliverOrder:function(obj){
        console.log(obj)
    }, */
    deliverOrder:function({time, address, mainIndex, starterIndex}){
        console.log(`Order Placed! for ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}.
        To be delivered to ${address} at ${time})`)
    },

    openingHours:{
        thur:{
            open:'10 AM',
            close:'12 AM'
        },
        fri: {
            open:'10 AM',
            close:'12 AM'
        },
        sat:{
            open:'10 AM',
            close:'4 AM'
        }
        
    }
} 

// Object Destructuring

const {name, starterMenu,openingHours} = restaurant;
console.log(name, starterMenu, openingHours)

// we can also gives our names

const{
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant

console.log(restaurantName, hours, tags)

// mutating value

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14};
({a,b} = obj)
console.log(a,b)

// Destructuring nested objects

const {fri} = openingHours
console.log("Friday Opening hours", fri)

const {sat:{open, close}} = openingHours;
console.log("Saturday Opening hours", open, close)

const {thur:{open:o, close:c}} = openingHours;
console.log("Thursday Opening hours", o, c)

//

restaurant.deliverOrder({
    time: "20:00",
    address: "123 Alpha Lane",
    mainIndex: 2,
    starterIndex: 1
})