"use strict";
function displayAlert(message) {
    alert(`The message is ${message}`);
}
function sum(input) {
    let total = 0;
    for (let count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
// ---------Parámetros requeridos-------------
// todos los parametros obligatorios
function addNumbers(x, y) {
    return x + y;
}
addNumbers(1, 2); // Returns 3
// addNumbers(1); // Returns an error
// Parámetros opcionales
function addNumbers2(x, y) {
    if (y === undefined) {
        return x;
    }
    else {
        return x + y;
    }
}
addNumbers2(1, 2); // Returns 3
addNumbers2(1); // Returns 1
// Parámetros predeterminados
function addNumbers3(x, y = 25) {
    return x + y;
}
addNumbers3(1, 2); // Returns 3
addNumbers3(1); // Returns 26
// Parámetros de descanso
let addAllNumbers = (firstNumber, ...restOfNumbers) => {
    let total = firstNumber;
    for (let counter = 0; counter < restOfNumbers.length; counter++) {
        if (isNaN(restOfNumbers[counter])) {
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
};
addAllNumbers(1, 2, 3, 4, 5, 6, 7); // returns 28
addAllNumbers(2); // returns 2
function displayMessage({ text, sender }) {
    console.log(`Message from ${sender}: ${text}`);
}
displayMessage({ sender: "Christopher", text: "hello, world" });
// ---------Ejercicio---------------
let addThreeNumbers = (x, z, y) => {
    return y == undefined ? x + z : x + z + y;
};
let subtractThreeNumbers = (x, y, z = 100) => x - y - z;
subtractThreeNumbers(10, 20); // returns -110 because 'z' has been assigned the value 100
subtractThreeNumbers(10, 20, 15); // returns -25
let addNumbers4 = (u, p) => u + p;
let subtractNumbers = (x, y) => x - y;
let doCalculation = (operation) => {
    return operation === "add" ? addNumbers : subtractNumbers;
};
