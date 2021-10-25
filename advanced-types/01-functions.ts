//1.functions
export{};
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