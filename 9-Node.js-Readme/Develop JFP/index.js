const inquirer = require("inquirer");
// import inquirer from "inquirer";
const path = require("path");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
    {type: "input", name: "gitHubUser", message: "What is your GitHub Username?"},
    {type: "input", name: "title", message: "What is the name of your project?"},
    {type: "input", name: "eMail", message: "What is your email address?"},

{
    type: "input",
    name: "title",
    message: "What is the URL of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project"
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm i"
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
    default: "npm test"
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
  }

];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
    inquirer.prompt(questions).then((responses)=>{
        // console.log("responses", responses);
        // console.log(generateMarkdown({responses}))
        writeToFile("README.md", generateMarkdown({responses}));
    })
    
}

init();
