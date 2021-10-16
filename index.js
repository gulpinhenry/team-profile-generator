const inquirer = require("inquirer");
const fs = require("fs");
const gen = require("./lib/generateHTML")
var arr = []; // array of employees to be rendered

// prompt for input, create objects here, write to html
function write(data){
    let output = gen.generateHTML(data);
    fs.writeFile("./dist/output.html", output, (err)=>
        err ? console.error(err) : console.log('Success!')
    );
}
function prompt(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is your project called?",
            name: "title"
        },
        {
            type: "list", 
            message:"What license is your project covered under?",
            choices: ["Apache 2.0", "GNU GPL v3", "MIT","MPL 2.0"],
            name: "license"
        },

    ])
    .then((response)=> {
        write(response);
    });
}

function init(){
    prompt();
}


init();