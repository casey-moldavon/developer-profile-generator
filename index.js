const fs = require('fs'); //requires the files system (fs)
// console.log(fs);
const axios = require("axios");
const inquirer = require("inquirer");
const generateHTML = require("./style.js");

// if you want to work with a file in the directory of node, you have to require("fs");
// then you use a method within node (such ass readdir)
// only use asynchronous methods (readdir as opposed to readdirsync)
// sync stands for synchronous 


// var pdf = require('html-pdf');


// var html = fs.readFileSync('./test/businesscard.html', 'utf8');
 
// pdf.create().toFile('./businesscard.pdf', function(err, res) {
//   if (err) return console.log(err);
//   console.log(res); // { filename: '/app/businesscard.pdf' }
// });








// // This code here is for Electron (copited from the site exactly)
// const electron = require('electron'),
// // console.log(electron);

//     convertFactory = require('electron-html-to');
 
// var conversion = convertFactory({
//   converterPath: convertFactory.converters.PDF
// });
 
// conversion({ html: '<h1>Hello World</h1>' }, function(err, result) {
//   if (err) {
//     return console.error(err);
//   }
 
//   console.log(result.numberOfPages);
//   console.log(result.logs);
//   result.stream.pipe(fs.createWriteStream('/path/to/anywhere.pdf'));
//   conversion.kill(); // necessary if you use the electron-server strategy, see bellow for details

// });







// from activity 33 09
// const fs = require("fs");

inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function(res) {

        // return repo.name;
        console.log(res);

      // const repoNamesStr = repoNames.join("\n");

      fs.writeFile("style.js", generateHTML(res, color), function(err, result) {
        if (err) console.lof("error", err);

      //   console.log(`Saved ${repoNames.length} repos`);
      // });
    });
  });
});

