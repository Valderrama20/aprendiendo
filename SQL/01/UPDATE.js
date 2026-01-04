// --- Declaracion UPDATE en SQL 

// EN SQL el UPDATE lo utilizamos para actualizar un registro en la tabla

// Tabla UPDATE

// La siguiente declaración SQL actualiza el primer cliente (CustomerID = 1) con una nueva persona
// de contacto y una nueva ciudad.

"UPDATE  Customers SET ContactName = 'Jose', City= 'Frankfurt' WHERE CustomerId = 1"

// IMPORTANTE: Simpre que se utilices, hay que especificar en el WHERE cual fila de la tabla
// quieres modificar ya que si omites el WHERE se actualizaran todos los registros de la tabla  

// -- ACTUALIZAR Múltiples Registros

// EL WHERE determina cuales registros se actualizaran

// La siguiente declaración SQL actualice ContactName a "Juan" para todos los registros donde el país es "México":

// Ejemplo: 

"UPDATE Customers SET ContactName = 'Juan' WHERE Country = 'Mexico'"
