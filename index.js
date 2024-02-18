const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide brief description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can someone install and set up your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Explain how to use your application.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can other developers contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can your project be tested?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'Unlicense', 'BSD 2-clause', 'LGPLv3', 'AGPLv3', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username?',
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
