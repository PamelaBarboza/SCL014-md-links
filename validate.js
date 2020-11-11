const fetch = require("node-fetch");

module.exports = (validateLinks) => {
  const validateFetch = validateLinks.map((element) => {
    return fetch(element.links).then((res) => {
      return {
          href: res.url,
          texto: element.texto,
          file: element.file,
          status: res.status,
          statusText: res.statusText
      };
    });
  });
  
  Promise.all(validateFetch).then((respArray) => {
    respArray.forEach((res) => {
      console.log(res);
    });
  });

  /* validateLinks.forEach((element) => {
    fetch(element.links).then((res) => {
      console.log(res.url);
      console.log(res.statusText);
      console.log(res.status);
    });
  }); */
};
