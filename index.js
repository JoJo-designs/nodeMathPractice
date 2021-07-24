//Call in Inquirer
const inquirer = require('inquirer')
const Multiplication = require('./mulipl')

// Starts the program.
function menu() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'selection',
            message: 'Start Practice?',
            choices: [
                "Practice Multiplication",
                "No Thanks",
            ]
        }
    ])
    .then((select) => {
        if(select.selection === "Practice Multiplication") {
            Multiplication.getNumber();
        } else {
            console.log("Okay that's fair have a nice day");
            process.exit(0);
        }
    })
}

menu()
module.exports.menu = menu;