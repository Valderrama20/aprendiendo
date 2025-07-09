// Rango con guardas
// Función que reciba un número entero y devuelva:

// "small" si está entre 0–10,

// "medium" si está entre 11–100,

// "large" si es mayor que 100.

// Usa rangos (0..=10) y guardas (n if n > 100).

fn size_of_number(number: i32) -> &'static str {
    match number {
        0..=10 => "small",
        1..=100 => "medium",
        n if n > 100 => "",
        _ => "desconocido"
    }
}

fn main() {
    println!("El numero es: {}", size_of_number(20));
}
