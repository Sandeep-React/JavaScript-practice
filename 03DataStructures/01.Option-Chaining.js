//Option chaining: Allows to check whether a property exists before we to perform some operation on it.
// It works for properties, methods, Objects and arrays.

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
        open: 0,
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

// console.log(restaurant.openingHours.mon) // undefined because in mon doesn't exist
// console.log(restaurant.openingHours.mon.open) // Error

if(restaurant.openingHours.mon){
    console.log(restaurant.openingHours.mon) // not execute because condition is false
}

if(restaurant.openingHours && restaurant.openingHours.mon){
    console.log(restaurant.openingHours.mon) // not execute because condition is false
}

// Using Option chaining ?.

    console.log(restaurant.openingHours.mon ?. open) // Undefine because it is checking the condition 
    
    console.log(restaurant.openingHours?. mon?. open); // undefined



    const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat']

    for(const day of days){
        const open = restaurant.openingHours[day]?.open;
        console.log(`On ${day}, we are open at ${open}`)
    }

    for(const day of days){
        const open = restaurant.openingHours[day]?.open ?? 'closed';
        console.log(`On ${day}, we are open at ${open}`)
    }


    // For methods

    console.log(restaurant.order(0,1))
    // console.log(restaurant.orderSoup(1)) // Error 
    console.log(restaurant.orderSoup?.(1))


    // For arrays
    const users = [
        {
            name:'sandeep',
            email:'sandeep@gmail.com'
        }
    ]


    console.log(users[0])
    console.log(users[0].name)

    const user =[]
    console.log(user[0]?.name ?? "User array is empty")