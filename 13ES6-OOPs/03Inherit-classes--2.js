// Inherit Classes using ES6 classes

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

    static sayHi(){
        console.log("hi There! " )
    }

    set firstName(name){
        if(name.includes(' ')) this._fullName = name
        else console.log(`${name} is not a full name`)
    }

}

class Student extends Person {
    constructor(firstName,birthYear,course){
        super(firstName, birthYear)
        this.course = course;
    }

    calcAge(){
        console.log(`I am ${2024 - this.birthYear} years old`)
    }

    introduce(){
        console.log(`My name is ${this._fullName} and I study in ${this.course} `)
    }
}
const ankit = new Student('Ankit Sharma', 1996, "computer Science")
console.log(ankit)
ankit.introduce()
ankit.calcAge()
ankit.greet()