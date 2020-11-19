//estadísticas de los links validate y stats
const validateLinks = require("./validate");
const chalk = require("chalk");

const log = console.log;

module.exports = (objectLinksValidate) => {
  
  const arrayObjectLinks = objectLinksValidate;
  // Stringify object:
  const arrayObjectLinkString = new Set(arrayObjectLinks.map(JSON.stringify));
  // Array Without Duplicate
  const arrayWithoutDuplicate = Array.from(arrayObjectLinkString).map(
    JSON.parse
  );
  // Array Without links Broken
 const BrokenLinks = arrayWithoutDuplicate.filter(
   (object) => object.status >= 400
 );


  Promise.all(objectLinksValidate).then((resp) => {/* 
    let objectLinksValidate = "";
    if (process.argv.length > 3) {
      objectLinksValidate = process.argv[3];
      
    }

    if (
      (objectLinksValidate === "--stats--validate") || (objectLinksValidate === "--validate--stats"))  */{
      log(chalk.yellow("MÓDULE --VALIDATE --STATS"));
      log(chalk.blue("Total: " + arrayObjectLinks.length));
      log(chalk.green("Unique: " + arrayWithoutDuplicate.length));
      log(chalk.red("Broken: " + BrokenLinks.length));
    }
  });
};

/*Stringify object: convertimos el objeto arrayObjectLinkString en un objeto json que va a poder ser almacenado y transmitido de modo estandar */
/* json.parse convertimos un objeto json en un objeto js*/
