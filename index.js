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

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
