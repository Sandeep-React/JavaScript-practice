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

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(menu)

// tradition way

for(let i = 0 ; i < menu.length ; i++){
    // console.log(menu[i])
}

// using for of 

for(const item of menu){
    // console.log(item)
}

// console.log([menu.entries()])
// console.log([...menu.entries()])

for (const item of menu.entries()) {
    // console.log(item)
   // console.log(`${item[0]}: ${item[1]}`)
}

for(const [i, el] of menu.entries()){
    console.log(`${i + 1}: ${el}`)
}

