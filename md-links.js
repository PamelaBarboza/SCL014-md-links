const fs = require("fs");


 const readDir = (file) => {
   fs.readFile(file,"utf-8", (err, data) => {
     if (err) {
       console.log(err);
     }else {
       const lines = data.split(/\r?\n/);
       lines.forEach((line) => {
         console.log("texto", line);
       });
     }
   console.log(data);

   });
 };
 module.exports = readDir;

/*  const http = requiere(http´);
 const url = process.argv[2];

 http.get(
   url,
   function callback(repuesta){
     repuesta.on('data', (param)={
       console.log(param.toString());
          });
   }
 ) */