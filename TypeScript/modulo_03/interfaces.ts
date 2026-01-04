// Las propiedades de una interfaz pueden ser obligatorias, opcionales o de solo lectura.
// Todas las propiedades son obligatorias, a menos que se especifique lo contrario.

// firstName: string; obligatoria
// firstName?: string; opcional "?"
// readonly firstName: string; solo lectura "readonly

interface IceCream {
  flavor: string;
  scoops: number;
  instructions?: string;
}

let estados = {
  bien: true,
  mal: false,
  superMal: "muy mall",
};

let myIceCream: Sundae = {
  flavor: "vainilla",
  scoops: 10,
  sauce: "chocolate",
  nuts: true,
};

function tooManyScoops(dessert: Sundae) {
  return dessert.scoops >= 5
    ? `${dessert.scoops} is too many scoops!`
    : "Your order will be ready soon!";
}

// ampliar una interfaz

interface Sundae extends IceCream {
  sauce: "chocolate" | "caramelo" | "strawberry";
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: string;
}
