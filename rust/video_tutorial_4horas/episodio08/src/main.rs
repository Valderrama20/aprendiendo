// Closures

// Las closures en Rust son funciones anonimas las cuales podemos guardar en una variable
// para utilizar despues, esta pueden caturar variables
// del contesto donde se definen

fn main() {
    // Sintasis
    // Se utilizan barras verticales para indicar los parametros
    // Declaracion de una closure que suma dos numeros
    let suma = |a: i32, b: i32| -> i32 { a + b };

    let resultado = suma(20, 30);

    // En rust tenemos tres formas de de clousures
    // 1. Toma posesion de la variable
    // 2. Puede mutar la variable externa pero no toma posesion de ella
    // 3. Toma una referencia de la variable, no muta ni toma posesion

    // 1. Captura el valor (move):
    let consumible = String::from("Jose");
    let cerrar = move || {
        // cerra toma posesion de consumible y deja de existir en el scope externo
        print!("{}", consumible);
    };

    cerrar();

    // 2. Puede mutar la variable
    let mut contador = 0;
    let mut incrementar = || {
        contador += 1;
        println!("contador: {}", contador)
    };

    incrementar();

    //3. Toma una referencia, no toma posesion ni muta a variable
    let saludo = String::from("Holaaa");
    let imprimir = || println!("Suludo: {}", saludo);

    imprimir();

    println!("20 + 30 = {}", resultado);
    
    // Iteradores
    // Los iteradores son metodos lo cuales podemos
    // utilizar para recorrer elementos de forma expresiva

    let mut v = vec![1,2,3];

    // .iter() devuelve &i32
    let iter_inmutable = v.iter();

    // .iter_mut() devuelve &mut i32
    let iter_mutable = v.iter_mut();

    // .into_iter() consume el vector y devuelve i32
    let iter_consumo = v.into_iter();

    // Con los iteradores podemos utilizar metodos comunes
    // como el map, filter, collet, for_each
    
    // Map y collet
    let numeros = vec![1,2,3,4,5,6];
    
    // incrementar en uno todos los numero del vector
    // para esto utilizamos el map para incrmentar en uno 
    // y luego collect para convertirlo nuevamente en un vector

    let mas_uno: Vec<_> = numeros.iter().map(|x|  x + 1 ).collect();

    println!("vector con mas uno en cada numero {:?}", mas_uno);

    // Filtrar numeros pares

    // para esto utilizamos el metodo filter
    // el cual funciona igual que en ts
    // el metodo filter recibe una closure o funcion anonima y esta retorna un boleano
    // para indicar si filtra o no

    let pares: Vec<_> = (1..=10).filter(|number| number % 2 == 0).collect();

    println!("Numeros pares del 1 al 10: {:?}", pares);

    // for_each sin return

    // el for_each funcion exatamente igual que en ts
    // este ejecuta una funcion por cada elemento

    (1..4).for_each(|number| println!("Valor: {number}"));


}
