const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const writeFileAsync = util.promisify(fs.writeFile);
// const readFileAsync = util.promisify(fs.readFile);
var teamArray = [];
// var employeeId = 0;

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function userPrompt(response) {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "What is your role?",
        choices: ["Engineer", "Intern", "Manager"],
        name: "role",
      },
    ])
    .then(function (reply) {
      if (reply.role === "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is your name?",
              name: "name",
            },
            {
              type: "input",
              message: "What is your github username?",
              name: "github",
            },
            {
              type: "input",
              message: "What is your employee ID?",
              name: "id",
            },
            {
              type: "input",
              message: "What is your email address?",
              name: "email",
            },
          ])
          .then(function (engineerReply) {
            var newEngineer = new Engineer(
              engineerReply.name,
              engineerReply.id,
              engineerReply.email,
              engineerReply.github
            );
            console.log(newEngineer);
            // employeeId = employeeId++;
            teamArray.push(newEngineer);
            newTeamMember();
          });
      } else if (reply.role === "Manager") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is your name?",
              name: "name",
            },
            {
              type: "input",
              message: "What is your email address?",
              name: "email",
            },
            {
              type: "input",
              message: "What is your employee id?",
              name: "id",
            },
            {
              type: "input",
              message: "What is your office number?",
              name: "office",
            },
          ])
          .then(function (managerReply) {
            var newManager = new Manager(
              managerReply.name,
              managerReply.id,
              managerReply.email,
              managerReply.office
            );
            console.log(newManager);
            // employeeId = employeeId++;
            teamArray.push(newManager);
            newTeamMember();
          });
      } else if (reply.role === "Intern") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is your name?",
              name: "name",
            },
            {
              type: "input",
              message: "What is your email address?",
              name: "email",
            },
            {
              type: "input",
              message: "What is your employee id?",
              name: "id",
            },
            {
              type: "input",
              message: "Where did you go to school?",
              name: "school",
            },
          ])
          .then(function (internReply) {
            var newIntern = new Intern(
              internReply.name,
              internReply.id,
              internReply.email,
              internReply.school
            );
            console.log(newIntern);
            teamArray.push(newIntern);
            newTeamMember();
          });
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

function newTeamMember(reply) {
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Do you want to add a new team member?",
        name: "continue",
      },
    ])
    .then(function (userConfirm) {
      if (userConfirm.continue === true) {
        userPrompt();
      } else {
        generateHtml();
        // Render the HTML function here!
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

function generateHtml() {
  console.log(teamArray);
  const newHtml = render(teamArray);
  console.log(newHtml);
  writeFileAsync(outputPath, newHtml);
}

userPrompt();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
