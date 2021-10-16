const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");


describe("Intern class", () => {
    const int = new Intern("test name", 3, "testemail@gmail.com", "intern school");
    it("Creates an intern object with name, id, email, school", ()=>{
        
        expect(int.name).toEqual("test name");
        expect(int.id).toEqual(3);
        expect(int.email).toEqual("testemail@gmail.com");
        expect(int.school).toEqual("intern school");
    })

    describe("getSchool", () => {
        it("gets the school of the employee", () => {
          expect(int.getSchool()).toEqual("intern school");
        });
    });

    describe("getRole", () => {
        it("gets the role of the employee", () => {
          expect(int.getRole()).toEqual("Intern");
        });
    });
});