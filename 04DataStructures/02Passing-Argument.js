const flight = "LH732"
const sandeep = {
    name : "Sandeep Kumar Das",
    passportNo : 9087564567
}

const checkIn = function(flightNum, passenger){
    flightNum = "LJ999";
    passenger.name = "Mr. " + passenger.name;

    if(passenger.passportNo === 9087564567){
        console.log("Checked In ✔")
    }else{
        console.log("Wrong Passport ❌")
    }
}

checkIn(flight, sandeep)

console.log(flight) // value does not change
console.log(sandeep.name) // value changes

const newPassport = function(person){
    person.passportNo = Math.trunc(Math.random() * 1000000) 
}

newPassport(sandeep)
console.log("User is", sandeep)
