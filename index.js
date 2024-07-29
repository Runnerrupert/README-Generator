// Imports from other packages or files
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// An array of questions containing a name, type and message for each question
const questions = [
    { name: 'title', type: 'input', message: "What is the Title of your Project?"},
    { name: 'description', type: 'input', message: "What is a Description of your Project?"},
    { name: 'installation', type: 'input', message: "How do you Install your Project?"},
    { name: 'usage', type: 'input', message: "How do you Use your Project?"},
    { name: 'license', type: 'rawlist', message: "What is your Project License?", choices: [{name: 'MIT', value: 'MIT'}, {name: 'ISC', value: 'ISC'}, {name: 'GPL', value: 'GPL'}, {name: 'BSD', value: 'BSD'},]},
    { name: 'contributors', type: 'input', message: "Who are your Contributors?"},
    { name: 'tests', type: 'input', message: "What are your Tests?"},
    { name: 'username', type: 'input', message: "What is your GitHub Username?"},
    { name: 'email', type: 'input', message: "What is your Email Address?"}]

// Blueprint for writing data to generated-files directory.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README.md Generated!'));
}

// Prompts the user the questions contained within the object array and writes all answers using the generateMarkdown method
function init() {
inquirer 
    .prompt(questions)
    
    .then((response) => {
        writeToFile('./generated-files/README.md', generateMarkdown(response))
    })
}

// Function call to initialize app
init();
