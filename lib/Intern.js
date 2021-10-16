const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, info){
        super(name, id, email);
        this.school = info;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}
module.exports = Intern; 