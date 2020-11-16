const fetch = require("node-fetch");
const validateOk = require("./stats");
const statsModule = require("./validate-stats");
const chalk = require("chalk");
const log = console.log;

module.exports = (validateLinksok) => {
  const arrayLinksContent = [];

  const validateLinks = validateLinksok;
  const validateFetch = validateLinks.map((element) => {
    return fetch(element.links).then((res) => {
      return {
        href: res.url,
        texto: element.texto,
        file: element.file,
        status: res.status,
        statusText: res.statusText,
      };
    });
  });
  //espera que todas las promesas sean terminadas para poder juntarlas en una y poder continuar
  Promise.all(validateFetch)
    .then((respArray) => {
      let validateOption = "";
      if (process.argv.length > 3) {
        validateOption = process.argv[3];
      }
      respArray.map((link) => {
        if (
          validateOption === "--validate" ||
          validateOption === "-v"
        ) {
          log(
            chalk.green(
              link.file +
                " " +
                chalk.blue(link.href) +
                " " +
                chalk.yellow(link.status) +
                " " +
                chalk.white(link.texto) +
                " " +
                chalk.magenta(link.statusText)
            )
          );
        }

        return arrayLinksContent.push(link);
      });
      validateOk(arrayLinksContent);
      statsModule(arrayLinksContent);
    })
    .catch((reason) => {
      console.log(reason);
    });
};
