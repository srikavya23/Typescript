//2.Interfaces
export{};
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