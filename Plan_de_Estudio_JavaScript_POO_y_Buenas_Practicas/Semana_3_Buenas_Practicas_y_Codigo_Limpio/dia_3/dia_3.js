//Día 3: Test-Driven Development (TDD)

// Conceptos y Beneficios de TDD

//  TDD (Desarrollo Guiado por Pruebas) es una metodología en la cual primero escribes pruebas para
//  tu código antes de implementarlo. Se enfoca en asegurarte de que tu código funcione
//  correctamente desde el principio.

// El ciclo de TDD se compone de tres pasos:

// 1- Red (Red): Escribes una prueba que fallará, ya que la funcionalidad aún no está implementada.
// 2- Verde (Green): Escribes el código mínimo necesario para que la prueba pase.
// 3- Refactorizar (Refactor): Limpias el código sin romper la funcionalidad.

// Los beneficios de TDD incluyen:

// Mayor confianza en el código: Ya que cada parte del código es probada desde el principio.
// Mejor diseño: Al escribir pruebas primero, tiendes a diseñar código más modular y menos acoplado.
// Prevención de errores: Al hacer pruebas continuamente, se detectan errores de inmediato.

// Práctica: Escribir Pruebas Unitarias en JavaScript usando Jest

// Jest es un marco de pruebas popular para JavaScript. Se utiliza para escribir pruebas
//  de manera sencilla y mantener tu código en buen estado.

// Ejercicio: Implementar una función siguiendo TDD

// Vamos a crear una función que sume números en un array, pero siguiendo el proceso de TDD.

// Paso 1: Escribir la Prueba (Red)

// Primero, necesitamos escribir la prueba para la función sumArray que todavía no existe.
// Queremos que esta función tome un array de números y devuelva la suma de ellos.

// Paso 2: Escribir el Código para Pasar la Prueba (Green)

// Ahora que tenemos la prueba, escribimos la implementación más simple posible para hacer
// que pase.

const sumArr = (arr) => {
  return arr.reduce((acc, num) => acc + num, 0);
};

module.exports = sumArr;

// Paso 3: Refactorizar el Código (Refactor)

// Después de que las pruebas pasen, revisamos el código para ver si podemos mejorarlo sin
// romper las pruebas. En este caso, la implementación ya es bastante simple, por lo que
// podríamos dejarla así.
