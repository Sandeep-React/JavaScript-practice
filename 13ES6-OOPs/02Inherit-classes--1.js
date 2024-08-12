// Inherit classes using constructor function 

const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function(){
    console.log(2023 - this.birthYear)
}

const ketan = new Person('Ketan', 1993);
console.log(ketan)
ketan.calcAge()

const Student = function(firstName, birthYear, course){
    // this.firstName = firstName;
    // this.birthYear = birthYear;]
    Person.call(this,firstName,birthYear)
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);

 Student.prototype.introduce = function(){
    console.log(`Hey! I am ${this.firstName} and I study ${this.course}`)
 }

const mohan = new Student('Mohan', 1998, "BTech in CS");
mohan.calcAge()
console.log(mohan)
mohan.introduce()

console.log(mohan.__proto__)
console.log(mohan.__proto__.__proto__)

console.log(mohan instanceof Student)
console.log(mohan instanceof Person)
console.log(mohan instanceof Object)