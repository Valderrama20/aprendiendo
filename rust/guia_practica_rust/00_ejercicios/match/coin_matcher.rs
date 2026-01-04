// Coin matcher (del libro oficial)
// Define un enum Coin { Penny, Nickel, Dime, Quarter } y una
// función value_in_cents(coin: Coin) -> u8 que devuelva el valor en centavos usando
// match

enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter,
}

fn value_in_cents(coin: Coin) -> f64 {
    match coin {
        Coin::Penny => 0.01,
        Coin::Nickel => 0.05,
        Coin::Dime => 0.10,
        Coin::Quarter => 0.25,
    }
}

fn main() {
    println!("El valor en centavos de un Penny es: {}", {
        value_in_cents(Coin::Penny)
    })
}
