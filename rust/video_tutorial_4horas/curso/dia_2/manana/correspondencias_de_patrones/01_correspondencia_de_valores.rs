
// Le indicamos al formateador que no modifique el bloque de codigo siguiente
#[rustfmt::skip]

fn main() {

    /////// Correspondencia de valores ////////

    // La palabras match nos permite comparar un valor con uno o varios patrones.
    // La comparacion se hace de arriba a abajo y la primera coincidencia gana
    // Es similar al switch de js
    
    //Importante no es lo mismo un strin con doble comillas que con simple ya que son tipos distintos

    let input = 'x';
    match input {
        // Patron comun
        'q'                        => println!("Salir"),
        // La | la utilizamos como or
        'a' | 's' | 'w' | 'd'      => println!("Desplazarse"),
        // Aqui creamos un rango pero de strings
        '0'..='9'                  => println!("Introduccion de numeros"),
        // verificamos si la letra es minuscula
        key if key.is_lowercase()  => println!("Minuscula: {key}"),
        // Este es el caso base
        _                          => println!("Otro"),
    }
}
