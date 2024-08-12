// Object.create

const PersonProto = {
    calcAge(){
        console.log(2023 - this.birthYear)
    },

    init(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const shivam = Object.create(PersonProto);
console.log(shivam);
shivam.firstName = "Shivam";
shivam.birthYear = 2000;

console.log(shivam);
shivam.calcAge();

console.log(shivam.__proto__===PersonProto)

const rohit = Object.create(PersonProto);
rohit.init("Rohit", 1995);
console.log(rohit)
rohit.calcAge()