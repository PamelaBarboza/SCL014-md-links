const readDir = require("./md-links"); // hacemos el require, va a importar el modulo md-links una funcion que se llama readDir
const file = process.argv[2]; //obtenemos el parametro de la terminal
readDir(file); //funcion que entregamos como parametro lo que ingresamos en la terminal
