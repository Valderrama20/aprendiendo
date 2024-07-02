// tipos primitivos boolean / number / string / enum / void / null / undefined
//  tipos de objetos class / interface / array / literals
// parametros de tipos

// tipos bolean pepe

let flag: boolean;
let yes = true;
let no = false;

//  tipos numeros  y BigInteger

let x: number;
let y = 0;
let z: number = 123.456;
let big: bigint = 100n;

// tipo string

let s: string;
let empty = "";
let abc = "abc";

let firstName: string = "Mateo";
let sentence: string = `My name is ${firstName}.
    I am new to TypeScript.`;

// enumeraciones

enum ContractStatus {
  Permanent = 10,
  Temp,
  Apprentice,
}

let employeeStatus: ContractStatus = ContractStatus.Temp;

// any evitar su uso y unknown

// El unknown tipo es similar al any tipo en que cualquier valor se puede asignar al tipo unknown.
//  Sin embargo, no puede acceder a ninguna propiedad de un unknowntipo, ni puede llamarlas ni
//  construirlas.

let randomValue: any = 10;
randomValue = "Mateo"; // OK
randomValue = true; // OK

console.log(randomValue.name); // Logs "undefined" to the console
randomValue(); // Returns "randomValue is not a function" error
randomValue.toUpperCase(); // Returns "randomValue is not a function" error

// asercion de tipo

let randomValue2: unknown = 10;

randomValue2 = true;
randomValue2 = "Mateo";

if (typeof randomValue2 === "string") {
  console.log((randomValue2 as string).toUpperCase()); //* Returns MATEO to the console.
} else {
  console.log("Error - A string was expected here."); //* Returns an error message.
}

// Tipos de unión

let multiType: number | boolean;
multiType = 20; //* Valid
multiType = true; //* Valid
// multiType = "twenty"; //* Invalid

// Tipos de intersecciones

interface Employee {
  employeeID: number;
  age: number;
}

interface Manager {
  stockPlan: boolean;
}

type ManagementEmployee = Employee & Manager;

let newManager: ManagementEmployee = {
  employeeID: 12,
  age: 21,
  stockPlan: true,
};

// tipos literales

type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;

myResult = "pass";
myResult = "fail";
// myResult = "mundo"; error

// matrices

let list: number[] = [1, 4, 6];

let list2: Array<number> = [1, 6, 4];

// tuplas

let person: [string, number] = ["jose", 21];
