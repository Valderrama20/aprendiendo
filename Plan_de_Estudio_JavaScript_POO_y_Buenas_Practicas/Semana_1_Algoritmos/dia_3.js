// Algoritmos de Ordenamiento Avanzados (Merge Sort, Quick Sort)

// Merge Sort (Ordenamiento por Mezcla)

// Explicación:
// Imagina que tienes una gran pila de cartas desordenadas. Merge Sort te ayuda a
// ordenarlas dividiendo la pila en partes más pequeñas, ordenando esas partes y luego
//  combinándolas nuevamente en una pila ordenada.

// Cómo funciona:

// Divide la lista de cartas en dos mitades iguales.
// Sigue dividiendo cada mitad en mitades más pequeñas hasta que cada parte tenga solo una carta.
// Comienza a juntar las cartas en pares ordenados.
// Combina estas pares ordenados en grupos más grandes, manteniéndolos en orden.
// Repite este proceso hasta que toda la pila de cartas esté combinada y ordenada.

// Ejemplo:
// Lista inicial: [5, 2, 9, 1, 6, 3]

// Divide en dos mitades: [5, 2, 9] y [1, 6, 3]
// Divide cada mitad: [5, 2] y [9]; [1, 6] y [3]
// Divide más: [5] y [2]; [1] y [6]
// Combina en pares ordenados: [2, 5] y [9]; [1, 3, 6]
// Combina los pares: [2, 5, 9] y [1, 3, 6]
// Combina todo: [1, 2, 3, 5, 6, 9]

// Articulo sobre Merge Sort
// https://www.geeksforgeeks.org/merge-sort/

// Ejercicio:
// Ordena la lista [8, 4, 7, 3, 1, 5] usando Merge Sort.

// Tu código aquí:

//

// posible solucion:
let lista = [8, 4, 7, 3, 1, 5];

const merge = (arr1, arr2) => {
  let merged = [];
  let i = 0;
  let x = 0;

  while (i < arr1.length && x < arr2.length) {
    if (arr1[i] < arr2[x]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[x]);
      x++;
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  while (x < arr2.length) {
    merged.push(arr2[x]);
    x++;
  }
  return merged;
};

const mergeSort = (arr) => {
  if (arr.length === 1) return arr;
  let mitad = Math.floor(arr.length / 2);
  let izquierda = mergeSort(arr.slice(0, mitad));
  let derecha = mergeSort(arr.slice(mitad));
  return merge(izquierda, derecha);
};

// console.log(mergeSort(lista)); // [1, 3, 4, 5, 7,8]
//

// Quick Sort (Ordenamiento Rápido)

// Explicación:
// Imagina que estás organizando tus juguetes. Eliges un juguete como referencia y
// colocas los juguetes más pequeños a un lado y los más grandes al otro. Luego, repites
// el proceso con cada grupo hasta que todos los juguetes estén ordenados.

// Cómo funciona:

// Elige un juguete como "pivote".
// Coloca todos los juguetes más pequeños que el pivote a su izquierda y todos los juguetes más grandes a su derecha.
// Ahora tienes dos grupos: uno a la izquierda del pivote y otro a la derecha.
// Repite este proceso con los grupos de la izquierda y la derecha.
// Continúa hasta que cada grupo tenga solo un juguete.

// Ejemplo:
// Lista inicial: [5, 2, 9, 1, 6, 3]

// Elige 5 como pivote.
// Coloca los más pequeños a la izquierda: [2, 1, 3] y los más grandes a la derecha: [9, 6]
// Repite con el grupo izquierdo: Elige 2 como pivote -> [1] y [3]
// Repite con el grupo derecho: Elige 9 como pivote -> [6] y [9]
// Combina todo: [1, 2, 3, 5, 6, 9]

// Ejercicio:
// Ordena la lista [7, 4, 8, 3, 1, 5] usando Quick Sort.

// Tu código aquí:

//

// posible solucion:
let list2 = [7, 4, 8, 3, 1, 5];

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];
  let izquierda = [];
  let derecha = [];

  for (let i = 1; i < arr.length; i++) {
    pivot > arr[i] ? izquierda.push(arr[i]) : derecha.push(arr[i]);
  }

  return [...quickSort(izquierda), pivot, ...quickSort(derecha)];
};

console.log(quickSort(list2));
//
