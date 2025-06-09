// Operaciones que se pueden realizar en las expresiones
#[derive(Debug)]
enum Operation {
    Add,
    Sub,
    Mul,
    Div,
}

// Una expresion en forma de arbol
#[derive(Debug)]
enum Expression {
    // Operacion con dos sub expresiones
    Op {
        op: Operation,
        left: Box<Expression>,
        right: Box<Expression>,
    },

    // Un Valor literal
    Value(i64),
}

fn eval(e: Expression) -> Result<i64, String> {
    match e {
        Expression::Value(result) => Ok(result),
        Expression::Op { op, left, right } => {
            // obtenemos el valor desreferenciando la expresion

            // Aqui llamamos recursivamente a eveal
            // si se resuelve con Ok(valor), se le asigna a l o r
            // Si la respuesta es Err(err), se corta la ejecucion y se retorna ese valor.
            // en pocas palabras estamos propagando el error

            let l = eval(*left)?;
            let r = eval(*right)?;

            Ok(match op {
                Operation::Add => l + r,
                Operation::Sub => l - r,
                Operation::Mul => l * r,
                Operation::Div => {
                    if r == 0 {
                        return Err("división entre cero".to_string());
                    } else {
                        l / r
                    }
                }
            })
        }
    }
}

#[test]
fn test_value() {
    assert_eq!(eval(Expression::Value(19)), Ok(19));
}

#[test]
fn test_sum() {
    assert_eq!(
        eval(Expression::Op {
            op: Operation::Add,
            left: Box::new(Expression::Value(10)),
            right: Box::new(Expression::Value(20)),
        }),
        Ok(30)
    );
}

#[test]
fn test_recursion() {
    let term1 = Expression::Op {
        op: Operation::Mul,
        left: Box::new(Expression::Value(10)),
        right: Box::new(Expression::Value(9)),
    };
    let term2 = Expression::Op {
        op: Operation::Mul,
        left: Box::new(Expression::Op {
            op: Operation::Sub,
            left: Box::new(Expression::Value(3)),
            right: Box::new(Expression::Value(4)),
        }),
        right: Box::new(Expression::Value(5)),
    };
    assert_eq!(
        eval(Expression::Op {
            op: Operation::Add,
            left: Box::new(term1),
            right: Box::new(term2),
        }),
        Ok(85)
    );
}

#[test]
fn test_error() {
    assert_eq!(
        eval(Expression::Op {
            op: Operation::Div,
            left: Box::new(Expression::Value(99)),
            right: Box::new(Expression::Value(0)),
        }),
        Err(String::from("división entre cero"))
    );
}

fn main() {
    let expr = Expression::Op {
        op: Operation::Add,
        left: Box::new(Expression::Value(10)),
        right: Box::new(Expression::Value(20)),
    };

    println!("expr: {:?}", expr);
    println!("resultado: {:?}", eval(expr));
}