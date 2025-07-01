// ----- constantes ------

// Rust tiene dos tipos de constantes diferentes que se pueden declarar
// ambos requieren que se indique su tipo al momento de declararla

// - cosnt: valor inmutable (caso comun)
// - static: Una variable posiblemente mutable (no se recomienda mutarla)

// Globals are declared outside all other scopes.
static LANGUAGE: &str = "Rust";
const THRESHOLD: i32 = 10;

fn is_big(n: i32) -> bool {
    // Access constant in some function
    n > THRESHOLD
}

fn main() {
    let n = 16;

    // Access constant in the main thread
    println!("This is {}", LANGUAGE);
    println!("The threshold is {}", THRESHOLD);
    println!("{} is {}", n, if is_big(n) { "big" } else { "small" });

    // Error! Cannot modify a `const`.
    // THRESHOLD = 5;
    // FIXME ^ Comment out this line
}