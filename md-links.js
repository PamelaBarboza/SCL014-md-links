const fs = require("fs");
const path = require("path");
const mk = require("./regularExpression");

// valida la ruta del archivo
const validatePath = (pathFile) => {
  // arregla el formato de la ruta link documentacion: https://nodejs.org/api/path.html#path_path_resolve_paths
  let pathResolve = path.resolve(pathFile);
  console.log("resuelve ruta", pathResolve);

  // normaliza la ruta (ej.: //-> /) link documentación: https://nodejs.org/api/path.html#path_path_normalize_path
  let pathNormalize = path.normalize(pathResolve);
  console.log("normaliza ruta", pathNormalize);

  // ya resuelto y normalizado. Necesito saber si es un archivo o directorio.
  // valida si la ruta existe.
  fs.readFile(pathNormalize, "utf-8", (err, data) => {
    if (err) {
      console.log("¡Esa no es una ruta valida!");
    } else {
      isMarkdown(data, pathNormalize);
     console.log("data", data);

      console.log("readFile success", pathNormalize);
    }
  });
};

// verificar cual es la extensión
const isMarkdown = (file, pathFile) => {
  console.log(path.extname(pathFile));
  if (path.extname(pathFile) === ".md") {
    //console.log("readFile");
    mk(file, pathFile);
  } else {
    console.log(
      "Extensión invalida. Ingrese una ruta de un archivo de extensión markdown"
    );
  }
};
module.exports = validatePath;








