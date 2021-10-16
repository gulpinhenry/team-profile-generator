const fs = require("fs");


const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern'); 

function generateElements(element){
    let infoVal = "";
    if(element.getRole() == "Engineer")
        infoVal = "Github: " + element.getGithub();
    else if(element.getRole() == "Manager")
        infoVal = "Office Number: " + element.getOfficeNumber();
    else
        infoVal = "School: " + element.getSchool();
    let str = `
    <li>
        <div class="uk-panel">
            <div>
                <div class="uk-card uk-card-default uk-card-large uk-card-body">
                    <h3 class="uk-card-title">${element.name}, ${element.getRole()}</h3>
                    <p>Email: ${element.email}</p>
                    <p>ID: ${element.id}</p>
                    <p>${infoVal}</p>
                </div>
            </div>
        </div>
    </li>
    `
    return str;
}
function generateHTML(data){
    let str = "";
    data.forEach(element => {
        str+=generateElements(element);
    });
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.7.6/dist/css/uikit.min.css" />

        <!-- UIkit JS -->
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.6/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.6/dist/js/uikit-icons.min.js"></script>
        <title>about my team</title>
    </head>
    <body>
        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>

            <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
            ` + str + `

            </ul>
        
            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous" style="color: black;"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next" style="color: black;"></a>
        
        </div>
    </body>
    </html>
    `;
}
module.exports = {generateHTML};