const airlines = "Tata Vistara India";
const plane = "A388";

console.log(plane[0])
console.log(plane[1])
console.log(plane[2])
console.log(plane[3])

console.log('B737'[2])

console.log(airlines.indexOf('s'))
console.log(airlines.indexOf('a'))

console.log(airlines.lastIndexOf('a'))
console.log(airlines.lastIndexOf('i'))

console.log(airlines.indexOf('Tata'))
console.log(airlines.indexOf('Vistara'))
console.log(airlines.indexOf('India'))

console.log(airlines.slice(5));
console.log(airlines.slice(5,12));

console.log(airlines.slice(0,airlines.indexOf(' ')))
console.log(airlines.slice(0,airlines.lastIndexOf(' ')))

console.log(airlines.slice(-2))
console.log(airlines.slice(1,-1))

function checkMiddleSeat(seat){

    const s = seat.slice(-1)
    if(s ==="B" || s ==="E")console.log("You got the Middle Seat")
        else
    console.log("You gt lucky")
}
checkMiddleSeat("11B")
checkMiddleSeat("19A")
checkMiddleSeat("14E")
checkMiddleSeat("1F")

console.log(new String('Sandeep'))

console.log(typeof new String('Sandeep'))
console.log(typeof new String('Sandeep').slice(1))