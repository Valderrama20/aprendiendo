// Que es sql

// SQL es un lenguaje stardar para acceder y manipular base de datos

// - SQL significa Lenguaje de Consultas Estructuradas
// - SQL permite acceder y manipular base de datos
// - SQL se convirtió en un estándar del American National Standards Institute (ANSI) en 1986, 
// y de la Organización Internacional de Normalización (ISO) en 1987 

// Que puede hacer SQL

// - SQL puede ejecutar consultas contra una base de datos
// - SQL puede recuperar datos de una base de datos
// - SQL puede insertar registros en una base de datos
// - SQL puede actualizar registros en una base de datos
// - SQL puede eliminar registros de una base de datos
// - SQL puede crear nuevas bases de datos
// - SQL puede crear nuevas tablas en una base de datos
// - SQL puede crear procedimientos almacenados en una base de datos
// - SQL puede crear vistas en una base de datos
// - SQL puede establecer permisos en tablas, procedimientos y vistas

// Los comandos principales son: 

"SELECT, UPDATE, DELETE, INSERT, WHERE"

// RDBMS

// RDBMS significa sistema de gestion de base de datos relacionales.
// RDBMS es la base de SQL y de todas los sistemas de bases de datos relacionles del modernos.

// Los datos en RDBMS se almacenan en objetos de base de datos llamados tablas. Una tabla es una colección
// de entradas de datos relacionados y consta de columnas y filas.


// Algunos de los comandos mas imnportantes de sql son:

"SELECT"  // - extrae datos de una base de datos
"UPDATE"  // - actualiza los datos en una base de datos
"DELETE"  // - elimina datos de una base de datos
"INSERT INTO"  // - inserta nuevos datos en una base de datos
"CREATE DATABASE"  // - crea una nueva base de datos
"ALTER DATABASE"   // - modifica una base de datos
"CREATE TABLE"  // - crea una nueva tabla
"ALTER TABLE"   // - modifica una tabla
"DROP TABLE"    // - elimina una tabla
"CREATE INDEX"  // - crea un índice (clave de búsqueda)
"DROP INDEX"    // - elimina un índice

// -- La Declaración SQL SELECT

// SELECT se utiliza para seleccionar datos de una tabla

// Ejemplo: devovler datos del cliente

"SELECT custormer_name, city FROM Customers"

// Aqui customer_name y city son los nombres de los campos de la tabla
// de la cuales se desea informacion y Customers es el nombre de la tabla

// Seleccionar todas las columnas

// Para seleccionar todas las columnas sin tener que especificar los nombres
// utilizamos SELECT *, el * para indica que queremos todos los campos

"SELECT * FROM Users"

// -- La Declaración SQL SELECT DISTINCT

// SELECT DISTINCT la utilizamos para seleccioanar todos los valores de un
// campo que sean distintos, en pocas palabras si un campo es igual a otro solo se 
// tomara uno, eliminando los valores duplicados

"SELECT DISTINCT Country FROM Customers"

// -- COUNT DISTINCT

// Al usar DISTINCT en una funcion llamada COUNT podemos devolver el numero de paises diferente

"SELECT COUNT(DISTINCT Country) FROM Customers"

// El CONTAR(DISTINTO column_nombre) no es compatible con las bases de datos de Microsoft Access.

"SELECT Count(*) AS DistinctCountries"
"FROM (SELECT DISTINCT Country FROM Customers);"

// -- SQL WHERE Clause

// WHERE lo utilizamos para filtrar registros
// Se utiliza para extraer solo aquellos registros que cumplan con una condicion

// Ejemplo: 

"SELECT * FROM Customers WHERE Country = 'Mexico'"

// WHERE lo podemos utilizar tambien en UPDATE, DELETE, etc

// -- Campos de Texto vs. Campos Numéricos

// SQL requiere comillas alrededor de los campos de texto pero 
// los campos numericos no deben estar entre comillas

"SELECT * FROM Customers WHERE CustomerId=1"

// -- Operadores en WHERE

// Podemos utilizar diferentes operadores para filtrar las busquedas

// Ejemplo: Selecciona todos los clientes con un CustomerID mayor de 80

"SELECT * FROM Customers WHERE CustomerID > 80"

// -- Operadores

`
=
>
<
>=
<=
<>      - tabien se podria utilizar !=
BETWEEN - Entre un rango especifico. BETWEEN 50 AND 60
LIKE    - Buscar un patron WHERE City LIKE "s%"
IN      - Para busca ciertos valores WHERE City IN ('Paris','London')
`

// -- SQL ORDER BY Keyword - Ordernar por palabras

// ORDER BY se utiliza para ordenar el conjunto de resultados 
// en onder ascendente o descendente

// Ejemplo: Ordenar los productos por precio

"SELECT * FROM Products ORDER BY Price"

// -- DESC

// ORDER BY ordena los registros en forma ascendente de forma predeterminada,
// para ordenar los registros en forma descendente, utilizamos DESC palabra clave

// Ejemplo: Ordena los productos del precio mas alto al mas bajo

