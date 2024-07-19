console.log("Lets learn function in detail")

//default parameter

const bookings = []
// const createBooking = function (flightNum,numPassengers = 1,price = 199) {
const createBooking = function (flightNum,numPassengers = 1,price = 199* numPassengers) {

    //ES5
    /* numPassengers = numPassengers || 1 ;
    price = price || 199 ; */
    

     const booking = {
        flightNum,
        numPassengers,
        price
     }
     console.log(booking)
     bookings.push(booking)
}

createBooking('PY647')
createBooking("Py647", 4, 1000)
createBooking('LH124', 6, )