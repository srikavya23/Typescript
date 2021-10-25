//4.Classes
export{};

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
    constructor(name:string, age:number, profession:string) {
        super(name, age, profession);
    }
    changeAge(age:number) {
        this.age = age;
    }
}
let David = new Human("David", 20, "DevOps");