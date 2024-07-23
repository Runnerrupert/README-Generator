// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = ["What is your the Title of your Project?", "What is a Description of your Project?", 
    "How do you Install your Project?", "How do you Use your Project?", "What is your Project License?", 
    "Who are your Contributors?", "What are your Tests?", "Questions?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

inquirer .prompt([
    {
        name: 'title',
        type: 'input',
        message: questions[0],
    },
    {
        name: 'description',
        type: 'input',
        message: questions[1],
    },
    {
        name: 'installation',
        type: 'input',
        message: questions[2],
    },
    {
        name: 'usage',
        type: 'input',
        message: questions[3],
    },
    {
        name: 'license',
        type: 'rawlist',
        message: questions[4],
        choices: [{name: 'MIT', value: 'mit'}, {name: 'ISC', value: 'isc'},]
    },
    {
        name: 'contributors',
        type: 'input',
        message: questions[5],
    },
    {
        name: 'tests',
        type: 'input',
        message: questions[6],
    },
    {
        name: 'questions',
        type: 'input',
        message: questions[7],
    },
])

}

// Function call to initialize app
init();
