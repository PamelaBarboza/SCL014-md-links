const fetch = require("node-fetch");

module.exports = (validateLinks) => {
  validateLinks.forEach((element) => {
    fetch(element.links).then((res) => {
      console.log(res.url);
      console.log(res.statusText);
      console.log(res.status);
    });
  });
};
