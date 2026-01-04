// ------- Trait Clone ---------

// Cuando queremos hacer una copia de un valor lo podemos hacer con trait clone.

fn say_hello(name: String) {
    println!("Hola {name}");
}

fn main() {
    let name = String::from("Alice");
    say_hello(name.clone());
    say_hello(name);
    // al hacer esto se hace una copia de name por lo cual al hacer la 
    // segunda llamada no hay problemas por que name sigue existiendo
}


