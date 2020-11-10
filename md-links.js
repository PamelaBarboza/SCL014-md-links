const fs = require("fs");
const mk = require('./regularExpression');


//leer archivo
const readDir = (file) => {
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      mk(data);
    }
  });
};
module.exports = readDir;

/* validar links
 const http = requiere(´http´);
 const url = process.argv[2];

 http.get(
   url,
   function callback(repuesta){
     repuesta.on('data', (param)={
       console.log(param.toString());
          });
   }
 ) */
