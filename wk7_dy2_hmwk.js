//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for (let key in person3) {
    console.log(key)
    console.log(person3[key])
};

//=======Exercise #2=========//
/*
1. Write an object prototype for a Person 
    a. Name param 
    b. Age parem 
2. Has a printInfo method
3. And has a method that increments the persons age by 1 each time the method is called.

Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`Hello, this is ${this.name} and they are ${this.age} years old!`)
    };
    // Create another arrow function for the addAge method that takes a single parameter adding to the age 
    this.addAge = (age) => {
        age = this.age += 1;
        console.log(`${this.name} is now ${age} years old`)
    };
};

// let Bob = new Person('Bob', 24)
// Bob.printInfo()
// Bob.addAge()
// Bob.addAge()
// Bob.addAge()
// let Susie = new Person('Susie', 45)
// Susie.printInfo()


// =============Exercise #3 ============//
/*

    1. Create a Promised based function that will check a string to determine if it's length is greater than 10.
    2. If the length is greater than ten console log "Big word". 
    3. If the length of the string is less than 10 console log "Small Number"
*/

 const checkLength = () => {
    return new Promise((resolve, reject) => {
        let word = "Amberjacks"
        if (word.length >= 10) {
            resolve(word)
        } else {
            reject(word)
        };
    })
 };

 checkLength().then(
     (word) => {
     console.log(`${word} is a big word`)
    }
    ).catch(
    (word) => {
     console.log(`${word} is a small number`)
    }
);

 console.log(checkLength())


