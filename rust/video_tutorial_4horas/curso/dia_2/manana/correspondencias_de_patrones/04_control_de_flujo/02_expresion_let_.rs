// TYPE Option: el parametro  tiene un tipo  generico (OPTION) el
// cual puede devolver un valor SOME() con el resultado o NONE

// TYPE Result: La funcion devuelve dos posibles caso Ok() con el resultado
// o Err con el mensaje. este recibe tanto el tipo para el caso de exito como de error

fn hex_or_die_trying(maybe_string: Option<String>) -> Result<u32, String> {
    let s = if let Some(s) = maybe_string {
        s
    } else {
        // Si tenemos un error, se corta por completo el programa
        return Err(String::from("se ha obtenido None"));
    };
    
    // .chars() crea un iterador sobre los caracteres el string
    // .next() obtiene el primer elemento del iterador
    // este devuelve un Option<>    

    let first_byte_char = if let Some(first_byte_char) = s.chars().next() {
        first_byte_char
    } else {
        return Err(String::from("se ha encontrado una cadena vacia"));
    };

    // Aqui verificamos si este caracter enta dentro de un rango
    // En este caso usamos la base 16, es decir, queremos ver si first_byte_char es 
    // un dígito hexadecimal (del ‘0’ al ‘9’, o de ‘a’ a ‘f’, o de ‘A’ a ‘F’)

    if let Some(digit) = first_byte_char.to_digit(16) {
        Ok(digit)
    } else {
        Err(String::from("no es un digito hexadecimal"))
    }
}

fn main() {
    println!(
        "Resultado: {:?}",
        hex_or_die_trying(Some(String::from("foo")))
    );
}

// fn hex_or_die_trying(maybe_string: Option<String>) -> Result<u32, String> {
//     let Some(s) = maybe_string else {
//         return Err(String::from("se ha obtenido None"));
//     };

//     let Some(first_byte_char) = s.chars().next() else {
//         return Err(String::from("se ha encontrado una cadena vacía"));
//     };

//     let Some(digit) = first_byte_char.to_digit(16) else {
//         return Err(String::from("no es un dígito hexadecimal"));
//     };

//     return Ok(digit);
// }
