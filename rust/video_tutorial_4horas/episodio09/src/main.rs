
// Punteros

// EN rust los punteros sun una referencia hacia un valor el cual se guarda el el heap
// para esto utilizamos box 


fn main() {

    let x = 5;                 // x en el stack
    let b = Box::new(5);  // 5 se guarda en el heap y b guarda una referencia hacia el (la direccion)

    // Esto nos puede servir mucho cuando queremos trabajor con estructuras muy pesadas
    // ya que en lugar de manejar la estructura, manejamos la referencias las cuales
    // solo pesan 8 bites
    
    // Para utilizar b necesitamos desreferenciar el valor 
    // y esto lo hacemos con el "*"
    println!("x = {x}, b = {}", *b);
}
