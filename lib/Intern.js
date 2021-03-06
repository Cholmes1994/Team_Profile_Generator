// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
let employeeClass = require("./Employee");

class Intern extends employeeClass {
    // Added school param
    constructor(name, id, email, school) {
        // Inherited from parent Employee class
        super(name, id, email)
        this.school = school;
    }
    // Methods

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern"
    }

}


module.exports = Intern;