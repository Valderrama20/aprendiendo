fn main() {
    // Condicionales

    // Podemos utilizar expresiones if de la misma manera que en otros lenguajes
    let x: i32 = 10;

    if x == 0 {
        println!("cero!");
    } else if x < 100 {
        println!("muy grande!");
    } else {
        println!("Enorme");
    }

    // Tambien podemos utilziar un if como si fuera un ternario, en pocas palabras tenemos una expresion
    let _num: i32 = 10;
    let size = if x < 20 { "Pequeño" } else { "Grande" };
    println!("tamaño del numero: {}", size);

    // Bucles

    // Hay tes tipos de bucles en rust: while, loop y for

    // Bucles While:
    // Al similar que en otros lenguajes, este se ejecuta mientras se cumpla una condicion

    let mut number = 200;
    while number >= 10 {
        number = x / 2;
    }
    println!("number final, {number}");

    // Bucles For
    // El bucle for puede iterar sobre un rango de valores o la entrada de una coleccion

    // si el rango yo lo defino asi: 1..5 no incluye el 5 pero si ponemos el rango asi: 1..=5 si lo incluye
    for y in 1..=5 {
        println!("Numero: {y}");
    }

    for elem in [1, 2, 3, 4, 5] {
        println!("Elem: {elem}");
    }

    // Bucles Loop

    // El Bucle loop se repite hasta detenerse con un break
    let mut i = 1;
    loop {
        i += 1;
        println!("{i}");
        if i > 10 {
            break;
        }
    }

    // break y continue
    // En rus tambien tenemos continue. Lo utilizamos cuando queremos saltar al la siguiente ejecucion del blucle
    // i si queremos detener por completo el bucle, utilzamos break
    let mut index = 0;
    loop {
        index += 1;
        if index > 5 {
            break;
        }
        if index % 2 == 0 {
            continue;
        }
        println!("{}", index);
    }

    // Etiquetas
    // De forma opcional continue y break pueden utilizar etiquetas para interrumpir bucles anidados
    let s = [[5, 6, 7], [8, 9, 10], [21, 15, 32]];
    let mut elements_searched = 0;
    let target_value = 10;

    'outer: for i in 0..=2 {
        for j in 0..=2 {
            elements_searched += 1;
            if s[i][j] == target_value {
                break 'outer;
            }
        }
    }
    print!("elementos travesados: {elements_searched}");

    // Bloques y ambitos

    // En rust un bloque contiene una secuencia de expresiones rodeadas por llaves.
    // Cada bloque tiene el tipo y el valor de la ultima expresion del bloque
    // Si la ultima expresion termina por con ";". el tipo y valor resultante sera "()"

    let z = 13;
    let u = {
        let y = 10;
        println!("y: {y}");
        z - y
    };
    println!("u: {u}");

    // Ambitos y shadowing

    // EL ambito de una variable se limita al bloque que la contiene
    // Tambien se pueden sombrear variables lo cual en pocas palabras en sobreponer un valor
    // El cual vive en un ambito especifico

    let a2 = 10;
    println!("Antes: {a2}");

    {
        let a2 = "hola";
        println!("Ambito interno: {a2}");

        let a2 = true;
        println!("Sombreado en ambito interno: {a2} ");
    }

    println!("despues: {a2}");

    // Funciones

    
}
