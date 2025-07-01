// ------------ Rc --------------

// Rc es un puntero compartido de referencia contada, lo utilizamos cuando
// necesitamos hacer referencia a los mismo datos desde varios lugares

use std::rc::Rc;

fn main() {
    let a = Rc::new(10);
    let b = Rc::clone(&a);

    println!("a: {a}");
    println!("b: {b}");
}

// si nos encontramos en un contexto multi hilo podemos utilizar 
// Arc o Mutex