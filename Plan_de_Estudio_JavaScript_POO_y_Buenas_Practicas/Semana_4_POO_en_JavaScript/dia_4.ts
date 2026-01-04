// Diferencias entre Interfaces y Clases Abstractas

// Interfaces y clases abstractas son dos conceptos fundamentales en la POO
// (Programación Orientada a Objetos) que permiten diseñar arquitecturas flexibles
// y escalables, pero tienen diferencias clave en cuanto a su uso y funcionalidad.

// 1. Interfaces

// Propósito: Definir un contrato que las clases deben seguir, es decir, qué métodos y
// propiedades deben implementar.

// Características:
// No contienen implementación, solo la firma de métodos y propiedades.

// Las clases pueden implementar múltiples interfaces (esto permite simular herencia múltiple).

// No pueden tener modificadores de acceso (como private o protected), todo es público.

// Uso: Se utilizan cuando deseas asegurar que varias clases sigan la misma estructura sin
//  preocuparte de cómo se implementan los métodos.

// 2. Clases Abstractas

// Propósito: Actúan como una clase base que define tanto métodos abstractos
// (sin implementación) como métodos concretos (con implementación).

// Características:

// Pueden contener tanto métodos abstractos (sin cuerpo) como métodos concretos (con cuerpo).

// Pueden tener propiedades y métodos con cualquier nivel de acceso (private, protected, public).

// Una clase solo puede heredar de una clase abstracta.

// Uso: Se utilizan cuando quieres proporcionar una base común de comportamiento que puede
//  ser compartida y extendida por otras clases.

interface ProductoProps {
  name: string;
  price: number;
  category: string;
  stock: number;

  calcularPrecioFinal(): void;
  reducirStock(cantidad: number): void;
}

interface Descuento {
  aplicarDescuento(producto: ProductoProps): void;
  esAplicable(producto: ProductoProps): void;
}

class Producto implements ProductoProps {
  name: string;
  price: number;
  category: string;
  stock: number;

  constructor(name, price, category, stock) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.stock = stock;
  }

  calcularPrecioFinal() {}

  reducirStock(cantidad: number) {
    this.stock -= cantidad;
  }
}

class Categoria {
  name: string;
  descuentoGlobal: number;
  constructor(name, descuentoGlobal) {
    this.name = name;
    this.descuentoGlobal = descuentoGlobal;
  }

  aplicarDescuento() {}
}

interface objet {
  [key: string]: Producto;
}

class InventarioManager {
  productList: objet = {};
  category = [];

  addProduct(product: Producto) {
    this.productList[product.name] = product;
  }

  deleteProduct(product: Producto) {
    delete this.productList[product.name];
  }

  calculateBuy(listaProductos: string[]) {
    let total = 0;

    for (let producto of listaProductos) {
      total += this.productList[producto].price;
    }
    return total;
  }
}

class Client {
  name: string;
  productList: string[] = [];
  esClienteFrecuente: boolean = false;

  realizarCompra(productList: Producto[]) {
    for (let producto of productList) {
      this.productList.push(producto.name);
      producto.reducirStock(1);
    }
  }
}

class Pedido {
  cliente: Client;
  listaProductos: Producto[] = [];
  constructor(cliente: Client) {
    this.cliente = cliente;
  }

  realizarPedido() {}

  finalizarCompra() {}
}
