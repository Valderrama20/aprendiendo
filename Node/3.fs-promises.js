import { readFile } from 'node:fs/promises'

console.log("Leyendo el primer archivo...")
readFile('./archivo1.txt', 'utf-8').then((text) => console.log(text))

console.log(" ----> Hacer cosas mientras lee el archivo archivo...")

console.log("Leyendo el segundo archivo...")
readFile('./archivo2.txt', 'utf-8').then((text) => console.log(text))
