// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");
// Engineer class needs to extend from the Employee class
class Manager extends Employee {
  // extends method calls for the constructor definition:
  constructor(name, id, email, officeNumber) {
    //   can't function without a super:
    super(name, id, email);
    // the only thing being added to the engineer that does NOT belong to the employee is the github username:
    this.officeNumber = officeNumber;
    this.getRole = function () {
      return "Manager";
    };
    // this.getOfficeNumber = function () {
    //   return officeNumber;
    // };
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  //   All the other function being run by employee constructor still apply here
  //   getRole() {
  //     return "Manager";
  //   }
}
// Export the modules
module.exports = Manager;
