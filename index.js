const fs = require('fs'); //requires the files system (fs)
// console.log(fs);

// if you want to work with a file in the directory of node, you have to require("fs");
// then you use a method within node (such ass readdir)
// only use asynchronous methods (readdir as opposed to readdirsync)
// sync stands for synchronous

const electron = require('./node_modules/electron')
console.log(electron);

    convertFactory = require('./node_modules/electron-html-to');
 
var conversion = convertFactory({
  converterPath: convertFactory.converters.PDF
});
 
conversion({ html: '<h1>Hello World</h1>' }, function(err, result) {
  if (err) {
    console.error(err);
  }
 
  console.log(result.numberOfPages);
  console.log(result.logs);
  result.stream.pipe(fs.createWriteStream('/path/to/anywhere.pdf'));
  conversion.kill(); // necessary if you use the electron-server strategy, see bellow for details
});




// from activity 33 09
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryUrl).then(function(res) {
      const repoNames = res.data.map(function(repo) {
        return repo.name;
      });

      const repoNamesStr = repoNames.join("\n");

      fs.writeFile("repos.txt", repoNamesStr, function(err) {
        if (err) {
          throw err;
        }

        console.log(`Saved ${repoNames.length} repos`);
      });
    });
  });