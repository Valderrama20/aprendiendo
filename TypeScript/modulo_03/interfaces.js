"use strict";
// Las propiedades de una interfaz pueden ser obligatorias, opcionales o de solo lectura.
// Todas las propiedades son obligatorias, a menos que se especifique lo contrario.
let estados = {
    bien: true,
    mal: false,
    superMal: "muy mall",
};
let myIceCream = {
    flavor: "vainilla",
    scoops: 10,
    sauce: "chocolate",
    nuts: true,
};
function tooManyScoops(dessert) {
    return dessert.scoops >= 5
        ? `${dessert.scoops} is too many scoops!`
        : "Your order will be ready soon!";
}
