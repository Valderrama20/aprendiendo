// esto solo en los modulos que no tienen promesas nativas

// const { promisify } = require("node:util");
// const readFilePromises = promisify(readFile)

const { readFile } = require("node:fs/promises");

(async () => {
  console.log("Leyendo el primer archivo...");
  const text1 = await readFile("./archivo1.txt", "utf-8");
  console.log("primer texto", text1);

  console.log(" ----> Hacer cosas mientras lee el archivo archivo...");

  console.log("Leyendo el segundo archivo...");
  const text2 = await readFile("./archivo2.txt", "utf-8");
  console.log("segundo texto", text2);
})();
