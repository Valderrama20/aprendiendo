// Composición sobre Herencia

// El principio de composición sobre herencia es un enfoque en la programación orientada
// a objetos que sugiere que, en muchos casos, es mejor construir funcionalidades a través
//  de la combinación (composición) de objetos en lugar de utilizar una jerarquía de herencia.

// Herencia implica que una clase deriva de otra, heredando sus propiedades y métodos.
// Si bien es útil, la herencia puede introducir rigidez y acoplamiento fuerte, especialmente
//  en sistemas complejos o cuando las relaciones entre las clases cambian con el tiempo. Herencia también implica una relación "es-un" (is-a).

// Composición, por otro lado, implica que un objeto se construye utilizando otros objetos.
// En lugar de heredar comportamiento, un objeto contiene referencias a otros objetos que
// manejan partes específicas de la funcionalidad. Esto promueve una relación "tiene-un"
// (has-a) y permite que las funcionalidades se agreguen y modifiquen más fácilmente sin
// alterar jerarquías de clases.

// Ventajas de la Composición sobre la Herencia

// - Flexibilidad:
//     Puedes cambiar la composición de un objeto en tiempo de ejecución, mientras que la
//      herencia está fija en tiempo de compilación.
// -Reutilización:
//     Permite la reutilización de componentes en diferentes contextos sin las limitaciones
//     de las jerarquías de herencia.
// -Mantenimiento:
//     Evita la creación de jerarquías profundas de clases, lo que puede hacer que el
//     código sea más difícil de entender y mantener.

// Clase base Vehiculo

class Vehiculo {
  constructor(marca, modelo, año, metodos) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.metodos = metodos;
  }
  encender() {
    console.log("El vehículo está encendido");
  }

  apagar() {
    console.log("El vehículo está apagado");
  }
}

class EncenderApagar {
  encender() {
    console.log("El vehículo está encendido");
  }

  apagar() {
    console.log("El vehículo está apagado");
  }
}

// Clase Auto que hereda de Vehiculo

class Auto {
  constructor(marca, modelo, año, cantidadPuertas, metodos) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.cantidadPuertas = cantidadPuertas;
    this.metodos = metodos;
  }

  encender() {
    this.metodos.encender();
  }

  apagar() {
    this.metodos.apagar();
  }

  tocarBocina() {
    console.log("PIIIIIII");
  }
}

// Clase Moto que hereda de Vehiculo
class Moto {
  constructor(marca, modelo, año, tipoManillar, metodos) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.tipoManillar = tipoManillar;
    this.metodos = metodos;
  }

  encender() {
    this.metodos.encender();
  }

  apagar() {
    this.metodos.apagar();
  }

  hacerCaballito() {
    console.log("La moto está haciendo un caballito");
  }
}

// Clase Camion que hereda de Vehiculo
class Camion {
  constructor(marca, modelo, año, capacidadCarga, metodos) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.capacidadCarga = capacidadCarga;
    this.metodos = metodos;
  }

  encender() {
    this.metodos.encender();
  }

  apagar() {
    this.metodos.apagar();
  }

  cargar() {
    console.log("Cargando el camión");
  }

  descargar() {
    console.log("Descargando el camión");
  }
}
