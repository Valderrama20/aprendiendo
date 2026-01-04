fn string_to_number(value: &str) -> Option<i32> {
    match value.parse() {
        Ok(number) => Some(number),
        Err(_) => None,
    }
}

fn main() {
    println!("El valor de 20 a numer es: {:?}", string_to_number("20"));
}
