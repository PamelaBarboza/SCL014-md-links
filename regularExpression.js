const validateLinks = require("./validate");
module.exports = (markdownString, file) => {
  const markString = markdownString.split("\n");

  const regexMdLinks = /\[([^\[]+)\](\(.*\))/gm;
  const singleMatch = /\[([^\[]+)\]\((.*)\)/;
  const linkArray = [];

  markString.forEach((element) => {
    const links = element.match(regexMdLinks);

    if (links !== null) {
      for (let i = 0; i < links.length; i++) {
        const text = singleMatch.exec(links[i]);
        if (text[2].includes("https://")) {
          linkArray.push({ links: text[2], texto: text[1], file });
        }
      }
    }
  });
  validateLinks(linkArray);
};
