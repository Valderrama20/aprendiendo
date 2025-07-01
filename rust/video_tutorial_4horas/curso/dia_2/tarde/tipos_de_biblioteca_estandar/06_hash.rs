use std::collections::HashMap;

fn main() {
    let mut page_counts = HashMap::new();
    page_counts.insert("Las aventuras de Huckleberry Finn", 207);
    page_counts.insert("Los cuentos de los hermanos Grimm", 751);
    page_counts.insert("Orgullo y prejuicio", 303);

    if !page_counts.contains_key("Los miserables") {
        println!(
            "Tenemos información acerca de {} libros, pero no de Los miserables.",
            page_counts.len()
        );
    }

    for book in [
        "Orgullo y prejuicio",
        "Las aventuras de Alicia en el país de las maravillas",
    ] {
        match page_counts.get(book) {
            Some(count) => println!("{book}: {count} páginas"),
            None => println!("{book} es desconocido."),
        }
    }

    // Utiliza el método .entry() para insertar un valor si no se encuentra ningún resultado.
    for book in [
        "Orgullo y prejuicio",
        "Las aventuras de Alicia en el país de las maravillas",
    ] {
        let page_count: &mut i32 = page_counts.entry(book).or_insert(0);
        *page_count += 1;
    }

    // Prueba las siguientes líneas de código. La primera línea comprobará si un
    // libro está incluido en el hashmap y, si no, devolverá un valor alternativo.
    //  La segunda línea insertará el valor alternativo en el hashmap si el libro no
    //   se encuentra.

    let pc1 = page_counts
        .get("Harry Potter y la piedra filosofal")
        .unwrap_or(&336);
    let pc2 = page_counts
        .entry("Los juegos del hambre".to_string())
        .or_insert(374);
    
    // De esta forma podemos inicializar un hashMap con un arr literal
    let page_counts2 = HashMap::from([
        ("Harry Potter y la piedra filosofal".to_string(), 336),
        ("Los juegos del hambre".to_string(), 374),
    ]);

    println!("{page_counts:#?}");
}
