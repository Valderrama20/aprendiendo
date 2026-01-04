
// Option nos devuelve un valor "Some(value)" o la usencia total de el "None"
// Hay que tener mucho cuidado con unwrap ya que si el valor el none
// detiene el progama "paniquea"
// .expect tambien paniquea pero este es mas controlado

fn main() {
    let name = "Löwe 老虎 Léopard Gepardi";
    let mut position: Option<usize> = name.find('é');
    println!("buscar {position:?} devuelto");
    assert_eq!(position.unwrap(), 14);
    position = name.find('Z');
    println!("buscar {position:?} devuelto");
    assert_eq!(position.expect("No se ha encontrado el carácter"), 0);
}