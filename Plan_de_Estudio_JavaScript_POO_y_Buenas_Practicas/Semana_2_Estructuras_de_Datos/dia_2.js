// ¿Qué es una Pila?

// Definición:

// Una pila es una estructura de datos que sigue el principio LIFO
// (Last In, First Out), es decir, el último elemento que se agrega
// a la pila es el primero en salir. Puedes imaginarte una pila de platos:
// solo puedes sacar el plato que está en la parte superior, y cuando
// agregas un nuevo plato, lo colocas en la parte superior.

// Operaciones Básicas:
// unshift: Agregar un elemento en la parte superior de la pila.
// shift: Eliminar y devolver el elemento en la parte superior de la pila.
// Top/Peek: Ver el elemento que está en la parte superior de la pila sin eliminarlo.
// isEmpty: Verificar si la pila está vacía.

// Usos Comunes:
// Deshacer operaciones: Como en editores de texto, donde puedes deshacer los últimos cambios.
// Recursión: Muchas implementaciones recursivas internamente utilizan una pila.
// Evaluación de expresiones: Para evaluar expresiones aritméticas o verificar balanceo de paréntesis.

// Ejemplo de Pila:
// Imagina que tienes una pila de libros:

// unshift: Agregas un libro llamado "Libro A".
// unshift: Agregas un libro llamado "Libro B".
// unshift: Agregas un libro llamado "Libro C".
// La pila se ve así: Libro C (arriba), Libro B, Libro A (abajo).

// Ahora, si haces un shift, sacarías el "Libro C" porque fue el último en ser agregado.

// Ejercicio 1: Implementar una Pila con Operación de Obtener el Mínimo

// Descripción:
// Implementa una pila que, además de las operaciones clásicas (unshift, shift, top),
// tenga una operación getMin() que devuelva el elemento mínimo en la pila en tiempo
// constante O(1).

// Instrucciones:

// Implementa las funciones push(val), pop(), top(), y getMin().
// La operación getMin() debe devolver el elemento más pequeño de la pila.
// Consideraciones:

// No utilices estructuras de datos adicionales para almacenar todos los valores.
// Piensa en cómo podrías mantener un seguimiento del valor mínimo durante las operaciones
// push y pop.

class MinStack {
  _pila = [];
  _minimo = 0;

  push(value) {
    this._pila.push(value);
  }
  pop(value) {
    let eliminado = this._pila.pop(value);
    this._minimo = Math.min(...this._pila);
    return eliminado;
  }
  top() {
    return this._pila[0];
  }
  getMin() {
    return this._minimo;
  }
}

// const pila = new MinStack();
// pila.push(2);
// pila.push(0);
// pila.push(3);
// pila.push(0);
// console.log(pila.getMin()); // Devuelve 0
// pila.pop();
// console.log(pila.getMin()); // Devuelve 0
// pila.pop();
// console.log(pila.getMin()); // Devuelve 0
// pila.pop();
// console.log(pila.getMin()); // Devuelve 2

// Ejercicio 2: Verificar una Secuencia de Paréntesis Válida usando Pila

// Descripción:
// Dado una cadena que contiene solo los caracteres (, ), {, }, [, ],
// escribe una función que determine si la secuencia de paréntesis es válida.

// Instrucciones:

// Una cadena de paréntesis es válida si:
// Los paréntesis abiertos se cierran con el mismo tipo de paréntesis.
// Los paréntesis abiertos se cierran en el orden correcto.
// Debes utilizar una pila para realizar esta verificación.

const isValid = (cadena) => {
  const abren = { "(": ")", "[": "]", "{": "}" };
  let pila = [];

  for (let value of cadena) {
    if (abren[value]) {
      pila.push(value);
    } else {
      if (abren[pila.pop()] !== value) return false;
    }
  }
  return true;
};

