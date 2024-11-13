
// ¿Qué es un valor NULL?

// UN campo con un valor null es un comapo sin valor

// Si un campo en una tabla es opcional, es posible insertar un nuevo registro o actualizarlo sin agregar un valor a este campo
// Entonces el campo sera guardado como una valor null

// un valor NULL es aquel que se ha dejado en blanco ¡durante la creacióndel registro!

// ¿Cómo probar los Valores NULL?

// no es posible probar valores null con operadores de comparacion, como =, < o <>.
// Tendremos que usar el IS NULL y IS NOT NULL operadores en su lugar



// -- Operador IS NULL 

// El IS NULL se utiliza para comprobar valores vacios (NULL VALUES)
// El sigueinte SQL enumera a todos los clientes  con un valor NULL en el campo "Direccion"

"SELECT * FROM Customers WHERE Address IS NULL;"

// -- Operador IS NOT NULL

// EL Operador IS NOT NULL se utiliza para probar valores no vacios (NOT NULL valores)

// El siguiente SQL enumera a todos los clientes con un valor en el campo direccion 

"SELECT * FROM Customers WHERE Address IS NOT NULL "








