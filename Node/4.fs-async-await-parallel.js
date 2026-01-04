// esto solo en los modulos que no tienen promesas nativas

// const { promisify } = require("node:util");
// const readFilePromises = promisify(readFile)

const { readFile } = require('node:fs/promises')

Promise.all([
  readFile('./archivo1.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8')
]).then(([text1, text2]) => {
  console.log('primer texto', text1)
  console.log('segundo texto', text2)
})
