// Semana 2, Día 1: Estructuras de Datos - Arrays y Listas Enlazadas

// Arrays:

// Un array es una estructura de datos que almacena elementos en una secuencia ordenada.
// Cada elemento tiene un índice numérico, y todos los elementos están almacenados de manera
//  contigua en la memoria.

// En JavaScript, los arrays son bastante flexibles, ya que pueden contener diferentes tipos
//  de datos (números, strings, objetos, etc.).

// Ejemplo de Array en JavaScript:

// Imagina una lista de tareas diarias

let tareas = ["Despertar", "Desayunar", "Trabajar", "Hacer ejercicio"];

// - Acceder a la primera tarea: tareas[0] retorna "Despertar".
// - Añadir una nueva tarea: tareas.push("Dormir") agrega "Dormir" al final de la lista.

// Operaciones comunes en Arrays:

// - Acceso: Obtener un elemento en una posición específica, como tareas[2].
// - Inserción: Agregar elementos al final (push), al principio (unshift),
//   o en una posición específica (splice).
// - Eliminación: Eliminar el último elemento (pop), el primero (shift),
//   o un elemento en una posición específica (splice).

//  Ejercicio Avanzado de Arrays: Análisis de Matrícula de Estudiantes:

// Enunciado:
// Estás desarrollando una aplicación que ayuda a los profesores a gestionar y
// analizar el rendimiento de los estudiantes en una serie de exámenes. Tienes un
// array bidimensional que representa las calificaciones de un grupo de estudiantes
// en diferentes exámenes.

// Cada fila del array representa las calificaciones de un estudiante, y cada columna
// representa un examen en particular. Por ejemplo, si tienes 3 estudiantes y 4 exámenes,
// el array podría verse así:

const calificaciones = [
  [85, 90, 78, 92], // Estudiante 1
  [76, 85, 88, 90], // Estudiante 2
  [89, 92, 80, 87], // Estudiante 3
];

//   Tu tarea es escribir funciones que realicen las siguientes operaciones:

// 1- Calcular el promedio de calificaciones para cada estudiante y retornar un array
//    de promedios. (Por ejemplo, [86.25, 84.75, 87]).

// 2- Encontrar la calificación más alta y más baja para cada estudiante. Retorna un array
//    de objetos donde cada objeto contiene la calificación más alta y más baja de cada
//    estudiante. (Por ejemplo, [{ max: 92, min: 78 }, { max: 90, min: 76 }, { max: 92, min: 80 }]).

// 3- Determinar qué estudiante tuvo el mejor promedio en general y retornar el índice de
//    ese estudiante en el array original (por ejemplo, 2 para el Estudiante 3).

// 4- Ordenar a los estudiantes por su promedio en orden descendente (es decir, de mayor a menor).

// Tu codigo aqui:

//

// Posible Solucion:
const analisisNotasEstudiantes = (listStudents) => {
  let promedios = [];
  let notaMaximaMinima = [];

  // Saco el promedio y la nota maxima y minima de cada estudiante
  listStudents.forEach((notas) => {
    let promedio = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    let max = Math.max(...notas);
    let min = Math.min(...notas);

    notaMaximaMinima.push({ max, min });
    promedios.push(promedio);
  });

  // Busco el indice del estuiante con mejor promedio
  let estudiantesMejorPromedio = promedios.indexOf(Math.max(...promedios));

  // agrego la nota a cada estudiante para poder ordenarlos de mayor a menor promedio
  let estudiantesConPromedios = listStudents
    .map((notas, index) => ({
      notas,
      promedio: promedios[index],
    }))
    .sort((a, b) => b.promedio - a.promedio)
    .map((estudiante) => estudiante.notas);

  return {
    promedios,
    notaMaximaMinima,
    estudiantesMejorPromedio,
    estudiantesConPromedios,
  };
};
//

analisisNotasEstudiantes(calificaciones);
//

// Listas Enlazadas:

