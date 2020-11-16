const fs = require("fs");
const ruta = __dirname;

const readDirectory = () => {
  fs.readdir(ruta, (err, files) => {
    if (err) {
      console.log("No es posible leer el directorio: " + err);
    } else {
      console.log(files);
    }
  });
};

module.exports = readDirectory;
