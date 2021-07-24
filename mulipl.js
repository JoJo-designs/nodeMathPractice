const inquirer = require('inquirer')
const menu = require("./index")

let score = 0;
let wrong = 0;
let questions = []

// gets two random number with a max of 12
function getNumber() {
    let valueOne = Math.floor(Math.random() * 12)
    let valueTwo = Math.floor(Math.random() * 12)
    Quiz(valueOne, valueTwo);
}

//turns the two random Numbers into a question that someone 
// can respond to.
function Quiz(valueOne, valueTwo) {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'question',
            message: `${valueOne} x ${valueTwo}`
        },
    ])
    .then((answer) => {
        let correct = valueOne * valueTwo
        let response = parseInt(answer.question)

        if (response === correct) {
            score = score + 1
            console.log(`Correct!`)
            questions.push(`${valueOne} x ${valueTwo} = ${response} Correct`)
            again()
        } else {
            console.log(`Incorrect the right answer is ${correct}`)
            wrong = wrong + 1
            questions.push(`${valueOne} x ${valueTwo} = ${response} inCorrect`)
            again()
        }
    })
}

// Asked the user if they want to continue. The function currently
// console.log the data for when they are done
function again() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'again',
            message: 'Continue to the next question?',
            choices: [
                "Yes!",
                "No!",
            ]
        }
    ])
    .then((res) => {
        if (res.again === "Yes!") {
            getNumber();
        } else {
            console.log(`your final score is ${score} correct and ${wrong} incorrect.`)
            console.log(questions)
            menu.menu();
        }
    })
}

module.exports.getNumber = getNumber;