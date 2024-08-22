// Día 4: Patrones de Diseño

// 1. Patrones Creacionales

// Estos patrones se centran en el proceso de creación de objetos. La idea es crear objetos
// de manera que no se dependa directamente de la clase que se está creando.

// Ejemplo: Patrón Singleton

// El Singleton asegura que una clase tenga una única instancia y proporciona un acceso
// global a esa instancia.

// Ejercicio (Singleton):

// Problema: Imagina que estás desarrollando una aplicación en la que necesitas una única
// instancia de la clase Configuration para leer y modificar las configuraciones de la
// aplicación a lo largo de todo el programa. Implementa el patrón Singleton para
// asegurarte de que solo haya una instancia de Configuration.

// -Crea la clase Configuration.
// -Implementa el patrón Singleton en esta clase.
// -Asegúrate de que cualquier intento de crear una nueva instancia devuelva la
//  instancia ya existente.

class Configuration {
  static instance = null;

  constructor(configurationInitial) {
    if (!Configuration.instance) {
      this.configurations = configurationInitial;
      Configuration.instance = this;
    }

    return Configuration.instance;
  }

  getConfiguratios() {
    return this.configurations;
  }
}

const config1 = new Configuration({ theme: "dark" });
console.log(config1.getConfiguratios()); // { theme: "dark" }

const config2 = new Configuration({ theme: "light" });
console.log(config2.getConfiguratios()); // { theme: "dark" }

console.log(config1 === config2); // true

// Explicación del patrón Singleton:
// Este patrón es útil en escenarios donde se necesita una sola instancia de una clase para
// coordinar acciones en todo el sistema. Por ejemplo, en sistemas de log, conexiones a bases
// de datos o gestión de configuraciones globales.

// 2. Patrones Estructurales

// Los patrones estructurales se enfocan en cómo las clases y objetos se relacionan entre sí
// para formar estructuras más grandes y complejas.

// Ejemplo: Patrón Adapter

// El Adapter permite que clases con interfaces incompatibles trabajen juntas.
// Este patrón actúa como un traductor entre dos clases.

// Ejercicio (Adapter):

// Problema: Tienes un servicio de pago en tu aplicación, pero la API del servicio se ha
// actualizado y ahora tiene una interfaz diferente. Implementa un adaptador que permita que
//  la nueva API se integre sin cambiar el código existente que usa la versión antigua de la API.

// -Define la interfaz antigua del servicio de pago.
// -Implementa la nueva API con una interfaz diferente.
// -Crea un adaptador que haga que la nueva API funcione con el código existente.

class OldApi {
  pagar(userData) {
    console.log(`${userData.name} ${userData.lastname} pago correctamente`);
  }
}

class Adapter {
  constructor() {
    this.newApi = new NewApi();
  }

  pagar(userData) {
    let newUserData = { fullName: `${userData.name} ${userData.lastname}` };
    this.newApi.pagar(newUserData);
  }
}

class NewApi {
  pagar(userData) {
    console.log(`${userData.fullName} pago correctamente`);
  }
}

const userData = { name: "Juan", lastname: "Pérez" };

// Usando la vieja API
const oldApi = new OldApi();
oldApi.pagar(userData); // Juan Pérez pago correctamente

// Usando la nueva API a través del Adapter
const adapter = new Adapter();
adapter.pagar(userData); // Juan Pérez pago correctamente

// Explicación del patrón Adapter:

// El patrón Adapter es útil cuando tienes dos clases que deberían trabajar juntas,
// pero tienen interfaces incompatibles. En lugar de modificar ambas clases, puedes
// crear un adaptador que se encargue de convertir las llamadas y los datos de una
// clase a la otra.

// 3. Patrones Comportamentales

// Estos patrones se centran en la interacción y comunicación entre objetos, definiendo
// cómo los objetos se comunican y colaboran entre sí.

// Ejemplo: Patrón Observer

// El Observer es un patrón donde un objeto (llamado sujeto) notifica a otros objetos
// (observadores) sobre cualquier cambio en su estado. Este patrón es muy útil en sistemas
//  donde varios objetos necesitan reaccionar ante cambios en otro objeto.

// Ejercicio (Observer):
// Problema: Estás desarrollando una aplicación de redes sociales. Cada vez que un usuario
// publica una actualización, sus seguidores deben ser notificados. Implementa el patrón Observer
// para gestionar estas notificaciones.

// -Crea una clase User que actúe como el sujeto.
// -Crea una clase Follower que actúe como observador.
// -Implementa el patrón Observer para que cada vez que el usuario publique una actualización,
// todos los seguidores sean notificados.

class User {
  followers = [];

  constructor(name) {
    this.name = name;
  }

  subirPublication() {
    this.sendNotification();
  }

  sendNotification() {
    this.followers.forEach((follower) => {
      follower.notification(this.name);
    });
  }

  addFollower(follower) {
    this.followers.push(follower);
  }
}

class Follower {
  constructor(name) {
    this.name = name;
  }
  notification(friend) {
    console.log(`${this.name}, Tu amigo ${friend} Subio una publicacion `);
  }
}

const user = new User("Juan");
const follower1 = new Follower("Pedro");
const follower2 = new Follower("Ana");

user.addFollower(follower1);
user.addFollower(follower2);

user.subirPublication(); // Notifica a Pedro y Ana

// Explicación del patrón Observer:
// El patrón Observer es ideal para situaciones donde un cambio en un objeto necesita ser
//  reflejado en otros objetos. Es comúnmente usado en implementaciones de eventos y
//  notificaciones, como el modelo de publicación/suscripción.
