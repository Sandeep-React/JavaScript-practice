// Sets in JavaScripts

/* Set is a data structures that holds unique data and it can be created out of any iteratable.
---> Set doesn't support duplicate values. */

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

// Set from an Array
const orderSet = new Set([
    'Chicken',
    'Dal Makhani',
    'Chicken',
    'Paneer',
    'Soup',
    'Dal Makhani',
    'Paneer'
])

console.log(orderSet) // Duplicate values are discarded

// Set from a String

const nameSet = new Set('Sandeep');
console.log(nameSet)

// Properties of Set 

// Size
console.log(orderSet.size)

// has
console.log(orderSet.has('Chicken'))
console.log(orderSet.has('Milk Tea'))

// Adding and removing 

// Add
orderSet.add("Coffee")
console.log(orderSet)

// Delete
orderSet.delete('Paneer')
console.log(orderSet)

// Delete All ---> Delete everything from the set

orderSet.clear()
console.log(orderSet)


// Examples

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter", "Manager"];
// const staffUnique = new Set(staff) // returns set
const staffUnique = [...new Set(staff)]; // returns Array
console.log(staffUnique) 
console.log(staffUnique) 
console.log(typeof staffUnique) // Object

console.log(new Set('SandeepKumarDas'))
console.log(new Set('SandeepKumarDas').size)