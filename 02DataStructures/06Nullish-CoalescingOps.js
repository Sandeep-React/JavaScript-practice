// Nullish Coalescing Operator -- > ??
/* The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand 
when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. */


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

restaurant.numGuest = 0;
const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guests1);

// Null or undefined

const guestsCorrect = restaurant.numGuest ?? 10;
console.log(guestsCorrect)