const colors = {
    green: {
      wrapperBackground: "#E6E1C3",
      headerBackground: "#C1C72C",
      headerColor: "black",
      photoBorderColor: "#black"
    },
    blue: {
      wrapperBackground: "#5F64D3",
      headerBackground: "#26175A",
      headerColor: "white",
      photoBorderColor: "#73448C"
    },
    pink: {
      wrapperBackground: "#879CDF",
      headerBackground: "#FF8374",
      headerColor: "white",
      photoBorderColor: "#FEE24C"
    },
    red: {
      wrapperBackground: "#DE9967",
      headerBackground: "#870603",
      headerColor: "white",
      photoBorderColor: "white"
    }
  };
  
  // $("#num-repos").text(result.data.public_repos);
  // $("#num-followers").text(result.data.followers);
  // $("#num-stars").text(result.data.starred_url);
  // $("#num-following").text(result.data.following);

  module.exports = function generateHTML(dataFromGitHub, color) {
    return `<!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <title>Document</title>

        <style>
            @page {
              margin: 0;
            }
           *,
           *::after,
           *::before {
           box-sizing: border-box;
           }
           html, body {
           padding: 0;
           margin: 0;
           }
           html, body, .wrapper {
           height: 100%;
           }
           .wrapper {
           background-color: ${colors[color].wrapperBackground};
           padding-top: 100px;
           }
           body {
           background-color: white;
           -webkit-print-color-adjust: exact !important;
           font-family: 'Cabin', sans-serif;
           }
           main {
           background-color: #E9EDEE;
           height: auto;
           padding-top: 30px;
           }
           h1, h2, h3, h4, h5, h6 {
           font-family: 'BioRhyme', serif;
           margin: 0;
           }
           h1 {
           font-size: 3em;
           }
           h2 {
           font-size: 2.5em;
           }
           h3 {
           font-size: 2em;
           }
           h4 {
           font-size: 1.5em;
           }
           h5 {
           font-size: 1.3em;
           }
           h6 {
           font-size: 1.2em;
           }
           .photo-header {
           position: relative;
           margin: 0 auto;
           margin-bottom: -50px;
           display: flex;
           justify-content: center;
           flex-wrap: wrap;
           background-color: ${colors[color].headerBackground};
           color: ${colors[color].headerColor};
           padding: 10px;
           width: 95%;
           border-radius: 6px;
           }
           .photo-header img {
           width: 250px;
           height: 250px;
           border-radius: 50%;
           object-fit: cover;
           margin-top: -75px;
           border: 6px solid ${colors[color].photoBorderColor};
           box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
           }
           .photo-header h1, .photo-header h2 {
           width: 100%;
           text-align: center;
           }
           .photo-header h1 {
           margin-top: 10px;
           }
           .links-nav {
           width: 100%;
           text-align: center;
           padding: 20px 0;
           font-size: 1.1em;
           }
           .nav-link {
           display: inline-block;
           margin: 5px 10px;
           font-size: 20px;
           }
           .workExp-date {
           font-style: italic;
           font-size: .7em;
           text-align: right;
           margin-top: 10px;
           }
           .container {
           padding: 50px;
           padding-left: 100px;
           padding-right: 100px;
           }
  
           .row {
             display: flex;
             flex-wrap: wrap;
             justify-content: space-between;
             margin-top: 20px;
             margin-bottom: 20px;
           }
  
           .card {
             padding: 20px;
             border-radius: 6px;
             background-color: ${colors[color].headerBackground};
             color: ${colors[color].headerColor};
             margin: 20px;
           }
           
           .col {
           flex: 1;
           text-align: center;
           }
  
           a, a:hover {
           text-decoration: none;
           color: inherit;
           font-weight: bold;
           }

           .num {
             margin: 0;
           }
  
           @media print { 
            body { 
              zoom: .75; 
            } 
           }
        </style>
        </head>
        <body>
            <div class="wrapper">
                <div class="row">
                  <div class="col">

                      <div class="photo-header">
                        <img src="${dataFromGitHub.data.avatar_url}">
                        <h1>Hi!</h1>
                        <h2>My Name Is ${dataFromGitHub.data.login}</h2>

                        <div class="row">

                          <!-- <div class="workExp-date">currently @ somewhere</div> -->

                          <div class="links-nav">
                            <a class="nav-link" id="location"><i class="fas fa-location-arrow"></i> ${dataFromGitHub.data.location}</a>
                            <a href="${dataFromGitHub.data.url}" class="nav-link" id="github"><i class="fab fa-github"></i>Github</a>
                            <a href="${dataFromGitHub.data.blog}" class="nav-link" id="bio"><i class="fas fa-rss-square"></i>Bio</a>
                          </div>
                        </div>
                      </div>

                      <main>
                          <div class="container">
                            <h3>${dataFromGitHub.data.bio}</h3>
                            <div class="row">
                              <h3 class="card col" id="public-repos">Public Repositories <p class="num" id="num-repos"> ${dataFromGitHub.data.public_repos}</p></h3>
                              <h3 class="card col" id="followers">Followers <p class="num" id="num-followers"> ${dataFromGitHub.data.followers}</p class="num"></h3>
                            </div>
                            <div class="row">
                              <h3 class="card col" id="github-stars">GitHub Stars <p class="num" id="num-stars"> ${dataFromGitHub.data.public_gists}</p class="num"></h3>
                              <h3 class="card col" id="following">Following <p class="num" id="num-following"> ${dataFromGitHub.data.following}</p class="num"></h3>
                            </div>
                          </div>
                      </main>

                  </div>
                </div>
            </div>

            <div class="wrapper-2">
            </div>

        </body>
        </html>`
          }