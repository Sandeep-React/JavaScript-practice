const vistara = {
    airlines : "Tata Vistar",
    airlineCode : "TV",
    booking : [],
    book(flightNum, name){
        console.log(`${name} booked a flight on ${this.airlines}. Flight is ${this.airlineCode} ${flightNum}`);
        this.booking.push({flight: `${this.airlineCode} ${flightNum}`, name})
    }
}

vistara.book(456, "Sandeep Kumar Das")
vistara.book(426, "Arijit Verma")
console.log(vistara)

const spiceJet = {
    airlines : " Spice Jet",
    airlineCode: "SJ",
    booking : []
}

const book = vistara.book;

// Does not work
// book(23, "Rajesh Singh")

//call method
book.call(spiceJet, 78, "Spiderman")
console.log(spiceJet)


book.call(vistara,923, "Sanjay Kumar");
console.log(vistara)


const indigo = {
    airlines : "Indigo",
    airlineCode: "IA",
    booking : []
}

book.call(indigo, 1234,"Superman");
console.log(indigo)


//Apply Method

const passengerData = [528, "Batman"];
book.apply(indigo,passengerData);
console.log(indigo)

book.call(vistara, ...passengerData)
console.log(vistara)