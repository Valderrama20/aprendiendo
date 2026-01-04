// ----------- Operador Try (Intentar) -------------

// con el operador "?" podemos arrojar los errores hacia arriba
// sin tener que utilizar la conincidencia de patrones (match)
// en todos lados, haciendo nuestro codigo mas legible y
// facil de entender

//transformando esto:
match some_expression {
    Ok(value) => value,
    Err(err) => return Err(err),
}

// a esto: 
some_expression?

// podemos utilizar para gestionar la logica de gestion de errores:
use std::io::Read;
use std::{fs, io};

fn read_username(path: &str) -> Result<String, io::Error> {
    let username_file_result = fs::File::open(path)?;
    // let mut username_file = match username_file_result {
    //     Ok(file) => file,
    //     Err(err) => return Err(err),
    // };

    let mut username = String::new();
    username_file.read_to_string(&mut username)?;

    // match username_file.read_to_string(&mut username) {
    //     Ok(_) => Ok(username),
    //     Err(err) => Err(err),
    // }
}

fn main() {
    //fs::write("config.dat", "alice").unwrap();
    let username = read_username("config.dat");
    println!("nombre de usuario o error: {username:?}");
}