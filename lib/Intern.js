// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
let Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, role, id, email, school ) {

        superconstructor(name, role, id, email );

        this.school = school;
    }
}

module.exports = Intern;

