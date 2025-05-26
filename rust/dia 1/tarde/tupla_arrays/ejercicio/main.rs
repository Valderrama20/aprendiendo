// Funcion paea transponer un arr en dos dimensiones
fn main() {
    let matrix = [
        [101, 102, 103], // <-- el comentario hace que rustfmt añade una nueva línea
        [201, 202, 203],
        [301, 302, 303],
    ];

    println!("{:?}", transpose(matrix));
}

fn transpose(matrix: [[i32; 3]; 3]) -> [[i32; 3]; 3] {
    let mut arr_transposed = [[0; 3]; 3]; // aqui estamos creando un arr con sub arr con un largo de 3 cada uno

    // let arr_lent = matrix.len(); // Con .len() podemos obtener el largo de un arr
    for i in 0..3 {
        for j in 0..3 {
            arr_transposed[i][j] = matrix[j][i];
        }
    }

    arr_transposed
}
