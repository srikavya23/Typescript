//3.Unknown vs Any
export{};
let userage: unknown = 10;
let userage2: number = <number>userage;
let userage3: any = 20;
let userage4: string = userage3;