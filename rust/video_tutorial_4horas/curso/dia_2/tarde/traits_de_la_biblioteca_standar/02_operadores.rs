// Operadores

// La sobre carga de operadores se implementan mediante traits en std::ops

#[derive(Debug, Copy, Clone)]
struct Point {
    x: i32,
    y: i32,
}

impl std::ops::Add for Point {
    type Output = Self;

    fn add(self, other: Self) -> Self {
        Self {
            x: self.x + other.x,
            y: self.y + other.y,
        }
    }
}

fn main (){
    let p1 = Point { x:10, y:20};
    let p2 = Point { x:40, y:30};
    println!("{:?} + {:?} = {:?}", p1, p2, p1 + p2);
}
