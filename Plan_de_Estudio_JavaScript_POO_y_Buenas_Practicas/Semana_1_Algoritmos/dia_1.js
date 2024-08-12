// ¿Qué es un algoritmo?

// Imagina que quieres hacer una tarta. Un algoritmo es como una receta.
// Es una serie de pasos que sigues para lograr algo específico. Cada paso debe
// hacerse en el orden correcto para que la tarta salga bien. Por lo cual
// Un algoritmo es un conjunto preciso de instrucciones que especifica cómo
// resolver un problema

// Importancia y Aplicaciones de los Algoritmos

// Los algoritmos son importantes porque nos ayudan a resolver problemas
// de manera eficiente y clara. Están en todas partes: en los juegos, en las
// aplicaciones de tu teléfono, en los coches, y hasta en la búsqueda de
// información en internet.

// Búsqueda Lineal

// La búsqueda lineal es como buscar tu juguete favorito en una fila de juguetes.
// Empiezas por el primer juguete y sigues uno por uno hasta que encuentres el que
// estás buscando.

// Ejemplo:

//  Imagina que tienes una fila de 10 juguetes y estás buscando un coche rojo. Empiezas
//  con el primer juguete, si no es el coche rojo, pasas al siguiente, y así sucesivamente
//  hasta que lo encuentres.

// Implementacion sin Código Búsqueda Lineal

// 1-Empieza con el primer elemento de la lista.
// 2-Comprueba si es el elemento que buscas.
// 3-Si no lo es, pasa al siguiente elemento de la lista.
// 4-Repite el proceso hasta encontrar el elemento o hasta llegar al final de la lista.

// Ejercicio de Búsqueda Lineal:

// Encuentra el número 7 en la lista [2, 3, 5, 7, 11, 13, 17, 19, 23, 29].
// Empieza desde el principio de la lista y verifica cada número hasta encontrar el 7.

// Tu codigo aqui:

//

// posiblesSoluciones

let lista = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

const busquedaLinealFor = (numeroBuscado, lista) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === numeroBuscado) return "numero encontrado";
  }
  return "numero no encontrado";
};

const busquedaLinealMetodo = (numeroBuscado, lista) => {
  return lista.some((numero) => numero === numeroBuscado)
    ? "numero encontrado"
    : "numero no encontrado";
};

//

// console.log(busquedaLinealFor(7, lista));
// console.log(busquedaLinealMetodo(19, lista));
// console.log(busquedaLinealMetodo(100, lista));

// Búsqueda Binaria

// La búsqueda binaria es más rápida, pero solo funciona si los juguetes están
// ordenados (por ejemplo, por tamaño o color). En lugar de mirar cada juguete uno por
// uno, primero miras el juguete en el medio de la fila. Si el coche rojo está antes
// de ese juguete, solo buscas en la primera mitad. Si está después, buscas en la segunda
// mitad. Repites esto hasta encontrar el coche rojo.

// Ejemplo:

// Imagina que tienes una fila de 10 juguetes ordenados por tamaño. Si estás buscando
// un coche rojo y el juguete en el medio no es el coche rojo, pero es más pequeño que
// el coche rojo, entonces buscas solo en la segunda mitad de la fila. Luego, tomas el
// juguete del medio de esa mitad, y así sucesivamente.

// Implementacion sin Código Búsqueda Binaria

// 1-Asegúrate de que la lista esté ordenada.
// 2-Encuentra el elemento del medio de la lista.
// 3-Si es el elemento que buscas, termina.
// 4-Si el elemento buscado es menor que el elemento del medio, repite el proceso con la mitad izquierda de la lista.
// 5-Si el elemento buscado es mayor que el elemento del medio, repite el proceso con la mitad derecha de la lista.
// 6-Repite el proceso hasta encontrar el elemento o hasta que no queden más elementos para comprobar.

// Ejercicio de Búsqueda Binaria:

// Encuentra el número 7 en la lista ordenada [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
// Comienza con el número en el medio (5), luego decide si necesitas buscar en la
// mitad izquierda o derecha de la lista, y continúa dividiendo hasta encontrar el número 7.

// Tu código aqui:

//

// posiblesSoluciones
const listaOrdenada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const busquedaBinariaRecursiva = (numeroBuscado, lista) => {
  if (lista.length === 0) return "numero no encontrado";

  let medio = Math.floor(lista.length / 2);

  if (lista[medio] === numeroBuscado) return "numero encontrado";

  return numeroBuscado > lista[medio]
    ? busquedaBinariaRecursiva(numeroBuscado, lista.slice(medio + 1))
    : busquedaBinariaRecursiva(numeroBuscado, lista.slice(0, medio));
};

// console.log(busquedaBinariaRecursiva(7, listaOrdenada));
// console.log(busquedaBinariaRecursiva(19, listaOrdenada));
// console.log(busquedaBinariaRecursiva(1, listaOrdenada));

//¿Qué es la Complejidad Temporal?

// La complejidad temporal es una manera de describir cuánto tiempo toma un algoritmo para ejecutarse en
// función del tamaño de la entrada. Es como medir cuánto tiempo te lleva encontrar un juguete en una fila
// de juguetes dependiendo de cuántos juguetes hay.

// Ejemplo Simple:

// Si tienes que buscar un juguete entre 10 juguetes, podría tomarte menos tiempo que buscar entre 100 juguetes.

// La búsqueda lineal podría tomar más tiempo si tienes muchos juguetes porque tienes que mirar cada uno.

// La búsqueda binaria, siempre divide el grupo en dos partes iguales, es mucho más rápida con listas largas.

// La complejidad temporal nos ayuda a entender y comparar la eficiencia de diferentes algoritmos.
