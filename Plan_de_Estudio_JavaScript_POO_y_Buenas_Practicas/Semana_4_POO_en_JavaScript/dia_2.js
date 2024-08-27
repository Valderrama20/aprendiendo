// Herencia y Polimorfismo

// Herencia

// La herencia es un principio fundamental de la Programación Orientada a Objetos (POO)
// que permite a una clase (llamada subclase o clase hija) heredar propiedades y métodos
// de otra clase (llamada superclase o clase base). Esto facilita la reutilización de código,
//  ya que se pueden crear nuevas clases basadas en clases existentes, extendiendo su
//  funcionalidad sin necesidad de reescribir código.

// Características principales de la herencia:

// Características principales de la herencia:

// Reutilización de código:

// 1- Permite que una subclase reutilice métodos y propiedades de la superclase.
// 2- Jerarquía de clases: Establece una relación "es un/a" (is-a) entre clases,
// donde la subclase es una versión más específica de la superclase.
// 3- Extensibilidad: Se pueden agregar o sobrescribir métodos en la subclase,
//  extendiendo o modificando el comportamiento de la superclase.

// Polimorfismo

// El polimorfismo permite que objetos de diferentes clases relacionadas por
//  herencia puedan ser tratados como si fueran del mismo tipo. Esto significa
//  que una misma operación puede tener diferentes comportamientos según el objeto
//  que la realice.

// Tipos de polimorfismo:

// Polimorfismo de sobrecarga:

// 1- El mismo método puede ser utilizado con diferentes números o tipos de parámetros.
// 2-Polimorfismo de sobreescritura (overriding): Una subclase puede redefinir un método
// heredado de la superclase para cambiar su comportamiento.
// 3- Polimorfismo a través de interfaces: En lenguajes que soportan interfaces,
// diferentes clases pueden implementar la misma interfaz, lo que permite tratar
//  a objetos de esas clases de manera uniforme.

// Ejemplo Práctico

// Clase base: Persona

// La clase Persona contiene atributos y métodos comunes que todas las personas comparten,
//  como nombre, edad, y un método saludar.

// Clase derivada: Empleado

// La clase Empleado hereda de Persona, pero además añade propiedades específicas de un
//  empleado, como puesto y salario, así como un método trabajar.

// ---------Ejercicio Avanzado: Sistema de Gestión de Vehículos

// El ejercicio consiste en implementar un sistema de gestión de vehículos donde aplicarás
// conceptos de herencia, polimorfismo, y encapsulamiento. Este sistema permitirá administrar
// diferentes tipos de vehículos y simular su comportamiento.

// Requisitos:

// Clase base: Vehiculo

// - Atributos comunes: marca, modelo, año.
// - Método: encender() que imprime un mensaje genérico indicando que el vehículo está encendido.
// - Método: apagar() que imprime un mensaje indicando que el vehículo está apagado.

//  Clases derivadas:

// - Auto: Hereda de Vehiculo. Tiene atributos adicionales como cantidadPuertas.
//  - Método: tocarBocina() que imprime un sonido de bocina.
// - Moto: Hereda de Vehiculo. Tiene atributos adicionales como tipoManillar.
//  - Método: hacerCaballito() que imprime un mensaje indicando que la moto está haciendo un caballito.
// - Camion: Hereda de Vehiculo. Tiene atributos adicionales como capacidadCarga.
//  - Método: cargar() y descargar() que simulan la acción de cargar o descargar el camión.

// -Polimorfismo:

// - Implementa un método moverVehiculo() que acepte un vehículo como parámetro y
// simule que se mueve (puedes simplemente imprimir un mensaje). Este método debe funcionar
//  independientemente del tipo de vehículo (Auto, Moto o Camion).
// - Sobrescribe el método encender() en cada clase derivada (Auto, Moto, Camion)
//  para que el mensaje varíe según el tipo de vehículo.

// Gestor de Vehículos:

