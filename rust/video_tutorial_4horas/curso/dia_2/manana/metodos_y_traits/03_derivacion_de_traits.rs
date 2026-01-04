// Los traits compatibles se pueden implementar de manera automatica,
// de la siguiente manera

// #[derive(...)] nos da implementacions automaticas para no tener que hacerlas a mano

#[derive(Debug, Clone, Default)]

// Debug: Nos permite imprimir estructuras en formato legible para la depuracion 
// asi cuando escribimos "println!("{:?}", p1)" rust ya sabe como formatear el campo

// Clone: Este nos permite crear una compia independiente en memoria del valor

// Default: Lo utilizamos cuando no queremos especificar manualmente todos los campos
// este crea un valor default dependiendo del tipo


struct Player {
    name: String,
    stringth: u8,
    hit_points: u8,
}

fn main() {
    let p1 = Player::default(); // El trait predeterminado anade el constructor "default"
    let mut p2 = p1.clone(); // El trait clonado anade el metodo "clone"
    p2.name = String::from("EldurScrollz");
    // El trait "Debug" permite que sea conmpatible al imprimir con {:?}
    println!("{:?} contra {:?}", p1, p2)
}
