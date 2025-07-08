use std::cmp::Ordering;

fn describe_number(n: i32) -> &'static str {
    match n.cmp(&0) {
        Ordering::Less => "Negatico",
        Ordering::Equal => "cero",
        Ordering::Greater => "positivo",
    }
}

fn main() {
    println!("El numero es: {}", describe_number(0));
}
