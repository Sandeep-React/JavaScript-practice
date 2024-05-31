// rest operator and rest parameters
// Use to pack an array


// Spread operator --- it is on the right side of  =
const arr = [1, 2, 3, ...[4,5]]


// Rest operator -- it is used on the left side of =
const [a, b, c, ... others] = [1, 2, 3, 4, 5, 6]
console.log(a, b, others) // 1 2 [ 4, 5, 6 ]


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
    orderPizza:function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient, otherIngredients)
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

// Spread and rest together

const [dal, , Chaap, ...otherItems] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(dal, Chaap, otherItems)



// rest operator with objects

const {sat, ...weekdays} = restaurant.openingHours
console.log(weekdays)
console.log(sat)

//rest Operators with functions

function addNums(...numbers){
console.log(numbers)
let sum = 0;
for (let i = 0; i < numbers.length; i++)
    {
        sum += numbers[i]
    }
    console.log(sum)
}
addNums(2, 5)
addNums(2, 6, 4, 2, 9)
addNums(2, 9, 4, 2, 4, 6, 7, 3, 3);

const x = [4, 5, 8];
addNums(...x)

restaurant.orderPizza("mushrooms", "onions", "tamato")

restaurant.orderPizza("Chickhen")


