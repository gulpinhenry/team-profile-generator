const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, info){
        super(name, id, email);
        this.github = info;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}