console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
    }
    info() {
        console.log("My name is " + this.name + ". I have " + this.pets + " pets, my residence is " + this.residence + " and my hobbies are " + this.hobbies + ".")
    }
    soundOff() {
        console.log("Hello, fellow person!")
    }
}
let firstPerson = new Person("Tim", 2, "McKinleyville", ["painting", "guitar", "poor spelling"]);
firstPerson.soundOff();
firstPerson.info();

class Coder extends Person {
    constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Developer"
    }
    soundOff() {
        console.log("Hello, fellow person! I'm a Coder!")
    }
}
let firstCoder = new Coder("Tom", 3, "Centerville", [chess, MMA]);
firstCoder.soundOff()