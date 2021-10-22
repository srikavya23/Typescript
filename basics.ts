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
// a = { name: "pavan" };
// a = [1, 2, 3];
// a = 10;
// a = "sdlfk";
// a = { name: "pavan" };
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }
//5.Arrays
let students = [1, 2, 3];
students = [10];
let teachers = ["pavan"];
teachers = ["david"];
let users = [];
users = [10, "sadf"];
//6.Tuples
//Tuple --> with tuple you can specify the exact types inside array
let person1: [number, string, boolean] = [1, 'ben', true] // ['ben', true,1] --> it gives error because you'veto give it order as you mentioned

//Tuple array
let employee: [number, string] [] // [] for array

employee = [    // we can write array inside array
    [1, 'ben'],
    [2, 'john'],
    [3, 'david'],
]

//Union
//--> if you want to a particulaar variable to be hold more than one type you can do that with union.

let pid: string | number

pid = 22 //as number  or pid = '22' as string also it would work.
pid = "pavan"
//8.Enum
const RED = "Red";
const BLUE = "Blue";
enum Colors{
    RED = "red",
    BLUE = "blue",
    GREEN = "green"
}
console.log(Colors.RED)

//9.Objects

// Object is an instance which contains set of key value pairs
// const user = {
//     id: 1,
//     name: 'ben'
// }
// if u want to add types to above values we can do that
type User ={
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'ben'
}

//10.Type Assertion
let username: unknown = "Vivek";
let userId: number = <number>username;
let userNames: string = <string>username;

// let customerId = <number>cid  we cn do this other way
let customerId = username as number

//11.null, undefined
let abc: null = null;
let noValue: undefined = undefined;