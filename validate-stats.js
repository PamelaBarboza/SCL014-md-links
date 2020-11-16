//estadísticas de los links validate y stats

const chalk = require("chalk");

const log = console.log;

module.exports = (objectLinksValidate) => {
  const arrayObjectLinks = objectLinksValidate;
  // Stringify object
  const arrayObjectLinkString = new Set(arrayObjectLinks.map(JSON.stringify));
  // Array Without Duplicate
  const arrayWithoutDuplicate = Array.from(arrayObjectLinkString).map(
    JSON.parse
  );

  // Array Without links Broken
  const BrokenLinks = arrayWithoutDuplicate.filter((object) => {
    return object.status === 404;
  });

  Promise.all(objectLinksValidate).then((resp) => {
    let objectLinksValidate = "";
    if (process.argv.length > 3) {
      objectLinksValidate = process.argv[3];
      objectLinksValidatee = process.argv[4];
    }

    if (objectLinksValidate === "-s" && objectLinksValidatee === "-v" || objectLinksValidate === "-v" && objectLinksValidatee === "-s" ){
      log(chalk.yellow("MÓDULE --VALIDATE --STATS"));
      log(chalk.blue("Total: " + arrayObjectLinks.length));
      log(chalk.green("Unique: " + arrayWithoutDuplicate.length));
      log(chalk.red("Broken: " + BrokenLinks.length));
    }
  });
};
