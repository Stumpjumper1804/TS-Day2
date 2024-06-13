"use strict";
// Basic Exercises Exercise 1:
// Create a class constructor named Person that should hold information about name, age, jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”
class Person {
    constructor(fName, lName, jobTitle, age) {
        this.fName = fName;
        this.lName = lName;
        this.jobTitle = jobTitle;
        this.age = age;
    }
    printString() {
        return `Hello there, my nme is ${this.fName} ${this.lName} and I am ${this.age} years old and I am a ${this.jobTitle}.`;
    }
}
let Albert = new Person("Albert", "Karsai", "Developer", 54);
console.log(Albert.printString());
// Exercise 2:
// Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”
class Engineer extends Person {
    constructor(fName, lName, jobTitle, age, salary, jobLocation) {
        super(fName, lName, jobTitle, age);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    addOnString() {
        return `And I get ${this.salary} every month, and I work in ${this.jobLocation}.`;
    }
}
let Albert2 = new Engineer("Albert", "Karsai", "Developer", 54, "3.000", "Vienna");
console.log(Albert2.printString() + Albert2.addOnString());
