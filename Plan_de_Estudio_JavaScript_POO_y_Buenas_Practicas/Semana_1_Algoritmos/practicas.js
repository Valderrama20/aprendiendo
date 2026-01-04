// Día 1: Algoritmos Básicos y Búsquedas

// Ejercicio 1: Búsqueda Lineal en una Lista de Transacciones

//  Enunciado:
//  Eres responsable de gestionar un sistema de pagos en una tienda en línea.
//  Se te da una lista de transacciones, cada una con un id, monto, y fecha.
//  Debes escribir una función que busque una transacción específica por su id.

let list = [
  { id: "TXN123", monto: 150, fecha: "2024-08-01" },
  { id: "TXN124", monto: 300, fecha: "2024-08-02" },
  { id: "TXN125", monto: 500, fecha: "2024-08-03" },
  { id: "TXN126", monto: 200, fecha: "2024-08-04" },
  { id: "TXN127", monto: 100, fecha: "2024-08-05" },
];

const findTransactionById = (list, id) => {
  return list.find((e) => e.id === id) || null;
};

findTransactionById(list, "TXN126");

// Ejercicio 2: Búsqueda Binaria en una Lista de Productos Ordenados por Precio

// Enunciado:

// Trabajas en una plataforma de comercio electrónico. Te dan una lista de productos
// ordenados por precio de mayor a menor, y necesitas encontrar si un producto con
// un precio específico está disponible.

const list2 = [
  { nombre: "Laptop", precio: 500 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Smartphone", precio: 200 },
  { nombre: "Reloj", precio: 100 },
  { nombre: "Cargador", precio: 50 },
];

const findProduct = (list, price) => {
  if (list.length === 0) return null;

  const medio = Math.floor(list.length / 2);

  if (list[medio].precio === price) return list[medio];

  return list[medio].precio < price
    ? findProduct(list.slice(0, medio), price)
    : findProduct(list.slice(medio + 1), price);
};

findProduct(list2, 1000);

// Día 2: Algoritmos de Ordenamiento Básicos

// Ejercicio 3: Ordenar Fechas de Entrega usando Bubble Sort

// Enunciado:

// Trabajas en una empresa de logística que organiza envíos. Se te da
// una lista de paquetes con fechas de entrega, y necesitas ordenarlos en
// orden cronológico usando Bubble Sort.

const list3 = [
  { paquete: "Paquete A", fechaEntrega: "2024-08-05" },
  { paquete: "Paquete B", fechaEntrega: "2024-08-01" },
  { paquete: "Paquete C", fechaEntrega: "2024-08-03" },
  { paquete: "Paquete D", fechaEntrega: "2024-08-02" },
];

const priorityShipping = (list) => {
  let change = false;
  do {
    change = false;
    for (let i = 0; i < list.length - 1; i++) {
      let date1 = new Date(list[i].fechaEntrega);
      let date2 = new Date(list[i + 1].fechaEntrega);
      if (date1 > date2) {
        [list[i], list[i + 1]] = [list[i + 1], list[i]];
        change = true;
      }
    }
  } while (change);

  return list;
};

priorityShipping(list3);

// Ejercicio 4: Ordenar Usuarios por Fecha de Registro usando Insertion Sort

// Enunciado:

// Eres un desarrollador en una red social y necesitas ordenar una
// lista de usuarios por su fecha de registro para generar informes.

const list4 = [
  { usuario: "user1", fechaRegistro: "2024-07-10" },
  { usuario: "user2", fechaRegistro: "2024-06-20" },
  { usuario: "user3", fechaRegistro: "2024-08-01" },
  { usuario: "user4", fechaRegistro: "2024-07-05" },
];

const ordenarUsuario = (list) => {
  for (let i = 1; i < list.length; i++) {
    for (let j = 0; j < i; j++) {
      let date1 = new Date(list[i].fechaRegistro);
      let date2 = new Date(list[j].fechaRegistro);
      if (date1 < date2) {
        list.splice(j, 0, list[i]);
        list.splice(i + 1, 1);
        break;
      }
    }
  }

  return list;
};

ordenarUsuario(list4);

// Día 3: Algoritmos de Ordenamiento Avanzados

// Ejercicio 5: Ordenar Grandes Volúmenes de Datos usando Merge Sort

// Enunciado:
// Trabajas en una empresa que procesa grandes volúmenes de datos financieros.
// Se te proporciona una lista con miles de transacciones, y necesitas ordenarlas
// de menor a mayor por su monto usando el algoritmo Merge Sort.

const list5 = [
  { id: "TXN101", monto: 1500 },
  { id: "TXN102", monto: 300 },
  { id: "TXN103", monto: 5000 },
  { id: "TXN104", monto: 200 },
  { id: "TXN105", monto: 700 },
];

const order = (arr1, arr2) => {
  const arrOrdenado = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i].monto < arr2[j].monto) {
      arrOrdenado.push(arr1[i]);
      i++;
    } else {
      arrOrdenado.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    arrOrdenado.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    arrOrdenado.push(arr2[j]);
    j++;
  }
  return arrOrdenado;
};

const ordenarTransacciones = (list) => {
  if (list.length === 1) return list;
  let medio = Math.floor(list.length / 2);
  let izquierda = ordenarTransacciones(list.slice(0, medio));
  let derecha = ordenarTransacciones(list.slice(medio));
  return order(izquierda, derecha);
};

ordenarTransacciones(list5);

// Ejercicio 6: Optimizar la Ordenación de URLs Visitadas usando Quick Sort

// Enunciado:

// Trabajas en una empresa que monitoriza tráfico web. Tienes una lista
// de URLs visitadas y la cantidad de visitas que recibieron. Necesitas
// ordenarlas de mayor a menor por número de visitas usando Quick Sort.

const list6 = [
  { url: "example.com", visitas: 1000 },
  { url: "site.com", visitas: 2500 },
  { url: "webpage.com", visitas: 1500 },
  { url: "portal.com", visitas: 20 },
  { url: "portal.com", visitas: 10000 },
  { url: "portal.com", visitas: 283748200 },
  { url: "portal.com", visitas: 100 },
  { url: "portal.com", visitas: 1 },
];

const ordenarPorVisitas = (list) => {
  if (list.length <= 1) return list;
  const pivote = list[0];
  let izquierda = [];
  let derecha = [];

  for (let i = 1; i < list.length; i++) {
    pivote.visitas > list[i].visitas
      ? derecha.push(list[i])
      : izquierda.push(list[i]);
  }

  return [
    ...ordenarPorVisitas(izquierda),
    pivote,
    ...ordenarPorVisitas(derecha),
  ];
};

ordenarPorVisitas(list6);
