const fs = require('fs');
const axios = require("axios");
const inquirer = require("inquirer");
const generateHTML = require("./style.js");
const HTML5ToPDF = require("html5-to-pdf");
const path = require("path");

const everything = async () => {
    const userResult = await inquirer.prompt([
      {
        name: "username",
        message: "I demand your GitHub username Human!!!:",
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
    // console.log("DONE")

  };

everything().then(function(){
    console.log('complete');
});
