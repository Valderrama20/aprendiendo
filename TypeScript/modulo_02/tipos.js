"use strict";
// tipos primitivos boolean / number / string / enum / void / null / undefined
//  tipos de objetos class / interface / array / literals
// parametros de tipos
// tipos bolean
let flag;
let yes = true;
let no = false;
//  tipos numeros  y BigInteger
let x;
let y = 0;
let z = 123.456;
let big = 100n;
// tipo string
let s;
let empty = "";
let abc = "abc";
let firstName = "Mateo";
let sentence = `My name is ${firstName}.
    I am new to TypeScript.`;
// enumeraciones
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 10] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 11] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 12] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
// any evitar su uso y unknown
// El unknown tipo es similar al any tipo en que cualquier valor se puede asignar al tipo unknown.
//  Sin embargo, no puede acceder a ninguna propiedad de un unknowntipo, ni puede llamarlas ni
//  construirlas.
let randomValue = 10;
randomValue = "Mateo"; // OK
randomValue = true; // OK
console.log(randomValue.name); // Logs "undefined" to the console
randomValue(); // Returns "randomValue is not a function" error
randomValue.toUpperCase(); // Returns "randomValue is not a function" error
// asercion de tipo
let randomValue2 = 10;
randomValue2 = true;
randomValue2 = "Mateo";
if (typeof randomValue2 === "string") {
    console.log(randomValue2.toUpperCase()); //* Returns MATEO to the console.
}
else {
    console.log("Error - A string was expected here."); //* Returns an error message.
}
// Tipos de unión
let multiType;
multiType = 20; //* Valid
multiType = true; //* Valid
let newManager = {
    employeeID: 12,
    age: 21,
    stockPlan: true,
};
let myResult;
myResult = "pass";
myResult = "fail";
// myResult = "mundo"; error
// matrices
let list = [1, 4, 6];
let list2 = [1, 6, 4];
// tuplas
let person = ["jose", 21];
