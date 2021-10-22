//1.functions
function sum(a:number, b:number, c?:number):number {
    return a + b;
}
sum(10, 20)

function log(message: string):void {
    console.log(message)
}
log("Hello")

function error():never {
    throw new Error("Network Error");
}

//2.Interfaces
interface MobileInterface{
    title: string
    price: number
}

let mobile = {
    title: "Redmi",
    price: 2000
}

interface SumFunction{
    (a:number,b:number,c?:number):number
}

let addition: SumFunction = (a:number, b:number, c?:number) => a + b + c;
let sub:SumFunction = (a:number, b:number, c?:number) => a - b - c;

//Custom types
type MobileType = {
    name:string
    age:number
}
type stringType = string|number;
let user2:MobileType = {
    name: "Pavan",
    age: 20
}

//3.Unknown vs Any
let userage: unknown = 10;
let userage2: number = <number>userage;
let userage3: any = 20;
let userage4: string = userage3;

//4.Classes

class Human {
    // private name: string
    // protected age: number
    // public profession: string
    name: string
    age: number
    profession: string
    constructor(name:string, age:number, profession:string) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }
}

class david extends Human {
    city:number
    constructor(name:string, age:number, profession:string, city) {
        super(name, age, profession);
        this.city = city;
    }
    changeAge(age) {
        this.age = age;
    }
}
let David = new Human("David", 20, "DevOps");
let David2 = new david("David ", 20, "Full stack", 10);

//5.Generics

function createItems(items:any[]):any[] {
    return new Array().concat(items);
}
let numberArray = createItems([1, 2, 3]);
let stringArray = createItems(["Pavan", "David"]);

// function createItems<Type>(items:Type[]):Type[] {
//     return new Array().concat(items);
// }
// let numberArray = createItems<number>([1, 2, 3]);
// let stringArray = createItems<string>(["Pavan", "David"]);