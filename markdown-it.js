const MarkdownIt = require("markdown-it");
const md = new MarkdownIt();

module.exports = (markdownString) => {

      const tokensList = md.parse(markdownString.toString(), {});
      tokensList.forEach((token) => {
        console.log(token);
        if (token.children !== null) {
          token.children.forEach((children) => {
            if (children.attrs !== null) {
              console.log(children.attrs[0][1]);
            }
          });
        }
      });


};
