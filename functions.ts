//1.functions
function sum(a, b, c?) {
    return a + b;
}
sum(10, 20);
function log(message) {
    console.log(message);
}
log("Hello");
function error() {
    throw new Error("Network Error");
}
let mobile = {
    title: "Redmi",
    price: 2000
};
let addition = (a, b, c) => a + b + c;
let sub = (a, b, c) => a - b - c;
let user2 = {
    name: "Pavan",
    age: 20
};
//3.Unknown vs Any
let userage = 10;
let userage2 = userage;
let userage3 = 20;
let userage4 = userage3;
class Human {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }
}
class David extends Human {
    constructor(name, age, profession, city) {
        super(name, age, profession);
        this.city = city;
    }
    changeAge(age) {
        this.age = age;
    }
}
let David = new Human("David", 20, "DevOps");
let David2 = new David("David ", 20, "Full stack", 10);
//5.Generics
function createItems(items) {
    return new Array().concat(items);
}
let numberArray = createItems([1, 2, 3]);
let stringArray = createItems(["Pavan", "David"]);