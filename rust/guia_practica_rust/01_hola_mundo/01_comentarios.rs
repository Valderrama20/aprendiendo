// En rust tenemos distinta formas de hacer comentarios

// - comentarios periodicos que son ingnorados por el compilador:

// para comentarios de una linea utilziamos "//"
// para comentarios de multiples lineas tenemos "/* comentario */"

// - Comentarios utilizados para documentar el codigo

// con "///" podemos generar un comentario que se muestra 
// al generar la documentacion del codigo
// este comentario lo ponemos antes del elemento que queremos documentas, ejemplo: funciones

// con "//!" tambien podemos agregar documentacion,
// la diferencia es que esta forma la utilizamos en el 
// interior de funciones, etc

fn main() {
    // This is an example of a line comment.
    // There are two slashes at the beginning of the line.
    // And nothing written after these will be read by the compiler.

    // println!("Hello, world!");

    // Run it. See? Now try deleting the two slashes, and run it again.

    /*
     * This is another type of comment, a block comment. In general,
     * line comments are the recommended comment style. But block comments
     * are extremely useful for temporarily disabling chunks of code.
     * /* Block comments can be /* nested, */ */ so it takes only a few
     * keystrokes to comment out everything in this main() function.
     * /*/*/* Try it yourself! */*/*/
     */

    /*
    Note: The previous column of `*` was entirely for style. There's
    no actual need for it.
    */

    // You can manipulate expressions more easily with block comments
    // than with line comments. Try deleting the comment delimiters
    // to change the result:
    let x = 5 + /* 90 + */ 5;
    println!("Is `x` 10 or 100? x = {}", x);
}