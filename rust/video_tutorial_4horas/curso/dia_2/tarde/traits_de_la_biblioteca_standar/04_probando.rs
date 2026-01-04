// Probando

// Rust no tiene conversion de tiplos implicitas, pero admite conversion explicitas con as.
// por lo general se define segun la semantica de C.

fn main() {
    let value: i64 = 1000;
    println!("ya que u16: {}", value as u16);
    println!("ya que i16: {}", value as i16);
    println!("ya que u8: {}", value as u8);
}

// aqui al pasar el elemento de un u16 a u8, perdemos la informacion 
// de lo bits que estan mas arriba, hay que teenr cuidado con as 
// si queremos hacer una conversion de un u32 a u64 es recomendable utilizar el
// metodo from de los tipos

