
Para empezar a trabajar con php tenemes que definir un bloque del mismo,
aqui estamos indicando que todo el codigo dentro de este bloque sera php

php es un lenguaje de tipado dinamico por lo cual se comporta igual que js
<?php 

// para imprimir en la consola utilizamos echo
// echo imprime todo en una sola linea por lo cual tenemos que hacer 
// un salto de linea al final de cada uno con "\n"
// tambien podemos utilizar otros comandos pero echo es el mas comun para imprimir
echo "Hola, PHP \n";


// Se ejecuta del lado del servidor


// Sintaxis

// comentario de una linea
/* Comentario de varias lineas */

// Variables

// Todas la variables las definimos empezando por el simbolo dolar "$"
// si queremos acceder a ella tenemos que utilizar tambien el "$"

$my_string = "Esto es una cade de texto";

// Para concatenar strings utilizamos el "." en lugar del "+"
echo $my_string . "\n";

// para obtener el tipo de dato de una variable utilizamos "gettype()"

echo gettype($my_string);

// como tenemos tipado dinamico yo puedo cambiar el tipo de dato de mi variable string

$my_string = 6;

echo $my_string . "\n";

echo gettype($my_string) . "\n";

// Enteros

$my_int = 7;

// reasignacion 
$my_int = $my_int + 4;

echo $my_int . "\n";

// aqui veremos un decremento pero como no lo estamos reasignando, el valor de la variable no cambiara
echo $my_int - 1 . "\n";
echo $my_int . "\n";
echo gettype($my_int) . "\n";

// Numeros decimales

// el tipo de dato de un decimal en php es double

$my_double = 6.5;

echo gettype($my_double) . "\n";
// como tenemos un leguanje dinamico puedo combinar diferentes tipos de datos

echo $my_int + $my_double . "\n"
// echo $my_int + $my_double + $my_string . "\n"

// Boleanos

$my_bool = true;
echo $my_bool . "\n"; // En php el boleano verdadero se representa como un 1 

$my_bool = false; // Y si es negativo es como si no tuviera un valor 
echo $my_bool . "\n";

echo gettype($my_bool) . "\n";

// En php podemos hacer interpolacion de datos introduciendo la variable directamente en el string 

echo "El valor de mi integer es: $my_int y el valor de mi boolean es: $my_bool "

// Constantes

// al igual que js utilizamos la palabra reservada const
const MY_CONSTANT = "Valor de la constante";
echo MY_CONSTANT . "\n";


// Listas

// Un arr (Conjusto ordenado de informacion)

$my_array = [$my_string, $my_double, $my_bool];
echo gettype($my_array) . "\n";

// Para acceder a sus valores utilizamos la notacion de corchetes y contanto desde 0
echo $my_array[0] . "\n";
echo $my_array[2] . "\n";

// Para añadir elementos utilizamos array_push y le pasamos el arr al que se la añadira y el valor a añadir

array_push($my_array, $my_int);

// Si queremos imnprimir todos los valores que estan dentro del arr utilizamos print_r

print_r($my_array);


// Diccionario / objecto

// para crear un diccionario utlizamos array() y dentro del el le pasamos las claves y valores (clave => valor)

$my_dict = array("int" => $my_int, "string" => $my_string)
echo gettype($my_dict) ."\n";
print_r($my_dict) . "\n"; // aqui podemos ver que ahora en index no seran numero si no, el valor dado 
echo $my_dict["int"] . "\n";

// Sets 

// En php no existe el set como tal, si quereremos un conjunto ordenado de informacion sin repetidos
// utilizamos array_unique() pasandole un arry y asi eliminaremos cualquier repetido

array_push($my_array, "jose");
array_push($my_array, "jose");
print_r($my_array) . "\n";
print_r(array_unique($my_array)) . "\n";

// Bucles 

// El Bucle tradicion for es igual al utilizado en js a diferencia de la declaracion de variables

for ($index = 0; $index <= 10; $index++) {
    echo $index . "\n";
}

// El foreach cambia un poco, foreach("elemento a recorrer" as "nombre que va a tener cada item")

foreach($my_array as $my_item) {
    echo $my_item . "\n";
}

// el while es igual al usado en js 
// Para saber la logintud de un arreglo, utilizamos sizeof()

$index = 0 
while($index <= sizeof($my_array) - 1){
    echo $my_array[$index] . "\n";
    $index++
}

// Condicionales

// Los condicionales son casi iguales a los utilizados en js 
// or y and son iguales al js 

if($my_int == 12 && $my_string == "Hola"){
    echo "El valor es 12 y esl string hola" . "\n";
} elseif ($my_int == 13 || $my_string == "hola") {
   echo "el valor es 13 o el string es hola" . "\n";
} else {
    echo "el no es 12 ni 13" . "\n";
}



?>
No es necesario poner el cierre de php pero si reconmendable