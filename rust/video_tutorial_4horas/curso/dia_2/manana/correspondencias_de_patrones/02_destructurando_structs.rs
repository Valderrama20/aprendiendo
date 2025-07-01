



struct Foo {
    x: (u32, u32),
    y: u32,
}

#[rustfmt::skip]
fn main () {
    // Al igual que las tuplas, las structuras se pueden desestructurar con la coincidencia
    
    let foo = Foo { x : (10, 2), y: 10};
    match foo {
        Foo { x: (1, b), y } => println!("x.0 = 1, b = {b}, y = {y}"),
        Foo { y: 2, x: i }   => println!("y = 2, x = {i:?}"),
        Foo { y, .. }        => println!("y = {y}, se han ignorado otros campos"),
    }

}