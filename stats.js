const chalk = require("chalk");

const log = console.log;

module.exports = (validateOk) => {
  const totalSumOfLinks = validateOk;
  const arrayObjectLinkString = new Set(totalSumOfLinks.map(JSON.stringify));
  const uniqueLinks = Array.from(arrayObjectLinkString).map(JSON.parse);

  Promise.all(validateOk).then((resp) => {
    let validateStats = "";
    if (process.argv.length > 3) {
      validateStats = process.argv[3];
    }

      if (validateStats === "--stats") {
        log(chalk.yellow("MODULE --STATS"));
        log(chalk.whiteBright("Total: " + totalSumOfLinks.length));
        log(chalk.magentaBright("Unique: " + uniqueLinks.length));
      }

  });
};
