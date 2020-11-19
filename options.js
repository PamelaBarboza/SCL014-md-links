const moduleValidate = require("./validate");
const moduleStats = require("./stats");

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
    //aqui va la funcion de Validate y stats
    moduleValidate(linkArray, options.stats);
  } else if (options.validate === true) {
    //aqui va la funcion Validate
    moduleValidate(linkArray, options.stats);
  } else if (options.stats === true) {
    //aqui funcion Stats
    moduleStats(linkArray);
  } else {
    console.log(linkArray);
  }
};
