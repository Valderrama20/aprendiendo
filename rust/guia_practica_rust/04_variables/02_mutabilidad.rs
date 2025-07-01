// ------- Mutabilidad ----------

/*
   Las variables en rust son inmutable de forma predeterminada,
   si queremos modificar una variable tenermos que indicar que es mutable
   utilizando "mut" despues de let
*/

fn main() {
    let _immutable_binding = 1;
    let mut mutable_binding = 1;

    println!("Before mutation: {}", mutable_binding);

    // Ok
    mutable_binding += 1;

    println!("After mutation: {}", mutable_binding);

    // Error! Cannot assign a new value to an immutable variable
    // _immutable_binding += 1;
}
