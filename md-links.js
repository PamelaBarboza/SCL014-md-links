const fs = require("fs");
const mk = require("./regularExpression");
//leer archivo
const readDir = (file) => {
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      mk(data, file);
    }
  });
};
module.exports = readDir;


