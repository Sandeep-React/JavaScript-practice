//  getter and setter methods

const account = {
    owner : "Sandeep",
    movements : [200, 560, 800, 20],
    get latest(){
        return(this.movements.slice(-1).pop())
    },
    set latest(mov){
        this.movements.push(mov);
        console.log(this.movements)
    }
}

console.log(account);
console.log(account.latest)

account.latest = 1200

class Person {
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge(){
        console.log(2023 - this.birthYear)
    }
    greet(){
        console.log("Hey There!")
    }

    get age(){
        return 2023 - this.birthYear
    }

    set firstName(name){
        if(name.includes(' ')) this._fullName = name
        else console.log(`${name} is not a full name`)
    }

}

const rohit = new Person ('Rohit Sharma', 1999)
console.log(rohit);

rohit.calcAge()

Person.prototype.greet = function(){
    console.log("hey there!")
}

rohit.greet()

rohit.age