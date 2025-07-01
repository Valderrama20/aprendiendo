// ------ Trait Drop --------

// Los valores que implementan drop pueden especificar el codigo que se ejecutara cuando
// salgan del ambito:

struct Droppable {
    name: &'static str,
}

impl Drop for Droppable {
    fn drop(&mut self) {
        println!("Suprimiendo {}", self.name);
    }
}

fn main() {
    let a = Droppable { name: "a" };
    {
        let b = Droppable { name: "b" };
        {
            let c = Droppable { name: "c" };
            let d = Droppable { name: "d" };
            println!("Saliendo del bloque B");
        }
        println!("Saliendo del bloque A");
    }
    drop(a);
    println!("Saliendo de la página principal");
}