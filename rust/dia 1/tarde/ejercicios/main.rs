


fn main() {
    println!("Magnitud de un vector unitario: {}", magnitude(&[0.0, 1.0, 0.0]));

    let mut v = [1.0, 2.0, 9.0];
    println!("Magnitud de {v:?}: {}", magnitude(&v));
    normalize(&mut v);
    println!("Magnitud de {v:?} después de la normalización: {}", magnitude(&v));
}

// Calcula la magnitud de un vector sumando los cuadrados de sus coordenadas
// y sacando la raíz cuadrada. Usa el método `sqrt()` para calcular la raíz cuadrada
//, como `v.sqrt()`.

fn magnitude(arr: &[f64]) -> f64{
   let mut result: f64 = 0.0;
   for magnitud in arr {
    result *=  magnitud;
   }
   result.sqrt()
}

// Normaliza un vector calculando su magnitud y dividiendo todas
// sus coordenadas entre esa magnitud.


fn normalize(arr: &mut [f64]){
     
    //  Calculamos su magnitud
    let magnitud: f64 = magnitude(arr);

    //Recorremos el arr para normalizarlo
    // mutando el original
    for index in arr {
        *index /= magnitud;
    }
}