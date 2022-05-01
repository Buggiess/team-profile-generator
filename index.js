//packages

const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/employee.js");
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const generateSite = require('./src/generateSite.js')
teamArray = [];

const managerPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the manager\'s name?',
                name: 'managerName',
            },
            {
                type: 'input',
                message: 'What is the manager\'s ID number?',
                name: 'managerId',
            },
            {
                type: 'input',
                message: 'What is the manager\'s email?',
                name: 'managerEmail',
            },
            {
                type: 'input',
                message: 'What is the manager\'s office number?',
                name: 'managerOffice',
            }])
        .then(response => {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice);
            teamArray.push(Manager);
            console.log(Manager);
            promptMain();
        })
};

const promptMain = () => {
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

const engineerPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the engineer\'s name?',
                name: 'engineerName',
            },
            {
                type: 'input',
                message: 'What is the engineer\'s ID number?',
                name: 'engineerId',
            },
            {
                type: 'input',
                message: 'What is the engineer\'s email?',
                name: 'engineerEmail',
            },
            {
                type: 'value',
                message: 'What is the engineer\'s Github username?',
                name: 'engineerGithub',
            }])
        .then(response => {
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
            teamArray.push(Engineer);
            console.log(Engineer);
            promptMain();
        })
};

const internPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the intern\'s name?',
                name: 'internName',
            },
            {
                type: 'input',
                message: 'What is the intern\'s ID number?',
                name: 'internId',
            },
            {
                type: 'input',
                message: 'What is the intern\'s email?',
                name: 'internEmail',
            },
            {
                type: 'value',
                message: 'What is the intern\'s school?',
                name: 'internSchool',
            }])
        .then(response => {
            const engineer = new Engineer(response.internName, response.internId, response.internEmail, response.internSchool);
            teamArray.push(Intern);
            console.log(Intern);
            promptMain();
        })
};

const genTeam = (fileName, data) => {
    fs.writeFile('./dist/index.html', generateSite(teamArray), (err) => {
        err ? console.error(err) : console.log('Creation was successful')
    });
};


managerPrompt();