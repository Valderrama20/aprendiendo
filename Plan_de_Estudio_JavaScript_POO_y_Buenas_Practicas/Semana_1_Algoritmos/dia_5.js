// Algoritmos Greedy y Programación Dinámica

// Algoritmos Greedy (Avariciosos)

// ¿Qué es un Algoritmo Greedy?

// Un algoritmo Greedy es una técnica de resolución de problemas donde se toma
// la decisión más óptima o más "avariciosa" en cada paso, sin considerar futuras
// consecuencias. Es como si siempre escogieras lo que parece mejor en el momento,
// esperando que eso te lleve a la mejor solución global.

// Ejemplo Sencillo:

// Imagina que estás recolectando monedas en una habitación. Tienes un objetivo de
// juntar la mayor cantidad de dinero posible y, en cada paso, decides tomar la moneda
// de mayor valor que encuentres. Este enfoque es Greedy, ya que estás eligiendo lo que
// parece mejor

// Ejercicio: Problema del Cambio de Monedas

// Descripción:

//  Imagina que eres un cajero y debes dar cambio a un cliente utilizando la menor
//  cantidad de monedas posible. Tienes un conjunto de denominaciones de monedas
//  disponibles y necesitas determinar cuántas de cada denominación debes dar para
//  alcanzar una cantidad específica de cambio.

//  Denominaciones Disponibles:
//  Supongamos que tienes las siguientes denominaciones de monedas disponibles:

//  Monedas de 1, 5, 10, y 25 unidades.

//  Tu codigo aqui:

//

// Posible solucion:
const greedyFuntion = (vuelto, cambio) => {
  let cambioEntregado = {};
  let i = 0;
  while (vuelto > 0) {
    // se puede agregar una verificacion para cortar el finalizar el arr

    if (cambio[i] <= vuelto) {
      vuelto -= cambio[i];
      cambioEntregado[cambio[i]] = (cambioEntregado[cambio[i]] || 0) + 1;
    } else i++;
  }
  return cambioEntregado;
};

console.log(greedyFuntion(67, [25, 10, 5, 1])); // { '1': 2, '5': 1, '10': 1, '25': 2 }

//

// Programación Dinámica

// ¿Qué es la Programación Dinámica?

// La Programación Dinámica es una técnica de resolución de problemas que divide un
// problema grande en subproblemas más pequeños y los resuelve de manera eficiente
// utilizando los resultados ya calculados de esos subproblemas. La idea clave es "almacenar y reutilizar".

// Ejemplo Sencillo:

// Imagina que estás subiendo una escalera de 10 peldaños y puedes subir 1 o 2 peldaños a la vez.
// Quieres saber de cuántas maneras puedes llegar al último peldaño. En lugar de calcular todas las
// combinaciones posibles desde el principio, resuelves el problema de una manera más inteligente
// almacenando las soluciones de los primeros peldaños y utilizándolas para calcular los siguientes.
