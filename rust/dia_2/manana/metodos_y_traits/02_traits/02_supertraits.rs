// En algunos casos un trait puede reuqerir que los tipos que lo implemente
// tambien implementen otros traits. Estos se llaman, supertraits

//Aqui cualquier tipo que implemente Pet, tambien debe implementar Animal

trait Animal {
    fn leg_count(&self) -> u32;
}

trait Pet: Animal {
    fn name(&self) -> String;
}

struct Dog(String);

impl Animal for Dog {
    fn leg_count(&self) -> u32 {
        4
    }
}

impl Pet for Dog {

    // METODO .clone: Este hace una copia y devuelve un string nuevo, no una referencia
    fn name(&self) -> String {
        self.0.clone()
    }
}

fn main(){
    let puppy = Dog(String::from("Rex"));
    println!("{} tiene {} piernas", puppy.name(), puppy.leg_count());
}
