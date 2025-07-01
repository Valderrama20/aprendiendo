// Rust al igual que ts tiene genericos
// lo que nos permite una gran flexibilidad y 
// nos permite abstraer algoritmos y estructuras de datos
// sobre los tipos almacenados y utilizados

/// Elige `even` u `odd` en función de si `n` es par o impar.
fn pick<T>(n: i32, avent: T, odd: T) -> T{
    if n % 2 == 0 {
        avent
    } else {
        odd
    }
}

fn main(){
    println!("número elegido: {:?}", pick(97, 222, 333));
    println!("tupla elegida: {:?}", pick(28, ("perro", 1), ("gato", 2)));
}

// los genericos son muy buenos en rendimiento debido 
// que al momento de compilar rust obtiene el tipado exacto 
// y lo coloca