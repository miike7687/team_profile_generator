// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");
// Engineer class needs to extend from the Employee class
class Engineer extends Employee {
  // extends method calls for the constructor definition:
  constructor(name, id, email, githubName) {
    //   can't function without a super:
    super(name, id, email);
    // the only thing being added to the engineer that does NOT belong to the employee is the github username:
    this.github = githubName;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}
//   All the other function being run by employee constructor still apply here
//   getRole() {
//     return "Engineer";
//   }

// Export the modules
module.exports = Engineer;
