// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
let employeeClass = require("./Employee");

class Engineer extends employeeClass {
    // Added github param
    constructor(name, id, email, github) {
        // Inherited from parent Employee class
        super(name, id, email)
        this.github = github;
    }
    // Methods

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer"
    }

}


module.exports = Engineer;