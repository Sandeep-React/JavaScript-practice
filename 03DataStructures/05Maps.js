// Maps -- > Maps are just like Objects but we can set anything as it's key

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

const rest = new Map();
// set() is use to set  a value inside a map
rest.set('name', 'Indian Palace');
rest.set(1, "New Delhi");
rest.set(2, "Mumbai")


console.log(rest)

console.log(rest.set(3, "Bangalore"))

// Chaining of Maps

rest.set('Categories',['India', 'Punjab', 'Chinese', 'Mexican'])
.set('open', 11)
.set('close', 23).set(true,"We are Open :D")
.set(false, "Sorry! We are closed")

console.log(rest)

// get() is use to get a value from map

console.log(rest.get('name'))
console.log(rest.get(1))
console.log(rest.get(true))

const time = 9;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('Categories'))
console.log(rest.has('Menu'))



// rest.clear() // Delete everything

rest.delete(2) // deletes one entity

rest.set([1,2], "Test")
rest.get([1,2])

const arr = [1,2]
rest.set(arr, "test")
console.log(rest.get(arr))
console.log(rest)

//We can also set the document object in the browser

// rest.set(document.querySelector('h1'),'Heading')