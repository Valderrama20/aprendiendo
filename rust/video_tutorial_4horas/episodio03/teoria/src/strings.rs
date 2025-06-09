fn creamos_string() {
    let s = String::from("Holaaaa"); // creamos un string inmutable (se alamacena el stack)
    let mut s = String::from("Adios"); // cremos un string mutable (Se almacena en el head)
 

    // Moviendo el valor

    // El siguiente codigo funciona sin problemas pero si intentamos hacer lo mismo con strings,
    // ya tendriamos probelmas
    let var1 = 1;
    let var2 = var1;

    // El pricipal problema aqui es que las string funcionan diferente en memoria
    // por lo cual al tratar de asignar un string a otra variable el puntero cambia
    // a la segunda variable y ya la variable pricipal no tendria valor


    let s1 = String::from("s1");
    let s2 = s1;
    println!("{s1}");

    // Para poder hace esto tenemos que utilizar le metodo .clone() para crear una copia completa



}
