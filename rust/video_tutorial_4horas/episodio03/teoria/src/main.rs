// En rust al manejar la memoria tenemos dos cosas muy importante
// el stack y el heat
// En el stack se almacena toda la informacion que ya se conoce y por lo tanto no cambia
// en le stack el acceso muy rapio
// En el heat se almacena toda la informacion variable, aqui el acceso a la informacion es
// un poco mas lento

fn main() {
    // Hola no existe
    let hola = "hola"; // hola se crea y al ser inmutale se guarda en stack
    println!("{hola}"); // se usa hola
    //Hola deja de estar en uso por lo cual se eliminar de la memoria

    //sigo con mi codigo

    let s = String::from("PruebaOwnership");
    let x2 = nuevo_return(String::from("hola"));

    let x = 5;
    aqui_copio(x); // los numeros ya tiene el copy implementa por lo cual se le pasa un copia y no el valor total la funcion
    println!("{x}");


    nuevo_dueno(s); //Aqui movemos el valor de s a la funcion

    // Esto daria un error ya que el dueno de sy ya nuevo return,
    // por lo cual ya sy no tiene valor al intentar imprimirlo

    //  let sy = String::from("sy");
    //  let sc = nuevo_return(sy);
    //  println!("{sy}")
    
    // En el sigueinte caso como pasamos una referencia de mi variable y no el valor
    // yo puedo seguir utilizar mi variable despues 

    let sa = String::from("sy");
    let sa_lent = aqui_referencia(&sa);
    println!("El largo del string {sa} es: {sa_lent} caracteres");

    // referencia mutable
    let mut sv = String::from("Hasta ");
    add_to_string(&mut sv);
    println!("{sv}");
}

fn nuevo_dueno(sting: String) {
    println!("{sting}");
}

fn aqui_copio(i: i32) {
    println!("{i}");
}

fn nuevo_return(sting: String) -> String {
    sting
}

fn aqui_referencia(sting: &String) -> usize {
    sting.len()
}

fn add_to_string(sting: &mut String) {
    sting.push_str("nunca");
}
