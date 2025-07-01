// Los traits tambien puden ser genericos,
// los parametros de un trait obtienen su
// tipo concreto cuando se utilizan

#[derive(Debug)]
struct Foo(String);

impl From<u32> for Foo {
    fn from(from:u32) -> Foo {
        Foo(format!("Convertido del numero entero: {from}"))
    }
}

impl From<bool> for Foo {
    fn from(from:bool) -> Foo {
        Foo(format!("Convertido del bool: {from}"))
    }
}

fn main(){
    let from_int = Foo::from(123);
    let from_bool = Foo::from(true);
    println!("{from_int:?}, {from_bool:?}");
}