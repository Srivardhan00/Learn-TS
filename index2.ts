// OOP
class Person{
    name: string; 
    age: number;
    constructor(name:string, age:number){
        this.name=name,
        this.age=age
    }
}

let person2 = new Person("Ab", 21);
// console.log(person2);


// Access modifiers
// -public : anywhere, inside and outside
// -private : accessed within class which they are defined
// -protected : accessed from within class and subclasses that extend
class Animal{
    public name:string;
    private age:number;
    protected species:string;
    constructor(name:string, age:number, species:string){
        this.age=age;
        this.name=name;
        this.species=species;
    }
    public getName():string{
        return this.name;
    }
    protected getAge():number{
        return this.age;
    }
    private getSpecies():string{
        return this.species;
    }
}
const animal = new Animal("Man", 99, "Human");
// console.log(animal.name);
// console.log(animal.getName());

// console.log(animal.getAge()); ->ERROR
// console.log(animal.getSpecies()); ->ERROR
// console.log(animal.age); ->ERROR
// console.log(animal.species); ->ERROR

class Dog extends Animal{
    constructor(name:string, age:number){
        super(name, age, ""); 
        this.species = "Canine"; // modifying protected property in child class
    }
    public getDogAge(): number{
        return this.getAge() // using protected method in child
    }
}
const dog = new Dog("An", 12);
// console.log(dog);
// console.log(dog.name);
// console.log(dog.getName());
// console.log(dog.getDogAge());
// others will raise errors


// Getters and Setters 
// - used to modify and access a class property
// - easy to use outside, but has logic inside tp change
// - we can access private and protected properties too
class MyClass{
    private _myVar:number =0;
    get myVar():number{
        return this._myVar
    }
    set myVar(value:number){
        if(value<0) throw new Error("Not Valid");
        this._myVar = value;
    }
}
const instance = new MyClass();
// console.log(instance.myVar);
instance.myVar=100 // -> using setter
// console.log(instance.myVar);


// INTERFACE
// - shape for object
// - lists must have props and their types
// - structure is enforced
// - also for shapes of functions and classes

// Interface for a function
interface MathOperation{
    (x: number, y:number):number;
}
const add: MathOperation= (a, b)=>a+b;
// console.log(add(23, 34));

// Interface for a Class
interface Drive{
    start():void;
    stop():void;
}
class Vehicle implements Drive{
    start(){
        console.log("Vehicle started driving");
    }
    stop(){
        console.log("Vehicle stopped driving");
    }
}
const car = new Vehicle();
// car.start()
// car.stop()

// Interface for object
interface Movie{
    readonly name:string;
    rating?:number; // optional property
}
const newOne:Movie={name:"!", rating:3.4};
// console.log(newOne.rating);
const oldOne:Movie={name:"?"};
// console.log(oldOne);

// Extends
interface A{
    name:string,
    names(val:number):number;
}
interface B extends A{
    list : string[];
}
const b:B ={
    name:"Main",
    list:['A','B'],
    names(value){
        return this.list.length-value;
    },
} 

// Declaration merging
// original
interface Car{
    name:string;
    year:number;
}
// merging
interface Car{
    model:string;
    start():void;
}
const myCar: Car = {
    name:"A",
    year:1001,
    model:"+1",
    start(){
        console.log("started");
    }
}
// myCar.start()
// console.log(myCar.model);


// GENERICS
// - makes reusable classes, functions and interfaces
// - works with different types, reducing re-writing of code

// generic function
function print<T>(x:T) {
    console.log(x);
}
// print<string>("hello")
// print<number>(23)

function returnBoth<T,U>(x:T, y:U):[T, U]{
    return [x,y];
}
// console.log(returnBoth<number, string>(5, "av")[1]);

interface Dog2{
    name:string,
    age:number
}
const c:Dog2 ={name:"A", age:19} 
// print<Dog2>(c);

function filterArray<T>(array:T[], condition:(item:T)=>boolean):T[]{
    return array.filter((item)=>condition(item))
}
let numArray =[1,2,3,4];
let evenNums = filterArray<number>(numArray, item=>item%2==0)
// console.log(evenNums);

let charArray =["ABBa", "aa", "a", "abdkia"];
let shortStrs = filterArray<string>(charArray, item=>item.length<4);
// console.log(shortStrs);

interface Fruit {
    name: string;
    color: string;
}

const fruitArray: Fruit[] = [
{ name: "Apple", color: "Red" },
{ name: "Banana", color: "Yellow" },
{ name: "Cherry", color: "Red" },
];

const redFruits = filterArray<Fruit>(
fruitArray,
(fruit) => fruit.color === "Red"
);
console.log(redFruits);


// Generic classes
class Box<T>{
    private value:T;
    constructor(value:T){
        this.value=value
    }
    getContent():T{
        return this.value;
    }
    setContent(val:T):void{
        this.value=val;
    }
}

const numBox = new Box<number>(17);
// console.log(numBox.getContent());
numBox.setContent(10)
// console.log(numBox.getContent());


// TYPE NARROWING
// - refine variable type with conditionals, improved type safe programming

// 1) Type Guard - typeof operator
type MyType = number|string;
function example(param:MyType) {
    if(typeof param==="string") console.log(param.toUpperCase());
    if(typeof param==="number") console.log(param.toExponential(2));
}
// example(90);
// example("kola")

// 2) instanceof operator ->to check an object is of class or constructor
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
// 3) Intersection Types - to combine multiple types to single type using `&` operator
