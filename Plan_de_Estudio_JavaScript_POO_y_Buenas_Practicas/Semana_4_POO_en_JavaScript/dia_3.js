// Encapsulación y Abstracción

// Encapsulación:

//     - La encapsulación es un principio de la programación orientada a objetos que se
//       refiere a la idea de agrupar datos (atributos) y comportamiento (métodos) en una
//       sola unidad, que es la clase.

//     - El objetivo es restringir el acceso directo a los datos de un objeto,
//       permitiendo que sean manipulados solo a través de métodos públicos definidos.

//     - En JavaScript, la encapsulación se puede lograr usando la convención de
//       nomenclatura (como prefijar atributos con un guion bajo _) o con la introducción
//       de # (nueva sintaxis de ES6) para denotar atributos y métodos privados.

// Abstracción:

//    - La abstracción consiste en ocultar detalles complejos de la implementación
//      interna y exponer solo las características esenciales a través de una
//      interfaz pública.

//    - Esto permite a los usuarios de la clase trabajar con una representación
//      simplificada del objeto sin preocuparse por los detalles de bajo nivel.

// Practica

class Person {
  #name;
  #age;
  #email;
  constructor(name, age, email) {
    this.#name = name;
    this.setEmail(email);
    this.setEdad(age);
  }

  getName() {
    return this.#name;
  }
  setNombre(name) {
    this.#name = name;
  }
  getEdad() {
    return this.#age;
  }
  setEdad(edad) {
    edad > 0
      ? (this.#age = edad)
      : console.log("Tiene que ser mayor de 0 años");
  }
  getEmail() {
    return this.#email;
  }
  setEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailRegex.test(email)
      ? (this.#email = email)
      : console.error("El formato del correo electrónico no es válido.");
  }
}

const person1 = new Person("jose", 21, "jose23122009@gmail.com");
