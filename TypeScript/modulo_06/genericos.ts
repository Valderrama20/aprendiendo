function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25); // OK
// numberArray.push('This is not a number');  // Generates a compile time type check error

let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits"); // OK
// stringArray.push(30);                      // Generates a compile time type check error

// Multiples tipos de variables

function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

// let returnNumber = identity<number, string>(100, "Hello!");
// let returnString = identity<string, string>("100", "Hola!");
// let returnBoolean = identity<boolean, string>(true, "Bonjour!");

// returnNumber = returnNumber * 100; // OK
// returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
// returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'

// Usar restricciones genéricas para limitar tipos

type ValidTypes = string | number;

function identity2<T extends ValidTypes, U>(value: T, message: U) {
  let result: ValidTypes = "";
  let typeValue: string = typeof value;

  if (typeof value === "number") result = value + value;
  else if (typeof value === "string") result = value + value;

  console.log(
    `The message is ${message} and the function returns a ${typeValue} value of ${result}`
  );

  console.log(message);
  return result;
}

let numberValue = identity<number, string>(100, "Hello");
let stringValue = identity<string, string>("100", "Hello");

console.log(numberValue); // Returns 200
console.log(stringValue); // Returns 100100
//

function getPets<T, K extends keyof T>(pet: T, key: K) {
  return pet[key];
}

let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish" };

console.log(getPets(pets1, "fish")); // Returns 6
// console.log(getPets(pets2, "3"));     // Error

// interfaces genericas

interface Identity<T, U> {
  value: T;
  message: U;
}

let returnNumber: Identity<string, number> = {
  value: "jose",
  message: 21,
};

let returnString: Identity<number, string> = {
  value: 21,
  message: "jose",
};

// funciones genericas

interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}

function processIdentity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, "Hello!"); // OK
// let returnString1 = processor('Hello!', 100);   // Type check error

// Implementar genéricos con tipos y clases personalizados.

class Car {
  make: string = "Generic Car";
  doors: number = 4;
}
class ElectricCar extends Car {
  make = "Electric Car";
  doors = 4;
}
class Truck extends Car {
  make = "Truck";
  doors = 2;
}
function accelerate<T extends Car>(car: T): T {
  console.log(`All ${car.doors} doors are closed.`);
  console.log(`The ${car.make} is now accelerating!`);
  return car;
}

let myElectricCar = new ElectricCar();
accelerate<ElectricCar>(myElectricCar);
let myTruck = new Truck();
accelerate<Truck>(myTruck);
