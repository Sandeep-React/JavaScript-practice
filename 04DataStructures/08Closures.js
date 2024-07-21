const secureBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount ++;
        console.log(`${passengerCount} passengers`)

    }
}

const book = secureBooking();

book()
book()
book()
book()

const greeting = "Good Morning";
const greet = function(){
    const greeting = "Good Afternoon";
    console.log(greeting)

    return function(){
        console.log(greeting)
    }

}

const greetFunction = greet();
greetFunction();