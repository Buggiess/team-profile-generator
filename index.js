//packages

const inquirer = require('inquirer');
const fs = require('fs');
const employee = require("./lib/employee.js");
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');
const generateSite = require('./src/generateSite.js')
let teamArray = [];

const employeeOptions = () => {
    return inquirer
        .prompt([
            {
                type: 'rawlist',
                name: 'type',
                message: 'What type of employee would you like to add to the team?',
                options: ['Manager', 'Engineer', 'Intern', 'Finish'],
            },
        ]);
};

const employeePrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the employee\'s name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is the employee\'s ID?',
                name: 'id',
            },
            {
                type: 'input',
                message: 'What is the employee\'s email?',
                name: 'email',
            },
        ]);
};

const mainPrompt = (type) => {
    if (type === "Manager") {
        return employeePrompt()
            .then((employee) => {
                return inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: 'What is this manager\'s office number?', 
                            name: 'office',
                        },
                    ])
                    .then((answer) => {
                        employee.office = answer.office;
                        return employee;
                    });
            })
            .then((employee) => {
                teamArray.push(
                    new manager(
                        employee.name,
                        employee.id,
                        employee.email,
                        employee.office
                    )
                );
            });
    } else if (type === 'Engineer') {
        return employeePrompt()
            .then((employee) => {
                return inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: 'What is this engineer\'s Github username?',
                            name: 'github',
                        },
                    ])
                    .then((answer) => {
                        employee.github = answer.github;
                        return employee;
                    });
            })
            .then((employee) => {
                teamArray.push(
                    new engineer(
                        employee.name,
                        employee.id,
                        employee.email,
                        employee.github
                    )
                );
            });
    } else if (type === 'Intern') {
        return employeePrompt()
            .then((employee) => {
                return inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: 'What is this intern\'s school name?',
                            name: 'school',
                        },
                    ])
                    .then((answer) => {
                        employee.school = answer.school;
                        return employee;
                    });
            })
            .then((employee) => {
                teamArray.push(
                    new intern(
                        employee.name,
                        employee.id,
                        employee.email,
                        employee.school
                    )
                );
            });
    } else if (type === 'Finish') {
        fs.writeFileSync("./dist/index.html", generateSite(teamArray));
        process.exit();
      }
};

function init() {
    employeeType().then((employee) => {
      mainPrompt(employee.type).then(init);
    });
  }
  
  init();