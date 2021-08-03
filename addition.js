const inquirer = require('inquirer')
const menu = require("./index")

let score = 0;
let wrong = 0;
let questions = []

function getNumber() {
    let valueOne = Math.floor(Math.random() * 91)
    let valueTwo = Math.floor(Math.random() * 91)
    Quiz(valueOne, valueTwo);
}

function Quiz(valueOne, valueTwo) {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'question',
            message: `${valueOne} + ${valueTwo} =`
        },
    ])
    .then((answer) => {
        let correct = valueOne + valueTwo
        let response = parseInt(answer.question)
        
        if (response === correct) {
            score = score + 1
            console.log(`Correct!`)
            questions.push(`${valueOne} x ${valueTwo} = ${response} Correct`)
            again()
        } else {
            console.log(`Incorrect the right answer is ${correct}`)
            wrong = wrong + 1
            questions.push(`${valueOne} x ${valueTwo} = ${response} inCorrect (${correct})`)
            again()
        }
    })
}

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
            console.log(questions)
            console.log(`your final score is ${score} correct and ${wrong} incorrect.`)
            questions = []
            menu.menu();
        }
    })
}

module.exports.getNumber = getNumber;