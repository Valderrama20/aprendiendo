// --- La Declaración SQL DELETE

// La declaracion DELETE se utiliza para eliminar registros de las tablas

// Eliminar Sintaxis

"DELETE FROM table_name WHERE condition"

// IMPORTANTE: Siempre hay que incluir WHERE ya que este indica cual registro se eliminara 
// Y si lo omistes se eliminara todo la informacion de la tabla

// Ejemplos:

// La siguiente instrucción SQL elimina al cliente "Alfreds Futterkiste" de la tabla "Clientes":

"DELETE FROM Customers WHERE CustomerName = 'Alfreds Futterkiste';"

// -- Eliminar Todos los Registros

// Es posible eliminar todas las filas de una tabla sin eliminar la tabla. Esto significa que la
//  estructura de la tabla, atributos e índices estarán intactos:

"DELETE FROM Customers;"

// -- Eliminar una Tabla

// Para eliminar una tabla por completo utiliza la declaracion DROP TABLE

// Ejemplo:
// Eliminar tabla de clientes

"DROP TABLE Customers;"



