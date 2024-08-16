// Teoría: Representación de Grafos

// ¿Qué es un Grafo?

// 1- Un grafo es como un dibujo que muestra cómo están conectadas
// las cosas entre sí.
// 2- En un grafo, las cosas son llamadas nodos o vértices. Por ejemplo,
// cada uno de tus amigos puede ser un nodo.
// 3- Las conexiones entre ellos se llaman aristas. Estas son como las líneas
// que dibujas entre dos amigos para mostrar que se conocen.

// Imagina Esto:
// -Tú eres un nodo llamado "Tú".
// -Tienes tres amigos: "Ana", "Luis", y "Sara". Cada uno de ellos es también un nodo.
// -Si tú y Ana son amigos, dibujas una línea entre "Tú" y "Ana". Esta línea es la arista.
// -Haces lo mismo para tus otros amigos.

// ¡Ya tienes un pequeño grafo! Este grafo muestra cómo están conectados todos ustedes.

// Diferentes Formas de Mostrar un Grafo:

// Lista de Adyacencia:

// Es como una lista donde escribes a cada amigo y los amigos que tienen.
// Por ejemplo, si "Tú" eres amigo de "Ana" y "Luis", y "Ana" es amiga de "Sara"

// Tú: [Ana, Luis]
// Ana: [Tú, Sara]
// Luis: [Tú]
// Sara: [Ana]

// Matriz de Adyacencia:

// Imagina una tabla donde puedes poner un "1" si dos amigos están conectados,
//  y un "0" si no lo están.
// Si "Tú", "Ana", "Luis", y "Sara" son los amigos

//      Tú   Ana Luis Sara
// Tú    0    1   1   0
// Ana   1    0   0   1
// Luis  1    0   0   0
// Sara  0    1   0   0

//Aquí, un "1" significa que esos dos amigos están conectados.

// ¿Para Qué Sirve un Grafo?

// Los grafos se usan para entender cómo están conectadas las cosas.
// ¡Puedes usarlos para mapear rutas de autobuses, conexiones de internet,
// y hasta relaciones entre personajes en historias!

// Ejemplo :

// Si quieres saber cuántos amigos tienes que cruzar para llegar de "Tú" a "Sara",
// puedes usar el grafo.
// Sigues las líneas de un nodo a otro hasta llegar a "Sara".
// Eso es como buscar en un laberinto, pero con personas.

// ¡Y eso es todo! Un grafo es simplemente una manera de mostrar cómo
// están conectadas las cosas en un dibujo o en una lista. ¡Es como un mapa de relaciones!

// Ejercicio: Crea un Grafo y Realiza BFS y DFS

// Descripción:

// Vas a crear un grafo que represente una red de amigos. Luego,
// vas a implementar el algoritmo BFS para explorar la red y buscar un amigo

// Implementa BFS:

// BFS: Empieza desde un nodo (por ejemplo, Alice) y explora todos sus
// amigos antes de explorar los amigos de sus amigos.

// Posible solucion:
const listaDeAyancencia = {
  Luis: ["Ana", "Pedro", "Pepe"],
  Ana: ["Luis", "Juan", "Axa"],
  Axa: ["Ana", "Pepe", "Felipe"],
  Pepe: ["Luis", "Axa"],
  Felipe: ["Axa"],
};
//

// Ejercicio 2: Detectar un Ciclo en un Grafo Dirigido (DFS)

// Problema:
// Dado un grafo dirigido, determina si contiene algún ciclo. Un ciclo es
// una secuencia de vértices en la que el primer y último vértice son el mismo,
// y todos los vértices entre ellos son distintos.

// Entrada:

// Un grafo dirigido representado como una lista de adyacencia.
// Salida:

// true si hay un ciclo en el grafo, false en caso contrario.

// Consejo:
// Puedes resolver este problema usando DFS y un conjunto para rastrear los nodos en el
// camino actual. Si vuelves a visitar un nodo que ya está en el camino, has encontrado un ciclo.

const grafo = {
  A: ["B"],
  B: ["C", "D"],
  C: ["A"],
  D: [],
};

const tieneCiclo = (grafo, inicio, enCamino = {}) => {
  enCamino[inicio] = true;

  for (value of grafo[inicio]) {
    if (enCamino[value]) return true;
    else if (tieneCiclo(grafo, value, enCamino)) return true;
  }

  delete enCamino[value];
  return false;
};

tieneCiclo(grafo, "A");
