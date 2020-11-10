module.exports = (markdownString) => {
  const markString = markdownString.split("\n");

  const regexMdLinks = /\[([^\[]+)\](\(.*\))/gm;
  const singleMatch = /\[([^\[]+)\]\((.*)\)/;

  markString.forEach((element) => {
    const links = element.match(regexMdLinks);

    if (links !== null) {
      for (let i = 0; i < links.length; i++) {
        let text = singleMatch.exec(links[i]);

        console.log(`Word  #${i}: ${text[1]}`);
        console.log(`Link  #${i}: ${text[2]}`);
      }
    }
  });
};