// Una lista enlazada es una colección de nodos, donde cada nodo contiene un valor y
// una referencia (enlace) al siguiente nodo en la secuencia. A diferencia de los arrays,
// los elementos no están continuamente en la memoria.

// Hay diferentes tipos de listas enlazadas:
// Lista Simplemente Enlazada: Cada nodo tiene un enlace al siguiente nodo.
// Lista Doblemente Enlazada: Cada nodo tiene enlaces al siguiente y al nodo anterior.
// Lista Circulante: El último nodo se enlaza de nuevo al primer nodo, formando un círculo.

// Ejemplo:

// Imagina que tienes una fila de personas esperando para entrar al cine.
// Cada persona en la fila tiene un papelito con dos cosas escritas:

// 1- Su nombre.
// 2- El nombre de la persona que está justo detrás de ellos en la fila.

// ¡Pero espera! No todas las personas tienen un papelito que diga quién está
// detrás de ellos. La última persona en la fila tiene un papelito que dice
// "Nadie está detrás de mí" (o simplemente no tiene un nombre ahí).

// Cómo Funciona la Fila:
// El primero de la fila: Esta persona sabe quién está después de él en la fila.
// Por ejemplo, si el primero es "Pedro", su papelito dirá que "Ana" está detrás de él.

// Ana (la segunda persona): Ella también tiene un papelito que dice que
//  "Luis" está detrás de ella.

// Luis (la tercera persona): Luis sabe que "Sofía" está detrás de él.

// Sofía (la última persona): Sofía no tiene a nadie detrás, así que
// su papelito no tiene un nombre más.

// ¿Qué hace especial a esta fila?
// Lo interesante de esta fila es que, si alguien quiere saber quién está al
// final, tiene que preguntar a cada persona en orden: primero le preguntas
// a Pedro, luego a Ana, luego a Luis, y finalmente a Sofía.

// ¿Por qué es útil una fila como esta?
// Supongamos que alguien más quiere unirse a la fila. Es fácil hacerlo,
//  porque solo tienes que darle un papelito a la nueva persona, con el nombre
//  de la persona que estaba al final de la fila (en este caso, Sofía), y luego actualizar
//  el papelito de Sofía para que apunte a la nueva persona.

// En Resumen:
// Una lista enlazada es como una fila de personas.
// Cada persona en la fila sabe quién está justo detrás de ella.
// Si quieres recorrer la fila, debes hacerlo desde el
// principio, persona por persona.
// Es una forma sencilla de mantener a las personas (o datos) en orden,
// y es fácil agregar o quitar personas (o datos) de la fila.

// Ejercicio: Revertir una Lista Enlazada

// Enunciado:

// Imagina que tienes una lista enlazada que representa una serie de números.
// Tu tarea es escribir una función que revierta el orden de los elementos
// en esta lista enlazada.

let lista = {
  nodo: 1,
  next: {
    nodo: 20,
    next: { nodo: 300, next: { nodo: 4000, next: null } },
  },
};

const revertirLista = (list) => {
  let prev = null;
  let actual = list;
  let next = null;

  while (actual) {
    next = actual.next;
    actual.next = prev;
    prev = actual;
    actual = next;
  }
  return prev;
};

revertirLista(lista);

// Ejercicio: Eliminar un Nodo en una Lista Doblemente Enlazada

// Descripción:
// Dada una lista doblemente enlazada, escribe una función que elimine un nodo
//  dado de la lista. La función debe actualizar los punteros prev y next de
//   los nodos adyacentes para mantener la integridad de la lista.

const eliminarNodo = (list, eliminar) => {
  if (!list) return "no se encontro el nodo";

  if (list.nodo === eliminar) {
    if (list.prev) {
      list.prev.next = list.next;
    }
    if (list.next) {
      list.next.prev = list.prev;
    }
    return "nodo eliminado";
  }

  return eliminarNodo(list.next, eliminar);
};
