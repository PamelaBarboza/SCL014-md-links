const fetch = require("node-fetch");
const moduleStatsValidate = require("./validate-stats");
const chalk = require("chalk");
const log = console.log;

module.exports = (validateLinksok, stats) => {
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
      if (stats === true) {
        moduleStatsValidate(respArray);
      } else {
        respArray.map((link) => {
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

          return arrayLinksContent.push(link);
        });
      }
    })
    .catch((reason) => {
      console.log(reason);
    });
};
