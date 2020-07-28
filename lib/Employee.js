// // TODO: Write code to define and export the Employee class
class Employee {
  //   // create a basic constructor including name, email and id
  constructor(name, id, email) {
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
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}
// //   Functions to return the data for each response should be used by all other constructors
// //   getName() {
// //     return this.name;
// //   }
// //   getId() {
// //     return this.id;
// //   }
// //   //   only unique function to return "employee"
// //   getRole() {
// //     return "Employee";
// //   }
// //   getEmail() {
// //     return this.email;
// //   }

// // Export the module
module.exports = Employee;
