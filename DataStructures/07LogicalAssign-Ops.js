// Logical assignment operator 
// Introduced in ES 2021 update

const rest1 = {
    name:"Truly Indian",
    numGuest: 20,
}

const rest2={
    name:"Indian Palace",
    Owner: "Vakash Khanna"
}


// Using OR operator
// rest1.numGuest = rest1.numGuest || 10
// rest2.numGuest = rest2.numGuest || 10

// Using Logical assignment operator
rest1.numGuest ||= 10
rest2.numGuest ||= 10

console.log(rest2)
console.log(rest1)


const rest3 = {
    name: "Indian Dine",
    numGuest: 0
}

// Using Logical assignment operator
rest1.numGuest ??=10
rest2.numGuest ??=10
rest3.numGuest ??=10

console.log(rest1)
console.log(rest2)
console.log(rest3)

rest1.Owner = rest1.Owner && "Anon"
rest2.Owner = rest2.Owner && "Anon"

console.log(rest1)
console.log(rest2)

// Using Logical assignment operator
rest1.Owner &&= "Anon"
rest2.Owner &&= "Anon"

console.log(rest1)
console.log(rest2)