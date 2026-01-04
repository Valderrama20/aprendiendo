interface Vehicle {
  make: string;
  color: string;
  doors: number;
  accelerate(speed: number): string;
  brake(): string;
  turn(direction: "left" | "right"): string;
}

class Car implements Vehicle {
  // Properties
  private static numberOfCars: number = 0; // New static property
  private _make: string;
  private _color: string;
  private _doors: number;
  // Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    this._doors = doors;
    Car.numberOfCars++; // Increments the value of the static property
  }
  // Accessors
  get make() {
    return this._make;
  }
  set make(make) {
    this._make = make;
  }
  get color() {
    return "The color of the car is " + this._color;
  }
  set color(color) {
    this._color = color;
  }
  get doors() {
    return this._doors;
  }
  set doors(doors) {
    if (doors % 2 === 0) this._doors = doors;
    else throw new Error("Doors must be an even number");
  }
  // Methods
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`;
  }
  brake(): string {
    return `${this.worker()} is braking with the standard braking system.`;
  }
  turn(direction: "left" | "right"): string {
    return `${this.worker()} is turning ${direction}`;
  }
  static getNumberOfCars(): number {
    return Car.numberOfCars;
  }
  protected worker(): string {
    return this._make;
  }
}

let myCar = new Car("20", "red", 10);
let myCar2 = new Car("Galaxy Motors", "red", 3);
let myCar3 = new Car("Galaxy Motors", "gray");

// console.log(myCar._color)
// console.log(myCar.color)
// console.log(myCar3.color)
// console.log(Car.getNumberOfCars())

// extencion de clases

class ElectricCar extends Car {
  // Properties unique to ElectricCar
  private _range: number;
  // Constructor
  constructor(make: string, color: string, range: number, doors = 2) {
    super(make, color, doors);
    this._range = range;
  }

  // Accessors
  get range() {
    return this._range;
  }
  set range(range) {
    this._range = range;
  }

  // Methods
  charge() {
    console.log(this.worker() + " is charging.");
  }
  brake(): string {
    return `${this.worker()}  is braking with the regenerative braking system.`;
  }
}

let spark = new ElectricCar("Spark Motors", "silver", 124, 2);
let eCar = new ElectricCar("Electric Car Co.", "black", 263);
console.log(eCar.doors); // returns the default, 2
spark.charge(); // returns "Spark Motors is charging"
console.log(spark.brake());

// modificadores de acceso

// public: este es defaul
// private: con este no se podra acceder a la propiedad desde afuera de la clase
// protected: es muy parecido a private la diferencia es que sus herederos tambien podran
// usar ese metodo
