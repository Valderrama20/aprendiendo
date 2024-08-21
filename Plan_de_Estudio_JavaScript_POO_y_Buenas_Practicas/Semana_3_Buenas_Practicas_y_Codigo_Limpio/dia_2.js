//Explicación de los Principios SOLID

// SOLID es un acrónimo que representa cinco principios fundamentales de diseño de software
// orientado a objetos. Estos principios están diseñados para hacer que el código sea más
// comprensible, flexible y mantenible.

// SRP (Single Responsibility Principle - Principio de Responsabilidad Única):

// Explicación: Una clase debe tener una sola razon para cambiar, lo que significa
// que debe tener una sola responsabilidad o proposito

// Ejemplo: SI tienes una clase "Invoice" esta deberia encargarse solo de la logica de la factura.
// La logica del envio eh impresion de la factura deberia estar en otra clase

// Ejemplo Práctico SRP:
// Tienes una clase User que maneja tanto la lógica de autenticación como la de perfil de usuario.
// Según SRP, deberías dividir esta clase en dos: AuthenticationService y UserProfile.

//OCP (Open/Closed Principle - Principio Abierto/Cerrado):

// Explicacion: Una clase debe estar abierta para la extencion, pero cerrada para la modificacion
// Esto significa que puedes agregar una funcionalidad sin cambiar el codigo existente.

// Ejemplo: Si tenemos una clase "Payment", puedes extenderla para añadir un nuevo metodo
// de pago pero sin modificar la clase original

// Ejemplo Práctico OCP:
// Tienes una clase Shape que maneja cálculos de área para círculos y rectángulos.
// En lugar de modificar la clase cada vez que añades una nueva forma, puedes hacer
// que Shape sea una clase base abstracta y extenderla con subclases como Circle,
// Rectangle, Triangle, etc.

// LSP (Liskov Substitution Principle - Principio de Sustitución de Liskov):

// Explicacion: Los objetos de una clase derivada deben poder reemplazar a objetos de la clase
// base sin alterar el funcionamiento del programa

// Ejemplo: Si tienes una clase Bird y una subclase Penguin, la subclase debería poder sustituir
//  a Bird sin romper la lógica que depende de Bird.

// Ejemplo Práctico LSP:
// Si tienes una clase Vehicle con un método startEngine(), y creas una subclase Bicycle que no
// tiene motor, estarías violando LSP porque Bicycle no debería implementar startEngine().

// ISP (Interface Segregation Principle - Principio de Segregación de Interfaces):

// Eplicacion: Los clientes no deberian verse obligados a depender de interfaces que no usan.
// Es mejor tener interfaces especificas y pequeñas que una grande y general

// Ejemplo: En lugar de una interfaz Worker que tenga métodos como work() y eat(), podrías
// tener dos interfaces Worker y Eater para que las clases implementen solo lo que necesitan.

// Ejemplo Práctico ISP:
// Si tienes una interfaz IMachine con métodos print(), scan(), y fax(), pero tu impresora solo
// necesita print(), es mejor tener interfaces separadas como IPrinter, IScanner, y IFax.

// DIP (Dependency Inversion Principle - Principio de Inversión de Dependencias):

// Explicación: Los modulos de alto nivel no deben depender de modulos de Bajo nivel.
// Ambos deben depender de abstracciones

//  Ejemplo: En lugar de que un OrderService dependa directamente de una implementación de
//  PaymentService, debe depender de una abstracción como IPaymentService que luego puede ser
//  implementada.

// Ejemplo Práctico DIP:
// Si tienes un EmailSender que depende directamente de una clase SMTPService, estarías
//  violando DIP. En su lugar, deberías depender de una interfaz IMailService que puede
//  ser implementada por SMTPService u otros servicios de correo.

// Practica: Aquí tienes una clase en JavaScript que viola todos los principios SOLID.
//  Tu tarea será refactorizarla para que cumpla con cada uno de los principios.

class Order {
  constructor(items, customer) {
    this.items = items;
    this.customer = customer;
    this.isShipped = false;
  }

  calculateTotal() {
    let total = 0;
    this.items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }

  printInvoice() {
    console.log("--- Invoice ---");
    this.items.forEach((item) => {
      console.log(`${item.name} - ${item.quantity} x $${item.price}`);
    });
    console.log(`Total: $${this.calculateTotal()}`);
  }

  saveToDatabase() {
    console.log("Saving order to database...");
    // Código para guardar la orden en la base de datos
  }

  sendEmailConfirmation() {
    console.log(`Sending email confirmation to ${this.customer.email}`);
    // Código para enviar email
  }

  shipOrder() {
    this.isShipped = true;
    console.log("Order shipped!");
  }
}

//   Tu codigo:

class Order2 {
  constructor(
    items,
    customer,
    PrintInvoice,
    saveToDatabase,
    sendEmailConfirmation
  ) {
    this.items = items;
    this.customer = customer;
    this.isShipped = false;
    this.printInvoice = PrintInvoice;
    this.saveToDatabase = saveToDatabase;
    this.sendEmailConfirmation = sendEmailConfirmation;
  }

  processOrder() {
    this.printInvoice.print(this.items);
    this.sendEmailConfirmation.send(this.customer);
    this.saveToDatabase.save();
    this.shipOrder();
  }

  shipOrder() {
    this.isShipped = true;
    console.log("Order shipped!");
  }
}

class CalculateTotal {
  total(items) {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
}

class PrintInvoice extends CalculateTotal {
  print(items) {
    console.log("--- Invoice ---");
    items.forEach((item) => {
      console.log(`${item.name} - ${item.quantity} x $${item.price}`);
    });
    console.log(`Total: $${this.total(items)}`);
  }
}

class saveToDatabase {
  save() {
    "Saving order to database...";
  }
}

class sendEmailConfirmation {
  send(customer) {
    console.log(`Sending email confirmation to ${customer.email}`);
  }
}
//
