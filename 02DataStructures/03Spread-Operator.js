// Spread Operator: Spread operator allows us to copy an array or an object or a part of a new array
// (...)

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
    orderPasta: function(ing1, ing2, ing3){
        console.log(`Here is our pasta with ${ing1}, ${ing2}, and ${ing3}`)
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
        
    },

} 

const arr =[7, 8, 9];
const badNewArray = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log(badNewArray)

// using the spread operator
const newArray = [1, 2, 3, ...arr]
console.log(newArray)
console.log(...arr)

// adding elements in a array
const newMenu = [...restaurant.mainMenu,"Chicken Masala"]
console.log(newMenu)

// merge two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu)

// iterates: arrays, strings, maps, sets BUT NOT Objects objects are not iterables

const str = "Sandeep";
const letters = [...str, ' ', 'D']
console.log(letters)

//We cannot do this  with spread operator

// console.log(`${...str} Das`) // It cannot do like this


const ingredients = [ "Paneer", "sauch", "chilly"]
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
//  using spread operators

restaurant.orderPasta(...ingredients)

// We can use spread operator to create new objects.

const newRestaurant = {foundedIn: 2020, ...restaurant, founderName: "Sandeep"};
console.log(newRestaurant)

// Updating the values of an existing objects
const restaurantCopy = {...restaurant}
console.log("Copy Restaurant", restaurantCopy)
restaurantCopy.name ="Modern Indian Restaurant";
console.log(restaurantCopy.name)
