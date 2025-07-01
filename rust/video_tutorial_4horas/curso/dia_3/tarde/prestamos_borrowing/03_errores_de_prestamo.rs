// ----- Errores de prestamo ---------

// Aqui tenemos un ejemplo de como las reglas de prestamo previenen errores en memoria
// consideremos el caso en el que queremos modificar uan coleccion cundo existen referencia
// a sus elementos

fn main() {
    let mut vec = vec![1, 2, 3, 4, 5];
    let elem = &vec[2];
    vec.push(6); // esto no se puede hacer ya que tenemos una referencia existente
    // al vector
    println!("{elem}");
}

// Considera este caso parecido de invalidación de iterador:

fn main() {
    let mut vec = vec![1, 2, 3, 4, 5];
    for elem in &vec {
        vec.push(elem * 2);
        // En ambos caso se pueden invalidar las referencias al agregar un elemento
        // por lo cual no se puede hacer
    }
}