#!/usr/bin/env node

const validatePath = require("./md-links");
const chalk = require("chalk");
/* const validate = require("./validate"); */

// variables personalizadas
const pathFile = process.argv[2];

// valida si el usuario ingresó alguna entrada. Si hay entrada, la valida.
if (pathFile) {
  validatePath(pathFile);
} else {
  console.log(
    chalk.bgRed(
      "¡Ingrese la ruta de un archivo de extensión markdown para empezar!"
    )
  );
}
