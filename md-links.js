const fs = require("fs");//requiriendo el modulo fs
const mk = require("./regularExpression");//requiriendo una funcion que se llama mk
const path = require("path");

const readDirectory = (__dirname => {
  return new Promise((resolve, reject) => {
    fs.readdir(__dirname, (err, subdirs) => {
      if (err) {
        reject(console.log(err, "El directorio esta vacio"))
      }
      resolve(subdirs);
      /* console.log(subdirs) */
      subdirs.forEach(file => {
        if (path.extname(file) === ".md") {
         /* console.log(file) */
        }
      })
    })
  })
});

readDirectory(__dirname);
module.exports = readDirectory;

//leer archivo del directorio, recibe 3 parametros
const readDir = (file) => {
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      /* console.log(err); */
    } else {
      mk(data, file);
    }
  });
};
module.exports = readDir;



