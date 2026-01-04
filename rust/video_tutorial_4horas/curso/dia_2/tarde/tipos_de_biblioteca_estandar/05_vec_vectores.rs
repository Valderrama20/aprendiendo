
// En pocas palabras un vector es un arr

fn main() {
    let mut v1 = Vec::new();
    v1.push(42);
    println!("v1: longitud= {}, capacidad = {}", v1.len(), v1.capacity());

    let mut v2 = Vec::with_capacity(v1.len() + 1);
    v2.extend(v1.iter());
    v2.push(9999);
    println!("v2: longitud= {}, capacidad = {}", v2.len(), v2.capacity());

    // Macro canónica para inicializar un vector con elementos.
    let mut v3 = vec![0, 0, 1, 2, 3, 4];

    // Conserva solo los elementos pares.
    v3.retain(|x| x % 2 == 0);
    println!("{v3:?}");

    // Elimina los duplicados consecutivos.
    v3.dedup();
    println!("{v3:?}");
}