// ---------- Verificacion de prestamos -----------

// El borrow cheker de rust liminta las formas en las que se pueden tomar prestados
// los valores. Para un dado valor, en cualquier tiempo

// Se pueden tener varios valores referenciados &T
// pero solo se puede tener una referencia exclusiva a un valor

fn main() {
    let mut a: i32 = 10;
    let b: &i32 = &a;
    println!("b: {b}");

    {
        let c: &mut i32 = &mut a;
        *c = 20;
    }
    println!("a: {a}");
}
