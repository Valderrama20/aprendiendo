// Algoritmos de Ordenamiento

// 1. Ordenamiento Burbuja (Bubble Sort)

// Explicación:
// El ordenamiento burbuja compara cada par de elementos adyacentes y los intercambia
//  si están en el orden incorrecto. Este proceso se repite varias veces hasta que la lista esté ordenada.

// Ejemplo:
// Lista inicial: [5, 2, 4, 3, 1]

//Si el numero a mi izquierda es mayor que el numero a mi derecha, los intercambias
//esto se repite hasta que todos los elementos estan ordenados

// Compara 5 y 2: intercambia -> [2, 5, 4, 3, 1]
// Compara 5 y 4: intercambia -> [2, 4, 5, 3, 1]
// Compara 5 y 3: intercambia -> [2, 4, 3, 5, 1]
// Compara 5 y 1: intercambia -> [2, 4, 3, 1, 5]

// Ya que el arr aun no esta ordenado cuando termina la iteracion,
// vuelve al principio y repite el proceso

// Ejercicio:
// Ordena la lista [6, 3, 8, 2, 5] usando el ordenamiento burbuja.

// Tu codigo aqui:

//

// Posible solucion:
const lista = [6, 3, 8, 2, 5];

const bubbleSort = (arr) => {
  let length = arr.length;
  let change = false;

  do {
    change = false;
    for (let i = 0; i < length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        change = true; // Se detecto un cambio en la lista, sigue iterando para verificar mas cambios.
      }
    }
    length--; // Reducimos el tamaño de la lista ya que el utlimo elemento ya está ordenado.
  } while (change);

  return arr;
};

// console.log(bubbleSort(lista)); // [2, 3, 5, 6, 8]

//

// 2. Ordenamiento por Selección (Selection Sort)

// Explicación:

// El ordenamiento por selección busca el elemento más pequeño en la lista y lo
// intercambia con el primer elemento. Luego, encuentra el segundo elemento más
//  pequeño y lo intercambia con el segundo elemento, y así sucesivamente.

// Ejemplo:
// Lista inicial: [5, 2, 4, 3, 1]

// Paso a Paso:
// Encuentra el elemento más pequeño (1) y cámbialo con el primer elemento (5) -> [1, 2, 4, 3, 5]
// Encuentra el segundo elemento más pequeño (2) y cámbialo con el segundo elemento (2) -> [1, 2, 4, 3, 5]
// Encuentra el tercer elemento más pequeño (3) y cámbialo con el tercer elemento (4) -> [1, 2, 3, 4, 5]
// Encuentra el cuarto elemento más pequeño (4) y cámbialo con el cuarto elemento (4) -> [1, 2, 3, 4, 5]

// Ahora la lista está ordenada.

// Ejercicio:
// Ordena la lista [6, 3, 8, 2, 5] usando el ordenamiento por selección.

// Tu codigo aqui:

//

// posible solucion:

const lista2 = [6, 3, 8, 2, 5];

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let x = i + 1; x < arr.length; x++) {
      if (arr[min] > arr[x]) {
        min = x;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
};

selectionSort(lista2); // [2, 3, 5, 6, 8]
//

// 3. Ordenamiento por Inserción (Insertion Sort)

// Explicación:
// El ordenamiento por inserción toma un elemento de la lista y lo inserta en
// la posición correcta  ordenada de la lista. Este proceso se repite
// para todos los elementos.

// Ejemplo:
// Lista inicial: [5, 2, 4, 3, 1]

// Cómo funciona:

// Divide la lista en dos partes:

// La parte ordenada (al principio contiene solo el primer elemento).
// La parte no ordenada (el resto de la lista).
// Toma cada elemento de la parte no ordenada y "insértalo" en la
// posición correcta dentro de la parte ordenada.

// Paso a Paso:
// Inicialización:

// Empieza con el primer elemento como la parte ordenada.
// Ejemplo:
// Lista inicial: [5, 2, 4, 3, 1]

// La parte ordenada es [5] (inicialmente solo contiene el primer elemento).
// Iteración sobre los elementos no ordenados:

// Toma el siguiente elemento de la parte no ordenada y compáralo con los elementos
// de la parte ordenada.
// Desplaza los elementos en la parte ordenada que son mayores que el elemento actual
// hacia la derecha para hacer espacio.

// Inserción del elemento:

// Coloca el elemento actual en la posición correcta en la parte ordenada.
// Repite el proceso:

// Continúa tomando elementos de la parte no ordenada y repite los pasos anteriores
// hasta que toda la lista esté ordenada.

// Ejercicio:
// Ordena la lista [6, 3, 8, 2, 5] usando el ordenamiento por inserción.

// Tu codigo aqui:

//

// posible solucion:
let lista3 = [0, 3, 20, 50, 100, 1, 3, 4, 32, 8, 2, 5];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let x = 0; x < i; x++) {
      if (arr[i] < arr[x]) {
        arr.splice(x, 0, arr[i]);
        arr.splice(i + 1, 1);
        break;
      }
    }
  }
  return arr;
};

console.log(insertionSort(lista3)); // [0, 1, 2, 3, 3, 4, 5, 8, 20, 32,50, 100]
//
