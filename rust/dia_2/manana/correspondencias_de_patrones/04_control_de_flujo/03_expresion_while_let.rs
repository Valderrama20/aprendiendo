
// Tambien tenemos el while let el cual prueba un valor
// respetidamente con respecto a un patron

// un muy parecito al if let pero repitiendo

fn main() {
    let mut name = String::from("Comprehensive Rust 🦀");
    
    // Simepre que se retorne Some(), el while va a seguir trabajando
    while let Some(c) = name.pop() {
        println!("character: {c}");
    }
}