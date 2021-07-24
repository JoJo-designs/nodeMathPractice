//Call in Inquirer
const inquirer = require('inquirer')
const Multiplication = require('./mulipl')
const Addition = require('./addition')

// Starts the program.
function menu() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'selection',
            message: 'Start Practice?',
            choices: [
                "Practice Additions",
                "Practice Multiplication",
                "No Thanks",
            ]
        }
    ])
    .then((select) => {
        if (select.selection === "Practice Multiplication") {
            Multiplication.getNumber();
        } else if (select.selection === "Practice Additions") {
            Addition.getNumber();
        } else {
            console.log("Okay that's fair have a nice day");
            process.exit(0);
        }
    })
}

menu()
module.exports.menu = menu;