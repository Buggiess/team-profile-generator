//packages

const inquirer = require('inquirer');
const fs = require('fs');
const employee = require("./lib/employee.js");
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');
const generateSite = require('./src/generateSite.js')
teamArray = [];

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

const promptMain = (type) => {
    return inquirer
        .prompt([
            {
                type: 'list',
                message: 'Are you finished creating your team?',
                name: 'endTeam',
                choices: ['Add Engineer', 'Add Intern', 'Finish']
            }])
        .then(userSelection => {
            switch (userSelection.endTeam) {
                case 'Add Engineer':
                    engineerPrompt();
                    break;
                case 'Add Intern':
                    internPrompt();
                    break;
                case 'Finish':
                    generateTeam();
                    break;
                    
        }
    });
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
            .then
    }
}