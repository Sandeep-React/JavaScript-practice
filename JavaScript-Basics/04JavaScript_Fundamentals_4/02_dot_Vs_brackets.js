let city = "city"

const myDetails = {
    name : "Sandeep",
    role : "Web Developer",
    city : "New Delhi"
}

// using dot .
// simple to write

console.log(myDetails.name)
console.log(myDetails.role)

console.log(myDetails.val) // undefined

//using brackets []

console.log(myDetails ["name"])
console.log(myDetails ["role"])
console.log(myDetails [city]) // New Delhi 

// If we have key as a strings then we can only access using brackets

const obj = {
    "Full Name" : "Sandeep Kumar Das",
    city: "Gurugram"
}

console.log(obj["Full Name"]) // We can only access using []
console.log(obj.city)