const validateLinks = require("./validate");
const validateOk = require("./stats");


module.exports = (linkArray) => {
  //VALIDATE-STATS
  let options = {
    validate: false,
    stats: false,
  };

  let objectLinksValidate = "";
  if (process.argv.length > 3) {
    process.argv.forEach((element) => {
      if (element === "--validate") {
        options.validate = true;
      }
      if (element === "--stats") {
        options.stats = true;
      }
    });

    objectLinksValidate = process.argv[3];
  }

  if (options.validate === true && options.stats === true) {
    validateLinks(linkArray, options.stats);
    //aqui funcion V-S
  } else if (options.validate === true) {
    validateLinks(linkArray, options.stats);
    //aqui funcion V
  } else if (options.stats === true) {
    validateOk(linkArray);

    //aqui funcion S
  } else {
    console.log(linkArray);
  }
};
