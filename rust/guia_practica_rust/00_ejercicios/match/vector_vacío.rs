// Vector vacío o no
// Función que reciba un Vec<T> y devuelva "Vector is empty!" si está vacío, o
// "Vector is not empty!" si no.

fn is_vec_empty<T>(vec: Vec<T>) -> &'static str {
    match vec.len() {
        0 => "Vector is empty!",
        _ => "Vector is not empty!",
    }
}

fn main() {
    println!("{}", is_vec_empty::<i32>(vec![]))
}
