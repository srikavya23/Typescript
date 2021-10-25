//10.Type Assertion
export{};
let username: unknown = "Vivek";
let userId: number = <number>username;
let userNames: string = <string>username;

// let customerId = <number>cid  we cn do this other way
let customerId = username as number