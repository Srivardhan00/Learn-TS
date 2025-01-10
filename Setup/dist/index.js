"use strict";
class Wolf {
    bark() {
        console.log("Woof!");
    }
}
class Cat {
    meow() {
        console.log("Meow!");
    }
}
// Example function with instanceof type guard
function animalSound(animal) {
    if (animal instanceof Wolf) {
        // Within this block, TypeScript knows that 'animal' is an instance of Dog
        animal.bark();
    }
    else {
        // Within this block, TypeScript knows that 'animal' is an instance of Cat
        animal.meow();
    }
}
// Example usage
const myDog = new Wolf();
const myCat = new Cat();
animalSound(myDog); // Outputs: Woof!
animalSound(myCat); // Outputs: Meow!
