// ---------- Alias ----------------

// La declaracion "type" la podemos utilizar para darle otro nombre a un tipo existente
// es importente que el nuevo nombre este escrito en UpperCamelCase, o el compilador generará una advertencia.

// `NanoSecond`, `Inch`, and `U64` are new names for `u64`.
type NanoSecond = u64;
type Inch = u64;
type U64 = u64;

fn main() {
    // `NanoSecond` = `Inch` = `U64` = `u64`.
    let nanoseconds: NanoSecond = 5 as u64;
    let inches: Inch = 2 as U64;

    // Note that type aliases *don't* provide any extra type safety, because
    // aliases are *not* new types
    println!("{} nanoseconds + {} inches = {} unit?",
             nanoseconds,
             inches,
             nanoseconds + inches);
}

// el uso principal de los alias es reducir el codigo repetitivo