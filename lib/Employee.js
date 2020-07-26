// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getJob() {
    return "Employee";
  }
  getEmail() {
    return this.email;
  }
}

module.exports = Employee;
