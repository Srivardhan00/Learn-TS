/// Annotations
// let var : type = value
// Strings
let x : string = "90";
// Number
let y: number = 80;
// Boolean
let valid:boolean = false

/// Annotation - auto determining, based on assignment
let z = "str"
// console.log(typeof z);
// Error => z = 89


/// ANY type - allows any value
let any: any = "a";
any.toUpperCase()
any = 100
any = false
// any()
// console.log(typeof any); // boolean

/// Function Parameter Annotation
function getTwice(a:string) {
    return a+a; // err if boolean
}
const multiply = (x:number, y:number)=>x*y;


// let printIt = (a)=>console.log(a); => ERROR
// Here `a` has implicitly type as any, but wont execute unless you specify the type
let printIt = (a:any)=>console.log(a);
// printIt("cool")
// printIt(1000)
// We need to maintain parameter count and is must, when function is called


/// Default Params and Return Values
function greet(name:string = "Anonymous"):string {
    return `Hello ${name}`;
}
// console.log(greet("ABH"),greet());
let sqr = (x:number): number=>x*x;
// console.log(sqr(90));


// Void type - absence, that doesn't return anything 
let av = ():void=>console.log("hi");
// av()


// Never type- will not return anything / code will never reach
function throwErr():never {
    throw new Error("Never Reach ")
}
let neverUsed : never; // error when assigned something

// Arrays
// - [] Notation
const li: number[]=[];
li.push(22)
// console.log(li);
// - Array<type>
const li2: Array<number> =[];
li2.push(22)
// console.log(li2);

// Multi-D array
const li3: number[][] = [[2,3,4], [1,2]];
li3.flat(2)
// console.log(li3);


// Object
// - object itself can be a type
// - we can use interface or type alias
// - properties should match and also the types
const person :{name:string} = {name:"ABC"};
function returnPerson(): {name: string}{
    return {
        name: "aij"
    }
}
// console.log(returnPerson(), person.name);


// TYPE ALIAS
// define custom type using type keyword, we refer other types
// type MyType = string;
type User ={
    name: string,
    age: number
}
const user:User = {name:"AA", age:21};
const printUser= (person:User): void =>console.log(person);
// printUser(user)


// Optional Property
type User2={
    name: string,
    sal?:number, // optional
    readonly location :string
}
// we can only read but not change the readonly prop value
const user2:User2 = {name:"AA", location:"A"};
// user2.location= "B" -> ERROR
const printUser2= (person:User2): void =>console.log(person.name, (person.sal)?person.sal:"", person.location);
// printUser2(user2)


// Intersection Type
// - combine multiple types into a single type that includes all props and methods of each included type
// - denoted by `&` symbol
type Combo = User&User2;
const user1: Combo = {name:"aa", age:89, location:"br"}
// console.log(user1);

// const user1: User&User2 = {name:"aa", age:89, location:"br"}
// console.log(user1);


// Unions
// - type that can have only one of several types
// - the variable can accept multiple types, use `|` symbol
let pass: string|number;
pass=900;
pass="Hi";
const items: (number|string)[] = [67, "AA", 199, "11", "18ja"];
let user3 : User|User2={
    name:"Ab",
    age:19,
    location:"BN"
}


// Literal Type
// - have a specific value
let isTrue :true;
isTrue = true;
// isTrue = false -> Invalid

let choice :1|2|3;
choice = 2;
// choice = 4 -> Invalid

let col : "a"|"b"|"c";
// col="ah" -> Invalid


// TUPLEs
// - array with fixed number of elements- each of its own type
// - order should be maintained, finite sequence 
let myTuple :[number, string];
myTuple=[ 89, "Aa"];
let value = myTuple[0];
let [val, names] = myTuple;


// Enums - set of named constants
// default starts with 0
enum weather{
    Sunny, Rainy, Windy, Cloudy
}
// with initializer
enum weather2{
    Sunny="sunny", Rainy="rainy", Windy="windy", Cloudy="cloudy"
}
// console.log(weather.Sunny, weather2.Sunny);
let currWeather:number = weather.Sunny;
let cur2:string = weather2.Sunny;
// console.log(cur2, currWeather);