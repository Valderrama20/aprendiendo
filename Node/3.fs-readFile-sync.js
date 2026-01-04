import { readFileSync } from 'node:fs'

console.log('Leyendo el primer archivo...')
const text1 = readFileSync('./archivo1.txt', 'utf-8')
console.log('primer texto', text1)

console.log(' ----> Hacer cosas mientras lee el archivo archivo...')

console.log('Leyendo el segundo archivo...')
const text2 = readFileSync('./archivo2.txt', 'utf-8')
console.log('Segundo texto', text2)
