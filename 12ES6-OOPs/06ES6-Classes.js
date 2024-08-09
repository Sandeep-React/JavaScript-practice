class Person {
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge(){
        console.log(2023 - this.birthYear)
    }
}

const rohit = new Person ('Rohit', 1999)
console.log(rohit);

rohit.calcAge()

Person.prototype.greet = function(){
    console.log("hey there!")
}

rohit.greet()