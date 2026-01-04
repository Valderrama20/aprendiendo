#[derive(Debug)]
struct Meters(i32);

#[derive(Debug)]
struct MetersSquared(i32);

// trait a aplicar
trait Multiply {
    type Output;
    fn multiply(&self, other: &Self) -> Self::Output;
}

impl Multiply for Meters {
    // Tipo de retorno
    type Output = MetersSquared;
    
    // Metodo para multiplicar el primer paramatro por el segundo
    fn multiply(&self, other: &Self) -> Self::Output {
        MetersSquared(self.0 * other.0)
    }
}

fn main() {
    println!("{:?}", Meters(10).multiply(&Meters(20)));
}