/// Un nodo del árbol binario.
#[derive(Debug)]
struct Node<T: Ord> {
    value: T,
    left: Subtree<T>,
    right: Subtree<T>,
}

impl<T: Ord> Node<T> {
    fn new(value: T) -> Self {
        Self {
            value,
            left: Subtree::new(),
            right: Subtree::new(),
        }
    }
}

/// Un subárbol posiblemente vacío.
#[derive(Debug)]
struct Subtree<T: Ord>(Option<Box<Node<T>>>);

/// Contenedor que almacena un conjunto de valores mediante un árbol binario.
///
/// Si se añade el mismo valor varias veces, solo se almacena una vez.
#[derive(Debug)]
pub struct BinaryTree<T: Ord> {
    root: Subtree<T>,
}

impl<T: Ord> BinaryTree<T> {
    fn new() -> Self {
        Self {
            root: Subtree::new(),
        }
    }

    fn insert(&mut self, value: T) {
        self.root.insert(value);
    }

    // fn has(&self, value: &T) -> bool {
    //     self.root.has(value)
    // }

    fn len(&self) -> usize {
        self.root.len()
    }
}

// Implementa `new`, `insert`, `len` y `has` para `Subtree`.

impl<T: Ord> Subtree<T> {
    fn new() -> Self {
        Self(None)
    }

    fn insert(&mut self, value: T) {
        match &mut self.0 {
            Some(node) => {
                if node.value > value {
                    node.left.insert(value);
                } else if node.value < value {
                    node.right.insert(value);
                } else {
                    println!("El nodo ya existe, no se inserta!!");
                }
            }
            None => {
                println!("Nodo insertado");
                self.0 = Some(Box::new(Node::new(value)));
            }
        }
    }

    // TODO: por que se utiliza & para acceder al valor
    fn len(&self) -> usize {
        match &self.0 {
            Some(node) => 1 + node.left.len() + node.right.len(),
            None => 0,
        }
    }

    fn has(&self, value: T) -> bool {
        match &self.0 {
            Some(node) => {
                if node.value == value {
                    true
                } else {
                    node.left.has(value) || node.right.has(value)
                }
            }

            None => false,
        }
    }
}

fn main() {
    // let mut tree = BinaryTree::new();
    // assert_eq!(tree.len(), 0);
    // tree.insert(2);
    // assert_eq!(tree.len(), 1);
    // tree.insert(1);
    // assert_eq!(tree.len(), 2);
    // tree.insert(2); // No es un elemento único.
    // assert_eq!(tree.len(), 2);
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn len() {
        let mut tree = BinaryTree::new();
        assert_eq!(tree.len(), 0);
        tree.insert(2);
        assert_eq!(tree.len(), 1);
        tree.insert(1);
        assert_eq!(tree.len(), 2);
        tree.insert(2); // No es un elemento único.
        assert_eq!(tree.len(), 2);
    }

    //     #[test]
    //     fn has() {
    //         let mut tree = BinaryTree::new();
    //         fn check_has(tree: &BinaryTree<i32>, exp: &[bool]) {
    //             let got: Vec<bool> = (0..exp.len()).map(|i| tree.has(&(i as i32))).collect();
    //             assert_eq!(&got, exp);
    //         }

    //         check_has(&tree, &[false, false, false, false, false]);
    //         tree.insert(0);
    //         check_has(&tree, &[true, false, false, false, false]);
    //         tree.insert(4);
    //         check_has(&tree, &[true, false, false, false, true]);
    //         tree.insert(4);
    //         check_has(&tree, &[true, false, false, false, true]);
    //         tree.insert(3);
    //         check_has(&tree, &[true, false, false, true, true]);
    //     }

    //     #[test]
    //     fn unbalanced() {
    //         let mut tree = BinaryTree::new();
    //         for i in 0..100 {
    //             tree.insert(i);
    //         }
    //         assert_eq!(tree.len(), 100);
    //         assert!(tree.has(&50));
    //     }
}
