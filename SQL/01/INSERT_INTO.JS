
// SQL INSERT INTO declaracion

// La declaracion INSERT INTO se utiliza para insertar nuevos registro en una tabla

// 1. Especificando tanto los nombres de las columnas como los valores que se insertaran 

"INSERT INTO table_name (columna1, columna2, columna3, ...) VALUES (value1, value2, value3, ...);"

// 2. Si esta agregando valores para todas las columnas de las tabla, no hace falta especificar el nombre
// de cada columna en la consulta sql. Sin embargo, es muy inportante que la informacion introducida este en el mimso 
// orden que la informacion de la tabla. 

"INSERT INTO table_name VALUES (value1, value2, value3, ...);"

// -- Insertar Datos Solo en Columnas Especificadas

// Tambien es posible insertar informacion en columnas especificas

// La siguiente instrucción SQL insertará un nuevo registro, pero solo insertará datos en el "CustomerName"
//  Columnas "Ciudad" y "País" (CustomerID lo hará ser actualizado automáticamente):

"INSERT INTO Customers (CusmerName, City, Country) VALUES ('Jose', 'Vigo', 'Spain');"

// -- Insertar Múltiples Filas

// Tambien es posible insertar varias filas en una instruccion
// Para insertar varias filas de datos, usamos lo mismo INSERT INTO, pero con multiples valores:

`INSERT INTO Customers (CustomerName, ContactName, Addres, City, PostalCode, Country), VALUES
('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway'),
('Greasy Burger', 'Per Olsen', 'Gateveien 15', 'Sandnes', '4306', 'Norway'),
('Tasty Tee', 'Finn Egan', 'Streetroad 19B', 'Liverpool', 'L1 0AA', 'UK');`

// Simpre separando cada conjunto de informacion con una coma

