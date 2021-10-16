const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, info){
        super(name, id, email);
        this.officeNum = info;
    }
    getOfficeNumber(){
        return this.officeNum;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager; 