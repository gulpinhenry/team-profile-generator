const Employee = require("../lib/Employee");

describe("Employee class", () => {
    const emp = new Employee("test name", 3, "testemail@gmail.com");
    it("Creates an employee object with name, id, email", ()=>{
        
        expect(emp.name).toEqual("test name");
        expect(emp.id).toEqual(3);
        expect(emp.email).toEqual("testemail@gmail.com");
    })

    describe("getName", () => {
        it("gets the name of the employee", () => {
          expect(emp.getName()).toEqual("test name");
        });
    });

    describe("getId", () => {
        it("gets the name of the employee", () => {
          expect(emp.getId()).toEqual(3);
        });
    });

    describe("getEmail", () => {
        it("gets the email of the employee", () => {
          expect(emp.getEmail()).toEqual("testemail@gmail.com");
        });
    });

    describe("getRole", () => {
        it("gets the role of the employee", () => {
          expect(emp.getRole()).toEqual("Employee");
        });
    });
});