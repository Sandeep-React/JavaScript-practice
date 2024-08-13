/* 10.Coding Challenge
Create a JavaScript class named "Animal" with the following properties and methods:

Properties:
name (a string)
age (a number)
species (a string)

Methods:
speak(): A method that logs a message to the console saying "The [species] named [name] says hello!" (where [species] and 
[name] are replaced with the actual values of the object's properties).
Then, create a subclass of "Animal" named "Dog" with an additional property:

Property:
breed (a string)

Override the "speak()" method in the "Dog" class to log a message to the console saying "The [breed] dog named [name] says 
woof!" (where [breed] and [name] are replaced with the actual values of the object's properties).

Finally, create an instance of the "Animal" class and an instance of the "Dog" class, and call their "speak()" methods to 
verify that they work correctly.

Add Ons

Add a static method to the "Animal" class named "createRandomAnimal" that generates a random animal object with a random 
name, age, and species.

Add a getter method to the "Dog" class named "isPuppy" that returns true if the dog is less than one year old, and false 
otherwise.

Add a setter method to the "Animal" class named "setAge" that sets the age property of the object. The method should check 
if the new age is a valid number (greater than zero), and throw an error if it's not.

Create a subclass of "Dog" named "ServiceDog" with an additional property:

Property:
isTrained (a boolean)
Override the "speak()" method in the "ServiceDog" class to log a message to the console saying "The [breed] service dog 
named [name] says woof!" if the dog is trained, and "The [breed] dog named [name] says woof!" if it's not trained.

Create an array of animal objects, including instances of the "Animal", "Dog", and "ServiceDog" classes. Use array 
methods to filter the array to only include dogs, and then sort the resulting array by age in descending order. */

// Solutions

// Define the Animal class
class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    speak() {
        console.log(`The ${this.species} named ${this.name} says hello!`);
    }

    static createRandomAnimal() {
        const names = ["Bella", "Charlie", "Max", "Lucy", "Daisy"];
        const species = ["dog", "cat", "rabbit", "hamster", "parrot"];
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomAge = Math.floor(Math.random() * 15) + 1; // Random age between 1 and 15
        const randomSpecies = species[Math.floor(Math.random() * species.length)];
        return new Animal(randomName, randomAge, randomSpecies);
    }

    setAge(newAge) {
        if (typeof newAge === 'number' && newAge > 0) {
            this.age = newAge;
        } else {
            throw new Error("Invalid age. Age must be a number greater than zero.");
        }
    }
}

// Define the Dog class, subclass of Animal
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age, 'dog');
        this.breed = breed;
    }

    speak() {
        console.log(`The ${this.breed} dog named ${this.name} says woof!`);
    }

    get isPuppy() {
        return this.age < 1;
    }
}

// Define the ServiceDog class, subclass of Dog
class ServiceDog extends Dog {
    constructor(name, age, breed, isTrained) {
        super(name, age, breed);
        this.isTrained = isTrained;
    }

    speak() {
        if (this.isTrained) {
            console.log(`The ${this.breed} service dog named ${this.name} says woof!`);
        } else {
            console.log(`The ${this.breed} dog named ${this.name} says woof!`);
        }
    }
}

// Create instances of each class
const animal = new Animal("Ginger", 5, "cat");
const dog = new Dog("Rex", 2, "Labrador");
const serviceDog = new ServiceDog("Buddy", 0.5, "Golden Retriever", true);

// Call speak methods
animal.speak();        // Output: The cat named Ginger says hello!
dog.speak();           // Output: The Labrador dog named Rex says woof!
serviceDog.speak();   // Output: The Golden Retriever service dog named Buddy says woof!

// Test static method createRandomAnimal
const randomAnimal = Animal.createRandomAnimal();
console.log(randomAnimal);

// Test setter method setAge
try {
    animal.setAge(6);
    console.log(animal.age);  // Output: 6
    animal.setAge(-1);        // Should throw an error
} catch (error) {
    console.error(error.message);
}

// Create an array of animals
const animals = [
    animal,
    dog,
    serviceDog,
    new Dog("Sam", 3, "Beagle"),
    new ServiceDog("Rover", 2, "Poodle", false),
    Animal.createRandomAnimal()
];

// Filter and sort animals
const dogs = animals.filter(a => a instanceof Dog);
const sortedDogs = dogs.sort((a, b) => b.age - a.age);

// Display sorted dogs
console.log(sortedDogs);
