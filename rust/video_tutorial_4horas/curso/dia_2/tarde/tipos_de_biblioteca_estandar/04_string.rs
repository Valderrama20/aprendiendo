fn main() {
    let mut s1 = String::new();
    s1.push_str("Hola");
    println!("s1: longitud = {}, capacidad = {}", s1.len(), s1.capacity());

    let mut s2 = String::with_capacity(s1.len() + 1);
    s2.push_str(&s1);
    s2.push('!');
    println!("s2: longitud= {}, capacidad = {}", s2.len(), s2.capacity());

    let s3 = String::from("🇨🇭");
    println!(
        "s3: longitud = {}, número de caracteres = {}",
        s3.len(),
        s3.chars().count()
    );
}

// String implementa [Deref<Target = str>][2], lo que significa que puedes llamar
// a todos los métodos str en una String.

// String::new devuelve una nueva cadena vacía. Usa String::with_capacity
//  cuando sepas cuántos datos quieres guardar.
// String::len devuelve el tamaño de String en bytes (que puede ser
//      diferente de su longitud en caracteres).
// String::chars devuelve un iterador sobre los caracteres reales.
// Ten en cuenta que un char puede ser diferente de lo que un humano
// consideraría un “caracter”, debido a los grupos de grafemas.
