const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");


describe("Engineer class", () => {
    const eng = new Engineer("test name", 3, "testemail@gmail.com", "github-user");
    it("Creates an engineer object with name, id, email, github", ()=>{
        
        expect(eng.name).toEqual("test name");
        expect(eng.id).toEqual(3);
        expect(eng.email).toEqual("testemail@gmail.com");
        expect(eng.github).toEqual("github-user");
    })

    describe("getGithub", () => {
        it("gets the Github username of the employee", () => {
          expect(eng.getGithub()).toEqual("github-user");
        });
    });

    describe("getRole", () => {
        it("gets the role of the employee", () => {
          expect(eng.getRole()).toEqual("Engineer");
        });
    });
});