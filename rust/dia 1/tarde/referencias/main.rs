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
}
