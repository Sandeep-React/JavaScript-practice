// inherit classes using Object.clear()


const PersonProto = {
    calcAge(){
        console.log(2023 - this.birthYear)
    },
    init(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}
const rishi = Object.create(PersonProto);

rishi.init('Rishi', 1990);
console.log(rishi)
rishi.calcAge()

const StudentProto = Object.create(PersonProto);

StudentProto.init = function(firstName,birthYear,course){
    PersonProto.init.call(this,firstName,birthYear);
    this.course = course
}
StudentProto.introduce = function(){
    console.log(`My name is ${this.firstName} and i study ${this.course}`)
}

const jay= Object.create(StudentProto);
jay.init('jay', 2010, 'Information Technology')
console.log(jay)

jay.introduce()