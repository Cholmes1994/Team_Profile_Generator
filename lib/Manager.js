// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
let employeeClass = require("./Employee");

class Manager extends employeeClass {
    // Added github officeNumber
    constructor(name, id, email, officeNumber) {
        // Inherited from parent Employee class
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    // Methods

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager"
    }

}


module.exports = Manager;