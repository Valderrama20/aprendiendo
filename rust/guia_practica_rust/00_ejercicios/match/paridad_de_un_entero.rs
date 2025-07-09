// Paridad de un entero
// Escribe una función que reciba un i32 y devuelva "even" si es par, o "odd"
// si es impar.

fn paridad_entero(number: i32) -> String {
    match number {
        n if n % 2 == 0 => String::from("even"),
        _ => String::from("odd"),
    }
}

fn main() {
    println!("{}", paridad_entero(11));
}
