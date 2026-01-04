// ¿Qué es un Árbol Binario?

// Un árbol binario es una estructura de datos jerárquica en la que cada nodo
// tiene como máximo dos hijos, que se llaman hijo izquierdo e hijo derecho.
// El nodo superior se llama raíz y desde él se ramifican los demás nodos.
// Si un nodo no tiene hijos, se le llama hoja.

// ¿Qué es un Árbol Binario de Búsqueda (BST)?

// Un árbol binario de búsqueda (BST) es un tipo especial de árbol binario
// que sigue una propiedad clave:

// Todos sus nodos hijos a la izquierda son menores a su valor y
// Todos sus nodos hijos a la derecha son mayores a su valor

// Esta propiedad hace que los BST sean muy útiles para realizar búsquedas,
// ya que se puede descartar la mitad del árbol en cada comparación,
// de manera similar a la búsqueda binaria.

// Paso a Paso para Implementar un BST:

// 1- Crear el Nodo:

// Cada nodo del BST debe tener un valor (value), un puntero al hijo izquierdo (left), y un puntero al hijo derecho (right).

// 2- Insertar un Valor:

// Si el BST está vacío, el nuevo valor se convierte en la raíz.
// Si el BST no está vacío, compara el nuevo valor con el valor de la raíz:
// Si es menor, intenta insertarlo en el subárbol izquierdo.
// Si es mayor, intenta insertarlo en el subárbol derecho.
// Repite este proceso hasta que encuentres un nodo null donde se pueda
//  insertar el nuevo valor.

// 3- Buscar un Valor:

// Comienza desde la raíz y compara el valor buscado con el valor del nodo actual:
// Si son iguales, has encontrado el valor.
// Si es menor, busca en el subárbol izquierdo.
// Si es mayor, busca en el subárbol derecho.
// Si llegas a un nodo null, el valor no está en el BST.

// Ejercicio: Realiza Inserciones y Búsquedas en un BST

// Descripción:
// Debes implementar un árbol binario de búsqueda y realizar las siguientes operaciones:

// Insertar los siguientes valores en el BST en el siguiente
// orden: 15, 10, 20, 8, 12, 17, 25.
// Buscar los valores 10, 17, y 30 en el BST y verificar si están presentes o no.

// Tu codigo aqui:

//

//Posible solucinon:

const createNode = (value) => {
  return {
    value,
    izquierda: null,
    derecha: null,
  };
};

const insertNode = (arbol, nodo) => {
  if (arbol.value > nodo.value) {
    !arbol.izquierda
      ? (arbol.izquierda = nodo)
      : insertNode(arbol.izquierda, nodo);
  } else {
    !arbol.derecha
      ? (arbol.derecha = nodo) //
      : insertNode(arbol.derecha, nodo);
  }
};

const createBst = (arr) => {
  let raiz = createNode(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    const newNode = createNode(arr[i]);
    insertNode(raiz, newNode);
  }

  return raiz;
};

const buscarNodo = (arbol, valorBuscado) => {
  if (!arbol) return null;
  if (arbol.value === valorBuscado) return "Nodo encontrado";

  return arbol.value > valorBuscado
    ? buscarNodo(arbol.izquierda, valorBuscado)
    : buscarNodo(arbol.derecha, valorBuscado);
};

let newArbol = createBst([15, 10, 20, 8, 12, 17, 25]);
buscarNodo(newArbol, 10);
buscarNodo(newArbol, 17);
buscarNodo(newArbol, 30);