// Implementa una clase GestorVehiculos que administre una lista de vehículos.
// Métodos:
// agregarVehiculo() para añadir un vehículo a la lista.
// mostrarVehiculos() para listar todos los vehículos con su información (marca, modelo, año).
// moverTodos() que llame al método moverVehiculo() para todos los vehículos en la lista.

class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  encerder() {
    console.log("El vehiculo esta prendido");
  }
  apagar() {
    console.log("El vehiculo esta apagado");
  }
}

class Auto extends Vehiculo {
  tipoDeVehiculo = "auto";
  constructor(marca, modelo, año, cantidadPuertas) {
    super(marca, modelo, año);
    this.cantidadPuertas = cantidadPuertas;
  }
  encerder() {
    console.log("El Auto esta prendido");
  }

  tocarBocina() {
    console.log("PIIIIIIII");
  }
}

class Moto extends Vehiculo {
  tipoDeVehiculo = "Moto";
  constructor(marca, modelo, año, tipoManillar) {
    super(marca, modelo, año);
    this.tipoManillar = tipoManillar;
  }

  encerder() {
    console.log("La moto esta prendido");
  }

  hacerCaballito() {
    console.log("La moto esta haciendo caballito");
  }
}

class Camion extends Vehiculo {
  tipoDeVehiculo = "Camion";
  constructor(marca, modelo, año, capacidadCarga) {
    super(marca, modelo, año);
    this.capacidadCarga = capacidadCarga;
  }

  encerder() {
    console.log("El Camion esta prendido");
  }

  cargar() {
    console.log("Cargando el camion");
  }
  descargar() {
    console.log("Descargando el camion");
  }
}

class GestorVehiculos {
  vehiculos = [];

  agregarVehiculo(vehiculo) {
    this.vehiculos.push(vehiculo);
  }
  mostrarVehiculos() {
    if (this.vehiculos.length) {
      for (let vehiculo of this.vehiculos) {
        console.log(
          `Su marca es ${vehiculo.marca}, su modelo es ${vehiculo.modelo} y su año es ${vehiculo.año}`
        );
      }
    } else console.log("No hay vehiculos para mostrar");
  }

  moverVehiculo(vehiculo) {
    console.log(`Este vehiculo ${vehiculo.tipoDeVehiculo} se esta moviendo`);
  }
  moverTodos() {
    if (this.vehiculos.length) {
      for (let vehiculo of this.vehiculos) {
        this.moverVehiculo(vehiculo);
      }
    } else console.log("No hay vehiculos para mover");
  }
}

// Pruebas
let auto = new Auto("Toyota", "Corolla", 2020, 4);
let moto = new Moto("Yamaha", "R1", 2019, "Deportivo");
let camion = new Camion("Volvo", "FH16", 2021, 20000);

// Verificar atributos
console.log(auto.marca); // Debe imprimir "Toyota"
console.log(moto.tipoManillar); // Debe imprimir "Deportivo"
console.log(camion.capacidadCarga); // Debe imprimir 20000

// Verificar métodos
auto.encerder(); // Debe imprimir "El Auto está prendido"
moto.hacerCaballito(); // Debe imprimir "La moto está haciendo caballito"
camion.cargar(); // Debe imprimir "Cargando el camión"

let gestor = new GestorVehiculos();

// Agregar vehículos al gestor
gestor.agregarVehiculo(auto);
gestor.agregarVehiculo(moto);
gestor.agregarVehiculo(camion);

// Mostrar los vehículos agregados
gestor.mostrarVehiculos();
// Debe imprimir los detalles de cada vehículo agregado

// Mover un vehículo específico
gestor.moverVehiculo(auto);
// Debe imprimir "Este vehículo auto se está moviendo"

// Mover todos los vehículos
gestor.moverTodos();
// Debe imprimir "Este vehículo auto se está moviendo",
// "Este vehículo moto se está moviendo", "Este vehículo camión se está moviendo"

auto.encerder(); // Debe imprimir "El Auto está prendido"
moto.encerder(); // Debe imprimir "La moto está prendida"
camion.encerder(); // Debe imprimir "El Camion está prendido"
