// ------ Panicos ----------

// Rust getiona los errores criticos con "panico"(panic)
// Si tenemos un error grave este se activa

fn main() {
    let v = vec![10, 20, 30];
    println!("v[100]: {}", v[100]);
}
