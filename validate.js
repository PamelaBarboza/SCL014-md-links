module.exports = (validateLinks) => {
console.log(validateLinks);
}


http.get(url, function callback(respuesta) {
  respuesta.on("data", (param) => {
    console.log(param.toString());
  });
}); 
