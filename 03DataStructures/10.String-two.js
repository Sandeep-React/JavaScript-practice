const airlines = "Tata Vistara India";

// Change to lowercase and Uppercase
console.log(airlines.toLowerCase())
console.log(airlines.toLocaleUpperCase())

// First letter capital
const passenger = "sAndeep";
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect)

// Compare email
const email ="sandeep@gmail.com"
const loginEmail = "   Sandeep@gmail.com \n"

console.log(email === loginEmail)// false

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail)

// console.log(email === trimmedEmail); // true

const correctEmail = loginEmail.toLowerCase().trim()
console.log(email === correctEmail)

// Replace anything

const price = "$4,000";
const priceIn = price.replace("$", "Rs. ")

console.log(priceIn)

const announcement = "All Passengers come to boarding door 23, Boarding door 23."

console.log(announcement.replace("door","gate"))
console.log(announcement.replaceAll("door","gate"))

// Regular Ex

console.log(announcement.replace(/door/g,"gate"))

// booleans
const plane = "Airbus A320neo"
console.log(plane.includes('Boeing'))
console.log(plane.startsWith('A'))
console.log(plane.startsWith('Air'))
