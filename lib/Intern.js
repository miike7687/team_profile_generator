// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Intern extends Employee {
  // extends method calls for the constructor definition:
  constructor(name, email, id, school) {
    //   can't function without a super:
    super(name, email, id);
    // the only thing being added to the engineer that does NOT belong to the employee is the github username:
    this.school = school;
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
}

//   All the other function being run by employee constructor still apply here
//
//   getSchool() {
//     return school;
//   }
// }
// Export the modules
module.exports = Intern;
