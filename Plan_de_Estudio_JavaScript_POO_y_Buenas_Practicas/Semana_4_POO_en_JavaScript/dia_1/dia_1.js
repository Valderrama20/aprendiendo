// Fundamentos de POO

const { title } = require("process");

// La Programación Orientada a Objetos (POO) es un paradigma de programación basado en el
// concepto de "objetos". Un objeto es una instancia de una clase, y puede contener datos
// (propiedades o atributos) y funcionalidades (métodos o funciones). La POO se centra en
// organizar el código en torno a estos objetos, lo que facilita la reutilización, el
// mantenimiento y la comprensión del código.

// 1. Clases

// Una clase es una plantilla o molde a partir de la cual se crean objetos. Define
// las propiedades y métodos que tendrán los objetos basados en esa clase. Una clase
// en POO se puede comparar con un "plano" que especifica cómo deben construirse los
// objetos.

// Ejemplo:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

//  En este ejemplo, Persona es una clase con un constructor que inicializa las propiedades
//  nombre y edad.

// 2. Objetos

// Un objeto es una instancia de una clase. Es decir, es una representación concreta de la
// clase con valores específicos para sus propiedades.

const person1 = new Person("Jose", 21);

// Aquí, persona1 es un objeto de la clase Person con las propiedades name igual a
// "jose" y age igual a 21.

// 3. Propiedades

//  Las propiedades son variables asociadas a una clase y sus objetos. En POO,
//  las propiedades se utilizan para almacenar el estado o la información del objeto.

// En el ejemplo anterior, name y age son propiedades de la clase Persona.

// 4. Métodos

// Los métodos son funciones asociadas a una clase y sus objetos. Los métodos definen el
// comportamiento de los objetos, es decir, lo que los objetos pueden hacer.

// Ejemplo

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  saludar() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Aquí, saludar es un método de la clase Person2 que imprime un mensaje en la consola.

// 5. Encapsulamiento

// El encapsulamiento es el principio de restringir el acceso directo a los datos de un
// objeto y proporcionar métodos para interactuar con esos datos. Esto se hace para proteger
// los datos internos del objeto y controlar cómo se accede y modifica.

// En JavaScript, podemos usar la convención de guiones bajos _ para indicar que una propiedad
// es "privada" (aunque esto es solo una convención y no una restricción real).

class Person3 {
  constructor(name, age) {
    this._name = name;
    this.age = age;
  }

  getName() {
    return this._name;
  }
}

// 6. Herencia

// La herencia permite que una clase derive de otra, heredando sus propiedades y métodos.
// Esto promueve la reutilización del código. La clase que hereda se llama subclase, y la
// clase de la que hereda se llama superclase o clase base.

class Empleado extends Person3 {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }

  viewSalary() {
    console.log(`${this._name} gana ${this.salary}`);
  }
}

// En este ejemplo, Empleado es una subclase que hereda de Persona, pero añade una nueva
// propiedad salario.

// 7. Polimorfismo

// El polimorfismo permite que los objetos de diferentes clases se traten de la misma manera
// a través de una interfaz común. En términos simples, significa que una clase derivada
// puede redefinir o sobrescribir métodos de su clase base.

class Person4 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  saludar() {
    console.log("Holaa");
  }
}

class Empleado2 extends Person4 {
  constructor(name, age) {
    super(name, age);
  }

  saludar() {
    console.log("Hola, soy un empleado");
  }
}

const persona = new Person4();
persona.saludar(); // Hola

const empleado = new Empleado2();
empleado.saludar(); // Hola, soy un empleado

// Aquí, la clase Empleado sobrescribe el método saludar de Persona,
// mostrando diferentes mensajes según el tipo de objeto.

// 8. Abstracción

// La abstracción consiste en ocultar los detalles complejos de la implementación y mostrar
// solo la funcionalidad esencial del objeto. En otras palabras, permite a los programadores
//  trabajar con objetos a un nivel más alto, sin preocuparse por los detalles de bajo nivel.

// En JavaScript, la abstracción se puede lograr mediante métodos y propiedades públicos que
// interactúan con el código interno, ocultando los detalles de la implementación.

class Coche {
  constructor(marca) {
    this.marca = marca;
  }

  encerder() {
    console.log("El auto esta encendido");
  }

  // Detalles internos del funcionamiento del motor no son visibles para el usuario
}

// Ejercicio: Sistema de Gestión de Biblioteca

// Descripción:

// Vas a crear un sistema básico de gestión de una biblioteca. El sistema debe permitir a
// los usuarios realizar las siguientes operaciones:

// 1- Registrar y gestionar libros: Los libros tienen un título, autor, ISBN, año de publicación,
//  y una propiedad que indica si el libro está prestado o disponible.

// 2- Registrar y gestionar usuarios: Los usuarios de la biblioteca tienen un nombre, número
//  de identificación, y una lista de libros prestados.

// 3- Prestar libros: Los usuarios pueden tomar prestados libros, pero no pueden tomar más de
//  3 libros a la vez. Cuando un libro se presta, debe cambiar su estado a "prestado" y
//  añadirse a la lista de libros prestados del usuario.

// 4- Devolver libros: Los usuarios pueden devolver libros prestados, y estos deben ser marcados
//  como "disponibles" de nuevo en el sistema.

// 5- Listar libros: El sistema debe permitir listar todos los libros, indicando cuáles están
// disponibles y cuáles están prestados.

// 6- Buscar libros: Los usuarios deben poder buscar libros por título o autor.

// Pasos:
// Crea las clases necesarias:

// Clase Libro: Define las propiedades y métodos relacionados con la gestión de los libros.
// Clase Usuario: Define las propiedades y métodos para gestionar a los usuarios.
// Clase Biblioteca: Esta clase debe manejar el registro de libros y usuarios, así como las
// operaciones de préstamo y devolución.
// Implementa la lógica de negocio:

// Métodos para registrar libros y usuarios.
// Métodos para prestar y devolver libros.
// Métodos para buscar libros.
// Valida las reglas de negocio:

// Asegúrate de que un usuario no pueda tomar más de 3 libros.
// Un libro no puede ser prestado si ya está prestado.
// Prueba el sistema:

// Crea instancias de libros y usuarios.
// Simula el préstamo y la devolución de libros.
// Verifica que las restricciones y reglas se respeten.

class Libro {
  constructor(title, autor) {
    this.title = title;
    this.autor = autor;
    this.disponible = true;
  }

  cambiarDisponibilidad() {
    this.disponible = !this.disponible;
  }
}

class UsuarioBiblioteca {
  myBooks = {};

  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  devolverBook(title) {
    delete this.myBooks[title];
  }

  pedirBook(book) {
    myBooks[book.title] = book;
  }
}

class Biblioteca {
  libros = new Object();
  users = {};

  crearUsuario(name, id) {
    const user = UsuarioBiblioteca(name, id);
    this.users[user.id] = user;
  }

  crearLibro(title, autor) {
    const newBook = new Libro(title, autor);
    this.libros[newBook.title] = newBook;
    console.log(this.libros);
  }

  prestarBook(user, bookTitle) {
    let book = libros[bookTitle];
    if (book && book.disponible) {
      user.pedirBook(book);
      book.cambiarDisponibilidad();
    }
  }

  devovlerBook(user, bookTitle) {
    user.devolverBook(bookTitle);
    book.cambiarDisponibilidad();
  }
}

module.exports = {
  Biblioteca,
  Libro,
  UsuarioBiblioteca,
};
