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

// Bind Method
const bookTV = book.bind(vistara);
const bookSJ = book.bind(spiceJet);
const bookIG = book.bind(indigo);

bookTV(9289, "Rishi pandey");
bookTV(9232, "Neeraj")
bookSJ(3219, "John")
bookIG(12324,"Mark")

console.log(vistara) 
console.log(spiceJet)
console.log(indigo)

const bookTV741 = book.bind(vistara,741);
const bookTV741Name = book.bind(vistara,741,"Aditya Pandey");

bookTV741("Ravi Gupta")
bookTV741Name()

console.log(vistara)
console.log(bookTV741Name)

// DOM

vistara.planes = 300;
vistara.buyPlanes = function(){
    console.log(this)
    this.planes++
    console.log(this.planes)
}

// document.querySelector(".buy").addEventListener("click",vistara.buyPlanes.bind(vistara))

const addTax = (rate,value) => value + value * rate;
console.log(addTax(.1,200));

const addGST = addTax.bind(null,.18)
console.log(addGST(100));


const addTaxRate = function(rate){
    return function(value){
        
        return value + value * rate

    }
}

const addGSTAgain = addTaxRate(.18);
console.log(addGSTAgain(100))