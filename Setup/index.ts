class Wolf {
    bark(): void {
    console.log("Woof!");
}
}

class Cat {
meow(): void {
    console.log("Meow!");
}
}

// Example function with instanceof type guard
function animalSound(animal: Wolf | Cat): void {
if (animal instanceof Wolf) {
    // Within this block, TypeScript knows that 'animal' is an instance of Dog
    animal.bark();
} else {
    // Within this block, TypeScript knows that 'animal' is an instance of Cat
    animal.meow();
}
}

// Example usage
const myDog = new Wolf();
const myCat = new Cat();

animalSound(myDog); // Outputs: Woof!
animalSound(myCat); // Outputs: Meow!