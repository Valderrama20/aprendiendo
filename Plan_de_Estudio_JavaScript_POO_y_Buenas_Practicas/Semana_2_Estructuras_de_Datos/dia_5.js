// Teoría: Conceptos y Aplicaciones

// ¿Qué es una Tabla Hash?

// Una Tabla Hash es una estructura de datos que permite almacenar pares de clave-valor de manera eficiente. Esto significa que puedes asociar una clave (como un nombre) con un valor (como un número de teléfono) y luego recuperar el valor rápidamente utilizando la clave.

// Clave: Es un identificador único que se usa para buscar un valor. Por ejemplo, el nombre de una persona.
// Valor: Es la información asociada a la clave. Por ejemplo, el número de teléfono de esa persona.

// ¿Cómo Funciona una Tabla Hash?

// Hash Function (Función Hash): La clave se transforma en un número a través de una función hash. Este número se usa como un índice para almacenar el valor en un array.

// Collisions (Colisiones): A veces, diferentes claves pueden producir el mismo índice. Esto se llama colisión. Las tablas hash deben manejar estas colisiones de manera eficiente para asegurar que cada clave se asocie correctamente con su valor.

// Aplicaciones de las Tablas Hash

// Las tablas hash son extremadamente útiles en situaciones donde necesitas buscar, insertar o eliminar elementos rápidamente. Algunas aplicaciones comunes incluyen:

// Almacenamiento en caché: Para guardar datos de manera que puedan recuperarse rápidamente.
// Conteo de frecuencias: Para contar cuántas veces aparece un elemento en una lista.
// Mapeo de datos: Para asociar claves únicas con valores específicos.

// Práctica: Implementación Básica de una Tabla Hash

// Vamos a implementar una tabla hash simple. En lugar de utilizar una clase
// avanzada, lo haremos de forma que sea fácil de entender.

// Ejercicio Práctico: Implementa una Tabla Hash

// Crear la Tabla Hash:

// Debes crear una tabla hash que sea capaz de manejar colisiones de manera simple
// (por ejemplo, usando encadenamiento).

// Operaciones Básicas:

// Inserción: Agrega un par clave-valor a la tabla hash.
// Búsqueda: Dado un valor de clave, busca el valor correspondiente en la tabla hash.

class HastTable {
  _table = Array.from({ length: 10 }, () => ({}));

  addValue(key, value) {
    let hash = this.#newHash(key);
    this._table[hash][key] = value;
  }
  #newHash(value) {
    let hash = value.split("").reduce((acc, e) => acc + e.charCodeAt(0), 0);

    return hash % 10;
  }

  getValue(key) {
    let hash = this.#newHash(key);
    return this._table[hash][key];
  }
}

let myHashTable = new HastTable();
myHashTable.addValue("primer elemento", [1]);
myHashTable.addValue("segundo elemento", [2]);
