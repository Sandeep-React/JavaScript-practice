const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat']

const openingHours = {
    [weekdays[3]]:{
        open:'10 AM',
        close:'12 AM'
    },
    [weekdays[4]]: {
        open:'10 AM',
        close:'12 AM'
    },
    [weekdays[5]]:{
        open:'10 AM',
        close:'4 AM'
    }
    
};


const restaurant = {
    name : 'Classic Indian',
    location : 'CP, New Delhi, India',
    categories: ['India', 'Punjab', 'Chinese', 'Mexican'],
    starterMenu : ['soup','Fries','Burger', 'Garlic bread'],
    mainMenu: ['Dal makhani', 'Paneer','Soya Chaap'],
    // openingHours:openingHours,
    openingHours, // ALSO WORKS!
    // hours, tHIS WILL NOT WORK ,the key name should be name

    // We can get rid of function and :
    order(starterIndex, mainIndex){
            return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
    },
    
    deliverOrder({time, address, mainIndex, starterIndex}){
        console.log(`Order Placed! for ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}.
        To be delivered to ${address} at ${time})`)
    },
    orderPasta(ing1, ing2, ing3){
        console.log(`Here is our pasta with ${ing1}, ${ing2}, and ${ing3}`)
    },
    orderPizza(mainIngredient, ...otherIngredients){
        console.log(mainIngredient, otherIngredients)
    },
}

console.log(restaurant)