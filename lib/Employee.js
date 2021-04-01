// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name,id, email, role ) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole() {
        return this.role;
    }

}

module.exports = Employee;
