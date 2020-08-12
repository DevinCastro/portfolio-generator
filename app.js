const inquirer = require('inquirer')
const fs = require('fs')
const generatePortfolio = require('./portfolio')



inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your location?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Enter your bio?',
      name: 'bio',
    },

    {
      type: 'input',
      message: 'Enter your LinkedIn url?',
      name: 'linkedin',
    },

    {
      type: 'input',
      message: 'Enter your Github url?',
      name: 'github',
    },

    {
      type: 'list',
      message: 'What is your favorite computer language',
      choices: ['HTML', 'CSS', 'Javascript'],
      name: 'favorite',
    },



  ])
  .then(answers => {

    fs.writeFile('portfolio.html', generatePortfolio(answers), (err) => {
      if (err) { console.log(err) }


    })
  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
