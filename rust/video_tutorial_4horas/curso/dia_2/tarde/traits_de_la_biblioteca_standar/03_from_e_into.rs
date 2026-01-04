// From e Into

// Los tipos implementan from e into para falicitar la conversion de los tipos

// fn main() {
//     let s = String::from("hola");
//     let addr = std::net::Ipv4Addr::from([127, 0, 0, 1]);
//     let one = i16::from(true);
//     let bigger = i32::from(123_i16);
//     println!("{s}, {addr}, {one}, {bigger}");
// }

// Into se implmenta automaticamente cuando se implementa from

fn main() {
    let s: String = "hola".into();
    let addr: std::net::Ipv4Addr = [127, 0, 0, 1].into();
    let one: i16 = true.into();
    let bigger: i32 = 123_i16.into();
    println!("{s}, {addr}, {one}, {bigger}");
}