console.log(isValid("()")); // Devuelve true
console.log(isValid("()[]{}")); // Devuelve true
console.log(isValid("(]")); // Devuelve false
console.log(isValid("([)]")); // Devuelve false
console.log(isValid("{[]}")); // Devuelve true

// ¿Qué es una Cola?

// Definición:

// Una cola es una estructura de datos que sigue el principio FIFO
// (First In, First Out), es decir, el primer elemento que se agrega a la cola
// es el primero en salir. Puedes imaginarte una fila de personas esperando en
// una caja: la primera persona en la fila es la primera en ser atendida.

// Operaciones Básicas:

// Enqueue: Agregar un elemento al final de la cola.
// Dequeue: Eliminar y devolver el elemento en el frente de la cola.
// Front/Peek: Ver el elemento que está en el frente de la cola sin eliminarlo.
// isEmpty: Verificar si la cola está vacía.

// Usos Comunes:

// -Manejo de tareas en sistemas operativos: Como las tareas en una impresora,
// donde las primeras solicitudes son las primeras en ser procesadas.
// -Procesamiento en tiempo real: Como en las colas de mensajes donde
// los mensajes se procesan en el orden en que llegaron.
// -Búsqueda en amplitud (BFS): Un algoritmo de recorrido en grafos que
// utiliza una cola.

// Ejemplo de Cola:

// Imagina que tienes una fila de personas:

// Enqueue: Una persona llamada "Persona A" se pone en la fila.
// Enqueue: Luego llega "Persona B" y se pone detrás.
// Enqueue: Finalmente, llega "Persona C" y se pone al final.
// La cola se ve así: Persona A (frente), Persona B, Persona C (final).

// Ahora, si haces un Dequeue, la "Persona A" será la primera en salir porque
// fue la primera en entrar.

// Ejercicio 3: Implementar una Cola con Dos Pilas

// Descripción:
// Implementa una cola usando dos pilas. Debes crear las operaciones enqueue(x)
// y dequeue() para tu cola.
// Instrucciones:

// La operación enqueue(x) debe agregar un elemento a la cola.
// La operación dequeue() debe eliminar y devolver el elemento más antiguo de la cola.
// La implementación debe utilizar dos pilas para realizar estas operaciones.

class MyQueue {
  _pila1 = [];
  _pila2 = [];

  enqueue(value) {
    this._pila1.push(value);
  }

  dequeue() {
    if (!this._pila2.length) {
      while (this._pila1.length) {
        let sacar = this._pila1.pop();
        this._pila2.push(sacar);
      }
    }
    return this._pila2.pop();
  }
}

const queue = new MyQueue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // Devuelve 1
console.log(queue.dequeue()); // Devuelve 2

// Ejercicio 4: Cola con Prioridad

// Descripción:
// Implementa una cola con prioridad donde cada elemento tiene una prioridad asociada.
// Los elementos con una prioridad más alta deben ser eliminados primero.

// Instrucciones:

// Implementa las funciones enqueue(val, priority) y dequeue().
// La operación enqueue(val, priority) debe agregar un elemento a la cola con una prioridad específica.
// La operación dequeue() debe eliminar y devolver el elemento con la prioridad más alta.
// Si dos elementos tienen la misma prioridad, el que fue insertado primero debe ser removido primero (FIFO para elementos con la misma prioridad).

class PriorityQueue {
  _priority1 = [];
  _priority2 = [];

  enqueue(value, priority) {
    priority === 1 ? this._priority1.push(value) : this._priority2.push(value);
  }
  dequeue() {
    return this._priority2.length
      ? this._priority2.shift()
      : this._priority1.shift();
  }
}

const pq = new PriorityQueue();
pq.enqueue("task1", 1);
pq.enqueue("task2", 2);
pq.enqueue("task3", 1);
console.log(pq.dequeue()); // Devuelve 'task2'
console.log(pq.dequeue()); // Devuelve 'task1'
console.log(pq.dequeue()); // Devuelve 'task3'
