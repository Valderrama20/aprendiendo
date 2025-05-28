fn main() {
    // Enums compartidas

    // De esta forma podemos hacer referencia a un valor pero sin asumir ese valor
    // La referencias son de solo lectura, por lo cual no se puede reescribir el valor de una referencias
    // asi sea mutable

    // Rust no crea referencias automaticamente,
    // Para crear una referencia es obligatorio utilzar "&" y para obtener el valor de esa referencia utilizamos "*"
    // En pocas palabas, desrenferenciamos el valor

    let a = 'A';
    let b = 'B';

    let mut r: &char = &a;
    println!("r: {}", *r);
    r = &b;
    println!("r: {}", *r);

    // Rust prohibirá estáticamente las referencias colgantes:

    // fn x_axis(x: &i32) -> &(i32, i32) {
    //     let point = (*x, 0);
    //     return &point;
    // }

    // Referencias exclusivas

    // Estas referencias nos permiten cambiar el valor al que se esta referenciando
    // tienen el tipo "&mut T"

    let mut point = (1, 0);
    let x_cord = &mut point.0;
    *x_cord = 20;
    println!("point: {point:?}");

    // Aqui es importante tener estas referencias son exlcusivas por lo cual
    // solo se puede crear una y que miestras "*x_cord" este activo, no se puede acceder a ese valor de referencias

    // Ten en cuenta la diferencia entre let mut x_coord: &i32 y let x_coord: &mut i32. La primera representa
    // una referencia mutable que se puede vincular a distintos valores, mientras que la segunda representa
    // una referencia a un valor mutable.

    // Slices

    // En pocas palabras aqui recortamos un pedazo del arr

    let mut a: [i32; 6] = [10, 20, 30, 40, 50, 60];
    println!("a: {a:?}"); // al utiliza ":?" tranformamos el arr para mostrarlo

    let s: &[i32] = &a[2..4];

    // Pregunta: ¿Qué ocurre si se modifica a[3] justo antes de imprimir s?
    // EL compilaro nos tira un error y no podemos modificar un arr una vez ya tengamos una referencia

    // a[3] = 20;

    println!("s: {s:?}");

    // Cadenas de texto (strings)

    // En rust tenemos dos tipos de cadenas

    // &str es un slice de bytes codificados en UTF-8, parecido a &[u8].
    // String es un buffer adueñado de bytes codificados en UTF-8, parecido a Vec<T>.

    let s1: &str = "mundo";
    println!("s1: {s1}");

    let mut s2: String = String::from("Hola ");
    println!("s2: {s2}");
    s2.push_str(s1);
    println!("s2: {s2}");

    let s3: &str = &s2[s2.len() - s1.len()..];
    println!("s3: {s3}")    
}
