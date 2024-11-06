const path = require("node:path");

// Barra separadora de carpetas segun sitema operativo
console.log(path.sep);

// unir rutas con path.join

const filePath = path.join("cotroller", "api", "art.js");
console.log(filePath);

const base = path.basename("/temp/pruebas/join/art.tsx");
console.log(base);

const filename = path.basename("/temp/pruebas/join/art.tsx", ".tsx");
console.log(filename);

const extension = path.extname("jose.super.pepe.jpg");
console.log(extension);
