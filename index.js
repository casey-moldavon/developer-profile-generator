const fs = require('fs'); //requires the files system (fs)
// console.log(fs);
const axios = require("axios");
const inquirer = require("inquirer");
const generateHTML = require("./style.js");
const HTML5ToPDF = require("html5-to-pdf");
const path = require("path");


const everything = async () => {
    const userResult = await inquirer.prompt([
      {
        name: "username",
        message: "Give me your username, stupid:",
      },
      {
        name: "color",
        choices: ["green", "blue", "pink", "red"],
        type: "list",
        message: "Choose from these colors:"
      }
    ]);

    const username = userResult.username;
    const color = userResult.color;
    console.log(username);

    const queryUrl = `https://api.github.com/users/${username}`;
    const result = await axios.get(queryUrl);
    console.log(result);

    const stringOfGeneratedHtml = generateHTML(result, color);  

    const html5ToPDF = new HTML5ToPDF({
      inputBody: stringOfGeneratedHtml,
      outputPath: path.join(__dirname, "output.pdf"),
    });

    await html5ToPDF.start()
    await html5ToPDF.build()
    await html5ToPDF.close()
    console.log("DONE")
    // process.exit(0)
  };

everything().then(function(){
    console.log('complete');
});

// function gitHutInfo (){

// }