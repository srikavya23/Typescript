"use strict";
//1.string
let message = "Hello World!";
message = "Hello";
//2.number
let age = 20;
age = 10;
//3.boolean
let isAdmin = true;
isAdmin = false;
//4.any
let a = 10;
// a = "hello";
// a = 20;
// a = { name: "Venkatesh" };
// a = [1, 2, 3];
// a = 10;
// a = "sdlfk";
// a = { name: "vivek" };
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }
//5.Arrays
let students = [1, 2, 3];
students = [10];
let teachers = ["vivek"];
teachers = ["venkatesh"];
let users = [];
users = [10, "sadf"];
//6.Tuples
let user = ["venkatesh", 20];
user = ["Vivek", 10];
let userData = [];
userData = [["vivek", 20], ["venkatesh", 10]];
//7.Union
let person;
person = "Venkatesh";
person = 20;
//8.Enum
const RED = "Red";
const BLUE = "Blue";
var Colors;
(function (Colors) {
    Colors["RED"] = "Red";
    Colors["BLUE"] = "Blue";
    Colors["GREEN"] = "Green";
})(Colors || (Colors = {}));
console.log(Colors.RED);
let car = {
    name: "Telsa",
    price: 100
};
car.name = "Audi";
//10.Type Assertion
let username = "Vivek";
let userId = username;
let userNames = username;
let firstname = username;
//11.null, undefined
let abc = null;
let noValue = undefined;