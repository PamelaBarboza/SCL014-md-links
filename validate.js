const fetch = require("node-fetch");
const stats = require('./stats');

module.exports = (validateLinks) => {
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

  Promise.all(validateFetch).then((respArray) => {
      stats(respArray);

  });
};
