// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

let Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber ) {

        super(name, id, email, role );

        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }

}

module.exports = Manager;

