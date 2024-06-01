// Short circuit operation

// || ---> OR operator: Always returns the first truthy values it encounters

console.log('------------OR-------------')
console.log(3 || 'Sandeep') // 3
console.log('' || 'Sandeep') // sandeep
console.log(' ' || 'Sandeep') // (blank space)-- Is a truthy value 
console.log(true || 'sandeep') // true
console.log(undefined || 'sandeep') // sandeep
console.log(undefined || 0 || '' || 73 || null) // 73


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


restaurant.numGuest = 23;
const guestOne = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guestOne)

// Using || operators

const guestTwo = restaurant.numGuest || 10

// AND ----> && Always returns the first falsy values it encounters
console.log('------------AND-------------')
console.log(0 && 'Sandeep')
console.log(7 && 'Sandeep')
console.log('hello' && 23 && null && 'Sandeep')

if(restaurant.orderPizza){
    restaurant.orderPizza("Mushrooms", "Onions")
}

restaurant.orderPizza && restaurant.orderPizza("Mushrooms", "Onions")