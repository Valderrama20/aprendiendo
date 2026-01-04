"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPangram = void 0;
function isPangram(string) {
    let trasformacion = new Set(string.toLowerCase());
    console.log(trasformacion);
}
exports.isPangram = isPangram;
isPangram("El veloz zorro marrón salta sobre el perro perezoso.");
