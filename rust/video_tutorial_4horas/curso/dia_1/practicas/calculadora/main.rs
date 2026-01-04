fn main() {
    println!(
        "Seultado de la operacion {:?}",
        calcular(3.5, 8.5, Operation::Suma)
    );
}

#[derive(Debug)]
enum Operation {
    Suma,
    Resta,
    Multiplicacion,
    Divicion,
}

fn calcular(a: f64, b: f64, op: Operation) -> Option<f64> {
    match op {
        Operation::Suma => Some(a + b),
        Operation::Resta => Some(a - b),
        Operation::Multiplicacion => Some(a * b),
        Operation::Divicion => {
            if b == 0.0 {
                None
            } else {
                Some(a / b)
            }
        }
    }
}
