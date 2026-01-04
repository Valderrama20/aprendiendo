function displayAlert(message: string | number) {
  alert(`The message is ${message}`);
}

function sum(input: number[]): number {
  let total: number = 0;
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

function addNumbers(x: number, y: number): number {
  return x + y;
}

addNumbers(1, 2); // Returns 3
// addNumbers(1); // Returns an error

// Parámetros opcionales

function addNumbers2(x: number, y?: number): number {
  if (y === undefined) {
    return x;
  } else {
    return x + y;
  }
}

addNumbers2(1, 2); // Returns 3
addNumbers2(1); // Returns 1

// Parámetros predeterminados

function addNumbers3(x: number, y = 25): number {
  return x + y;
}

addNumbers3(1, 2); // Returns 3
addNumbers3(1); // Returns 26

// Parámetros de descanso

let addAllNumbers = (
  firstNumber: number,
  ...restOfNumbers: number[]
): number => {
  let total: number = firstNumber;
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
// addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5

// Parámetros de objetos deconstruidos

interface Message {
  text: string;
  sender: string;
}

function displayMessage({ text, sender }: Message) {
  console.log(`Message from ${sender}: ${text}`);
}

displayMessage({ sender: "Christopher", text: "hello, world" });

// ---------Ejercicio---------------

let addThreeNumbers = (x: number, z: number, y?: number): number => {
  return y == undefined ? x + z : x + z + y;
};

let subtractThreeNumbers = (x: number, y: number, z = 100): number => x - y - z;

subtractThreeNumbers(10, 20); // returns -110 because 'z' has been assigned the value 100
subtractThreeNumbers(10, 20, 15); // returns -25

// Definir tipos de funciones

// type calculator = (x: number, y: number) => number;
interface calculator {
  (x: number, y: number): number;
}
let addNumbers4: calculator = (u, p) => u + p;
let subtractNumbers: calculator = (x, y) => x - y;

let doCalculation = (operation: "add" | "subtract"): calculator => {
  return operation === "add" ? addNumbers : subtractNumbers;
};
