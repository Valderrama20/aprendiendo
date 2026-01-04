fn main() {
    for i in 1..=10 {
        if let is_part = i % 2 == 0 {
            println!("i = {} es part?? {}", i, is_part);
        } else {
             println!("i = {} es part?? {}", i, false);
        }
    }
}
