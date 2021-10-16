const inquirer = require("inquirer");
const fs = require("fs");
const gen = require("./lib/generateHTML")
//import employee classes
var arr = []; // array of employees to be rendered

// prompt for input, create objects here, write to html
function write(){
    let output = gen.generateHTML(arr);
    fs.writeFile("./dist/output.html", output, (err)=>
        err ? console.error(err) : console.log('Success!')
    );
}

function promptManager()
{
    
   /* THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
    WHEN I enter the team manager’s name, employee ID, email address, and office number*/
    console.log("start manager");
    return inquirer.prompt([
        {
            type: "input", 
            message:"Please enter the manager's name:",
            name: "name"
        },
        {
            type: "input", 
            message:"Please enter the manager's id:",
            name: "id"
        },
        {
            type: "input", 
            message:"Please enter the manager's email address:",
            name: "email"
        },
        {
            type: "input", 
            message:"Please enter the manager's office number:",
            name: "info"
        },
        
    ])
    .then((response)=> {
        // create object here, push to array
        console.log("finish manager");
        promptEmployee();
    });
       
}


function promptEmployee(){
    console.log("start employee");
    inquirer.prompt([
        {
            type: "input", 
            message:"Please enter the employee's name:",
            name: "name"
        },

        {
            type: "list", 
            message:"Please choose your employee's role",
            choices: ["Engineer", "Intern"],
            name: "employeeType"
        },

        {
            type: "input", 
            message:"Please enter the employee's id:",
            name: "id"
        },

        {
            type: "input", 
            message:"Please enter the employee's email address:",
            name: "email"
        },
        
        // utilizing when in the inquirer docs
        {
            type: "input", 
            message:"Please enter the engineer's github username:",
            when: (input) => input.employeeType == "Engineer",
            name: "info"
        },
        {
            type: "input", 
            message:"Please enter the intern's school:",
            when: (input) => input.employeeType == "Intern",
            name: "info"
        },
        {
            type: 'confirm',
            message: 'Would you like to add more team members?',
            default: false,
            name: 'more',
        }
        
    ])
    .then((response)=> {
        // create object here, push to array
        console.log(response);
        if(response.more)
            promptEmployee();
        else
            write();
    });
}





function init(){
    console.log("\n\n\nsomeother intro stuff\n");
    promptManager();
}


init();