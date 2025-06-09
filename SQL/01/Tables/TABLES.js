// SQL CREATE TABLE declaracion

// LA declaracion CREATE TABLE se utiliza para crear un tabla en una base de datos

// Sintaxis

`CREATE TABLE table_name (
columna1 datatype,
columna2 datatype,
columna3 datatype,
)`

// Los nombres de las columnas especifican los nombres de las columnas de las tablas
// El parametro datatype especifica el tipo de datos que puede contener la columna (por ejemplo: varchar, entero, fecha, etc)

// Ejemplo CREATE TABLE SQL

// El siguiente ejemplo crea una tabla llamada "Persons" que contiene cinco columnas:
// PersonID, LastName, FirstName Dirección y Ciudad:

 `CREATE TABLA Persons (
 PersonID  int,  // Entero
 LastName  varchar(255), // String
 FirstName varchar(255),
 Address   varchar(255),
 City      varchar(255)
 )`

// La columna PersonID es de tipo int y tendra un numero entero
// El resto de las columnas son de escriba varchar y tendran caracteres, con una logitud maxima de 255

// Luego de crear la DB se pueden empezar a llenar con datos utilizando la declaracion INSERT INTO

// --- Crear Tabla utilizando otra tabla

// Tambien se puede crear una copia de una tabla existente utilizando CREATE TABLE.

// La nueva tabla obtiene las mismas definiciones de columnas. Todas las columnas o especificas se pueden seleccionar

// Si creas una nueva tabla usando una tabla existente, la nueva tabla sera llena de los
// valores existentes de la tabla anterior

// Sintasis:

"CREATE TABLE new_table_name  AS SELECT column1, column2, ... FROM existing_table_name WHERE ..."

// Ejemplo: 
// El siguiente SQL crea una nueva tabla llamada "TestTable" (que es una copia de la tabla "Clientes"): 

 "CREATE TABLE TestTable AS SELECT customername, contactname FROM customers"

// 