"SELECT * FROM Products ORDER BY Price DESC"

// -- Ordenar Alfabéticamente

// Para valores de cadena ORDER BY ordenara alfabeticamente

// Ejemplo: Ordena los productos alfabeticamente por ProductName

"SELECT * FROM Products ORDER BY ProductName"

// -- Alfabéticamente DESC

// Para ordenar las tablas alfabeticamente en revesar utilizamos DESC

// Ejemplo: Ordenas los prodcutos de ProductName en orden inverso

"SELECT * FROM Products ORDER BY ProductName DESC"

// -- ORDENAR POR Varias Columnas

// La siguiente instrucción SQL selecciona a todos los clientes de la tabla "Clientes", 
// ordenado por la columna "País" y "Nombre del cliente". Esto significa que ordena por País, 
// pero si algunas filas tienen el mismo País, las ordena por Nombre del cliente:

"SELECT * FROM Customers ORDER BY Country, CustomerName"

// -- Usando ASC y DESC

// La siguiente instrucción SQL selecciona a todos los clientes de la tabla "Clientes",
//  ordenados ascendiendo por el "País" y descendiendo por la columna "CustomerName":

"SELECT * FROM Customers ORDER BY Country ASC, CustomerName DESC;"

// Operador AND en SQL

// EL END se utiliza para incluir mas de una condicion, por ejemplo si quiero filtrar y dolver a todos los clientes 
// de españa que tengan un nombre con la inicial G

// Practica: Selecciona todos los clientes de España que empiecen con la letra 'G':

"SELECT * FROM Customers WHERE Country = 'Spain' AND CustomerName LIKE 'G%"

// -- AND vs OR

// El AND muestra el registro si todas las condiciones son verdaderas
// El OR muestra el registro si cualquieras de las condiciones son verdaderas

// Todas las Condiciones Deben Ser Verdaderas

// La siguiente instrucción SQL selecciona todos los campos de Customers donde Country es 
// "Alemania" Y City es "Berlín" Y PostalCode es superior a 12000:

"SELECT * FROM Customers WHERE Country = 'Alemania' AND City = 'Berlin' AND PostalCode > 1200"

// -- Combinación AND y OR 

// Puedes combinar el AND y OR operadores
// La siguiente declaración SQL selecciona a todos los clientes de España que comienzan con una "G" o una "R".
// Asegúrese de usar paréntesis para obtener el resultado correcto.

// Practica: Seleccione todos los clientes españoles los cuales 
// Tengan un nombre con inicial G o R

"SELECT * FROM Customers WHERE Country = 'Spain' AND (CustomerName LIKE 'G%' OR CustomerName LIKE 'R%')"

// Sin paréntesis, la declaración selecta devolverá a todos los clientes de España que comience con una "G"
// más todos los clientes que comienzan con una "R", independientemente del valor del país:

// -- Operador OR en SQL

// La clausula WHERE puede contener uno mas operadores OR

// El OR operador se utiliza para filtrar registros en función de más de una condición, como
//  si lo deseara devolver todos los clientes de Alemania pero también los de España:

// Practica: Seleciona todos los clientes de alemania o españa

"SELECT * FROM Customers WHERE Country = 'Alemania' OR Country = 'España'"


// -- Al Menos Una Condición Debe Ser Verdadera

// La siguiente instrucción SQL selecciona todos los campos de Clientes donde City es "Berlín",
//  CustomerName comienza con la letra "G" o Country es "Noruega":

"SELECT * FROM Customers WHERE City = 'Berlin' OR CustomerName LIKE 'G%' OR Country = 'Noruega';"

// -- Operador NOT en SQL

// El operador NOT se utiliza en combinacion con otros operadores para dar resultados opuestos, tambien llamado resultados negativos
// En la declaración de selección a continuación, queremos devolver a todos los clientes que NO son de España:

// Ejemplo: 

"SELECT * FROM Customers WHERE NOT Country = 'Spain';"

// En el ejemplo anterior, el NOT el operador se utiliza en combinación con el = operador,
// pero se puede utilizar en combinación con otros operadores de comparación y/o lógicos.

// -- NOT LIKE
// Practica: Seleccione clientes que no comiencen con la letra 'A':

"SELECT * FROM Customers WHERE CustomerName NOT LIKE 'A%';"

// -- NOT BETWEEN
// practica: Seleccione clientes con un customerID que no esten entre 10 y 60:

"SELECT * FROM Customers WHERE CustomerID NOT BETWEEN 20 AND 60;"

// -- NOT IN
// Practica: Seleccione clientes que no sean de París o Londres:

"SELECT * FROM Customers WHERE City NOT IN ('Paris','London');"

// -- NO Mayor que
// practica: Seleccione clientes con un CustomerId no mayor de 50:

"SELECT * FROM Customers WHERE NOT CustomerId > 50;"

// -- NO Menos Que
// Practica: Seleccione clientes con un CustomerID no menos de 50:

"SELECT * FROM Customers WHERE NOT CustomerId < 50"