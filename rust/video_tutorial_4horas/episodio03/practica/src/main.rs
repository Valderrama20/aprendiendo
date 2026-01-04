fn main() {
    // Variable vacia
    let mut name = String::new();
    println!("Enter your nombre: ");

    // Le pedimos al usuario que ingrese su nombre
    std::io::stdin().read_line(&mut name).unwrap();
    
    //Obtenemos la cantidad de caracteres del nombre
    // pasamos una referencia no mutable de name
    let name_length = caracteres_en_tu_nombre(&name);
    
    // concatenamos un string con el nombre
    // pasamos una referencia mutable de name
    add_to_string(&mut name);

    println!("Este es tu nombre: {name} y tiene {name_length} caracteres");
}

fn add_to_string(s: &mut String) {
    s.push_str("Suscribete a Stan Tech");
}

fn caracteres_en_tu_nombre(s: &String) -> usize {
    s.len()
}
