

// Maps

const currencies = new Map([
    ['USD', 'United States Dollar'],
    ['INR', 'Indian Rupee'],
    ['EUR','Euro']
])

console.log(currencies);

currencies.forEach(function(value,key,map){
    console.log(`${key}: ${value}`)
})


// Sets

let currenciesUnique = new Set(['USD', 'INR', 'USD', 'EUR', 'INR'])
console.log(currenciesUnique)

currenciesUnique.forEach(function(value,_,set){
    console.log(`${value}: ${value}`)

})