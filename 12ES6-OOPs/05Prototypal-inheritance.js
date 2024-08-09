const Person = function(firstname, lastname, birthYear){

    // Properties
    this.firstname = firstname;
    this.lastname = lastname; 
    this.birthYear =birthYear;

    // methods
    // Efficient methods are there so don't do this!!
    // this.calcAge = function(){
    //     console.log(2024 - this.birthYear)
    // }
}

const sandeep = new Person('Sandeep', 'Das', 2000)
// console.log(sandeep);

/* 
1. new {} is created
2. function is called and 'this' = {}
3. {} linked to its prototype
4. function will automatically return {}
*/

const rayn = new Person('Rayan', 'James', 2003)
// console.log(rayn)

const riya = new Person('Riya','Singh', 1991)
// console.log(riya)

const sam = 'sam'

// riya.calcAge()

// console.log(rayn instanceof Person)
// console.log(sam instanceof Person)

Person.prototype.calcAge = function(){
        console.log(2024 - this.birthYear)
    }

console.log(rayn)
rayn.calcAge()
riya.calcAge()

// For better understanding check the output 
console.log(rayn.__proto__)
console.log(rayn.__proto__ === Person.prototype)
console.log(riya.__proto__ === Person.prototype)

Person.prototype.species = "Homo Sapiens"

console.log(rayn)
console.log(rayn.species)

console.log(rayn.hasOwnProperty('firstname'))
console.log(rayn.hasOwnProperty('species'))

console.log(rayn)
console.log(rayn.__proto__)
console.log(rayn.__proto__.__proto__)

const arr = [3,6,6,4,0,9,3,7];

console.log(arr.__proto__)
console.log(arr.__proto__ === Array.prototype)

console.log(arr.__proto__.__proto__)
console.log(arr.__proto__.__proto__.__proto__)

Array.prototype.unique = function(){
    return [... new Set(this)]
}

console.log(arr.unique());

console.log( x => x + 1 )

const h1 = document.querySelector('h1')
console.log(h1)
