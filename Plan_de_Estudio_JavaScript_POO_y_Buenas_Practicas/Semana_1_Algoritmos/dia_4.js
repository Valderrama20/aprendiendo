// Algoritmos de Búsqueda Avanzados

// ¿Qué es un Grafo?

// Primero, imagina un grafo como un conjunto de puntos (llamados nodos o vértices) conectados por
// líneas (llamadas aristas). Por ejemplo, piensa en un grupo de amigos donde cada amigo está conectado
// a otros amigos por líneas que representan sus amistades.

// Búsqueda en Anchura (BFS)
// Explicación:
// BFS es como buscar a alguien en una fiesta donde quieres conocer a todos los amigos de tus amigos
// primero antes de conocer a los amigos de los amigos de tus amigos.

// Cómo Funciona:
// 1- Empieza en el punto inicial (nodo de inicio). Imagina que empiezas por ti mismo en la fiesta.
// 2- Visita todos los amigos cercanos (nodos vecinos). Primero hablas con todos tus amigos directos.
// 3- Visita los amigos de tus amigos. Luego, hablas con los amigos de tus amigos.
// 4- Continúa así hasta conocer a todos. Sigues hablando con personas cada vez más lejos hasta que no
//    quede nadie por conocer.

// Ejemplo:
// Imagina que estás en la fiesta y tus amigos son A, B y C. Sus amigos son D, E, F, G y H.

// Empiezas con A.
// Hablas con B y C.
// Luego hablas con los amigos de B y C: D, E, F, G y H.

const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: ["G"],
  E: [],
  F: [],
  G: [],
};

const bfs = (graph, start) => {
  let queue = [start]; // Cola inicializada con el nodo de inicio
  let distances = {}; // Objeto para almacenar las distacion
  distances[start] = 0; // La distancia desde le nodo inical a si mismo es 0

  while (queue.length > 0) {
    let node = queue.shift(); // tomamos el primer elemento de la cola
    graph[node].forEach((neighbor) => {
      if (!distances[neighbor]) {
        queue.push(neighbor); // si el vecino no fue visitado lo añadimos a la cola para visitarlo
        distances[neighbor] = distances[node] + 1; // calculamos la distancia
      }
    });
  }

  return distances;
};

bfs(graph, "A");

// Búsqueda en Profundidad (DFS)

// Explicación:
// DFS es como explorar una cueva profunda donde siempre quieres ir lo más lejos
// posible antes de retroceder y explorar otras partes.

// Cómo Funciona:
// 1-Empieza en el punto inicial (nodo de inicio). Imagina que entras en la cueva.
// 2-Sigue un camino hasta el final. Continúas por un túnel hasta que no puedas avanzar más.
// 3-Retrocede y busca nuevos caminos. Cuando no puedes avanzar más, retrocedes y buscas otras rutas.
// 4-Continúa hasta explorar toda la cueva. Sigues explorando hasta haber visitado todas las partes de la cueva.

// Ejemplo:
// Imagina que estás en una cueva con túneles A, B, C y cada túnel tiene sub-túneles D, E, F, G y H.

// Empiezas en A.
// Sigues por el túnel B.
// Luego por el túnel D.
// Cuando no hay más túneles, retrocedes y exploras el túnel E.
// Repites hasta explorar todos los túneles.

const dfs = (graph, node, visited = {}) => {
  if (visited[node]) return; // si el nodo ya fue visitado no lo visito

  visited[node] = true;

  graph[node].forEach((nodo) => {
    dfs(graph, nodo, visited); // llamada recursiva para cada nodo
  });

  return Object.keys(visited); // me devuelve en un array el orden en que fue visitando
};

dfs(graph, "A");

// Resumen Sencillo:

// BFS (Búsqueda en Anchura): Conoces a todos los amigos de tus amigos primero, expandiéndote en círculos.
// DFS (Búsqueda en Profundidad): Exploras un camino hasta el final antes de retroceder y probar otros caminos.
