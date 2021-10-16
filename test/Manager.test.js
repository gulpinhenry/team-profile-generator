const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");


describe("Manager class", () => {
    const man = new Manager("test name", 3, "testemail@gmail.com", 123);
    it("Creates an Manager object with name, id, email, office number", ()=>{
        
        expect(man.name).toEqual("test name");
        expect(man.id).toEqual(3);
        expect(man.email).toEqual("testemail@gmail.com");
        expect(man.officeNum).toEqual(123);
    })

    describe("getOfficeNumber", () => {
        it("gets the office number of the employee", () => {
          expect(man.getOfficeNumber()).toEqual(123);
        });
    });

    describe("getRole", () => {
        it("gets the role of the employee", () => {
          expect(man.getRole()).toEqual("Manager");
        });
    });
});