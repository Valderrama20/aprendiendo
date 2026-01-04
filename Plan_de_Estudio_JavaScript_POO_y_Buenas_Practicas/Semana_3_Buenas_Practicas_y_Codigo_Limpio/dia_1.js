// Día 1: Principios de Código Limpio

// Conceptos de Código Limpio

// El concepto de "Código Limpio" se refiere a escribir código que es fácil de leer,
//  entender, mantener y extender. Aquí hay algunos principios clave:

// Legibilidad:

// El código debe ser fácil de leer y comprender, no solo por la persona que lo escribió,
//  sino por cualquier otro desarrollador que pueda trabajar con él en el futuro.

// Ejemplo: Usar nombres de variables descriptivos y claros como totalPrice en lugar de tp.

// Simplicidad:

// El código debe ser lo más simple posible. Evita la complejidad innecesaria que pueda
// dificultar la comprensión o mantenimiento del código.

// Ejemplo: Divide una función grande y compleja en varias funciones más pequeñas y específicas.

// DRY (Don’t Repeat Yourself):

// Evita la duplicación de código. Si encuentras el mismo código repetido en varios lugares,
// considera moverlo a una función o clase común.

// Ejemplo: Si tienes un bloque de código que calcula impuestos en varios lugares,
//  crea una función calculateTax que puedas reutilizar.

// KISS (Keep It Simple, Stupid):

// Mantén las cosas simples. No añadas complejidad innecesaria y evita sobre-ingenierizar el
// código.

// Ejemplo: En lugar de usar una estructura compleja para resolver un problema sencillo,
// usa la solución más directa y simple que funcione.

// Práctica: Refactorización de Código

// Objetivo: Tomar un código existente que no sigue los principios de código limpio
// y mejorarlo aplicando los conceptos mencionados.

const getTaxRate = (itemType) => {
  let priceDictionary = {
    food: 1.05,
    clothing: 1.08,
    electronics: 1.15,
  };

  return priceDictionary[itemType] || 1;
};

const calculaItemTotal = (item) => {
  return item.price * getTaxRate(item.type);
};

function processItems(items) {
  return items.reduce((acc, item) => acc + calculaItemTotal(item), 0);
}

// Ejercicio dos

function generateReport(data) {
  let data2 = data.reduce(
    (acc, item) => {
      item.type === "income"
        ? (acc.totalIncome += item.amount)
        : (acc.totalExpenses += item.amount);
      return acc;
    },
    { totalIncome: 0, totalExpenses: 0 }
  );

  let totalProfit = data2.totalIncome - data2.totalExpenses;

  return `--- Financial Report ---\n 
              Total Income: ${data2.totalIncome} \n 
              Total Expenses: ${data2.totalExpenses} \n
              Total Profit: ${totalProfit} \n`;
}

const data = [
  { type: "income", amount: 1000 },
  { type: "income", amount: 1500 },
  { type: "expense", amount: 500 },
  { type: "expense", amount: 200 },
  { type: "income", amount: 700 },
];

console.log(generateReport(data));
