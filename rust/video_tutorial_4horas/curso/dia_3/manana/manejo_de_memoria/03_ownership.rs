// ----- Ownership -------

// Todos los enlaces a variables tienen un ambito donde son validos
// y se produce un error cuando se usan fuera de el

struct Point(i32, i32);

fn main() {
    {
        let p = Point(3, 4);
        println!("x: {}", p.0);
    }
    // al final del ambito, la variable se elimina y los datos se liberan (liberando memoria)
    
    println!("y: {}", p.1); // esta fuera del scope
}
