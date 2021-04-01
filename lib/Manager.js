// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

let Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, role, id, email, OfficeNumber ) {

        super(name, role, id, email );

        this.OfficeNumber = OfficeNumber;
    }
}

module.exports = Manager;

