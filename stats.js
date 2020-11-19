//estadísticas de los links stats
const chalk = require("chalk");
const log = console.log;

module.exports = (validateOk) => {
  const totalSumOfLinks = validateOk;
  const arrayObjectLinkString = new Set(totalSumOfLinks.map(JSON.stringify));
  const uniqueLinks = Array.from(arrayObjectLinkString).map(JSON.parse);

  Promise.all(validateOk).then((resp) => /* {
    let validateStats = "";
    if (
      validateStats = process.argv[3]);
    

      if (validateStats === "--stats" || validateStats === "--s") */ {
        log(chalk.yellow("MODULE --STATS"));
        log(chalk.whiteBright("Total: " + totalSumOfLinks.length));
        log(chalk.magentaBright("Unique: " + uniqueLinks.length));
      }

  );
};
/* el set es parecido al array solo que permite almacenar elementos
sin que se repitan, por lo que podemos contar los links únicos. */