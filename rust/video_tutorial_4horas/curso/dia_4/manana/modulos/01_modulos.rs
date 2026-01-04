mod foo {
    pub fn do_something() {
        println!("En el módulo foo");
    }
}

mod bar {
    pub fn do_something() {
        println!("En el módulo bar");
    }
}

fn main() {
    foo::do_something();
    bar::do_something();
}