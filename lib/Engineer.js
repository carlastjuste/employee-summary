// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
let employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, role, id, email, github ) {

        superconstructor(name, role, id, email );

        this.github = github;
    }
}

module.exports = Engineer;
