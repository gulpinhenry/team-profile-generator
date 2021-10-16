const fs = require("fs");


const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern'); 

function generateElements(element)
function generateHTML(data){
    let str = "";
    data.forEach(element => {
        str+=generateElements(element);
    });
    //html goes here
    return `hi`;
}
module.exports = {generateHTML};