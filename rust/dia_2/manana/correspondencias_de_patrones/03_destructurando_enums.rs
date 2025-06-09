enum Result {
    Ok(i32),
    Err(String),
}

fn divide_in_two(n: i32) -> Result {
    if n % 2 == 0 {
        Result::Ok(n / 2)
    } else {
        // format!() es lo mismo que crear un string con string::from()
        // pero de esta forma tenemos soporte para la interpolacion de varibles
        // y retorna el string creado
        Result::Err(format!("No se puede dividir {n} en dos partes iguales"))
    }
}

fn main() {
    // Al igual que las tuplas, las enumeracions tambien se pueden
    // destructurar con la conincidencia
    let n = 100;
    match divide_in_two(n) {
        Result::Ok(result) => println!("{n} devidido entre dos es {result}"),
        Result::Err(msg) => println!("Se ha producido un error: {msg}"),
    }
}
