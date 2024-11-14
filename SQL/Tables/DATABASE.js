// --- SQL CREATE DATABASE declaracion

// La intrucion CREATE DATABASE se utiliza para crear una nueva base de datos

// Sintaxis

"CREATE DATABASE database_name"

// Ejemplo:
 
// La siguiente instruccion SQL crea una base de datos llamadas "testDB"

"CREATE DATABASE testDB"

// Asegúrese de tener privilegios de administrador antes de crear cualquier base de datos. 
// Una vez a se crea la base de datos, puede verificarla en la lista de bases de datos con el 
// siguiente comando SQL: SHOW DATABASES


// --- SQL DROP DATABASE declaracion

// La instruccion DROP DATABASE se utiliza para eliminar un base de datos existente.
// Hay que tener mucho cuidado ya que el eliminar un db se pierde toda las informacion
// guardada en ella

// Sintaxis

"DROP DATABASE database_name;"

// Ejemplo:

// La siguiente instrucción SQL elimina la base de datos existente "testDB":

"DROP DATABASE testDB;"


// --- SQL BACKUP DATABASE delcaracion

// la instruccion BACKUP DATABASE se utiliza en SQL server para crear una copia de seguridad completa de una DB existente

// Sintaxis

"BACKUP DATABASE database_name TO DISK = 'filepath';"

// -- SQL BACKUP WITH DIFERENCIAL Statement

// Una copia de seguridad diferencial solo realiza una copia de las partes que se modificaron 
// desde la ultima copia de seguridad completa

// sintaxis

"BACKUP DATABASE database_name TO DISK = 'filepath' WITH DIFFERENTIAL;"

// Ejemplos:

// La siguiente instrucción SQL crea una copia de seguridad completa de la base de datos existente "testDB" al disco D:

"BACKUP DATABASE testDB TO DISK = 'D:\backups\testDB.bak';"

// La siguiente instrucción SQL crea una copia de seguridad diferencial de la base de datos "testDB":

"BACKUP DATABASE testDB TO DISCK = 'D:\backups\testDB.bak' WITH DIFFERENTIAL"

// Una copia de seguridad diferencial reduce el tiempo de copia de seguridad (ya que solo se respaldan los cambios).



