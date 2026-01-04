import { readFile } from "node:fs";

console.log("Leyendo el primer archivo...");
readFile("./archivo1.txt", "utf-8", (err, text) => {
  // Al terminar se ejecuta este callback
  console.log("primer texto", text);
});

console.log(" ----> Hacer cosas mientras lee el archivo archivo...");

console.log("Leyendo el segundo archivo...");
readFile("./archivo2.txt", "utf-8", (err, text) => {
  // Al terminar se ejecuta este callback
  console.log("Segundo texto", text);
});
