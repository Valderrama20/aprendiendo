import os from 'node:os';

console.log("informacion de sistema")
console.log("-----------------------")


console.log("Nombre del sistema operativo: ", os.platform())
console.log("Version del sistema operativo: ", os.release())
console.log("Arquictectura ", os.arch())
console.log("CPUs ", os.cpus())
console.log("Memoria libre ", os.freemem() / 1024 / 1024)
console.log("Memoria total ", os.totalmem() / 1024 /1024)
console.log("uptime ", os.uptime() / 60 /60)
