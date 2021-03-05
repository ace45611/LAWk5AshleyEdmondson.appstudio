/*
program that uses a function to add two numbers from the user 
and returns their sum to the main (calling) program
*/

function calculate(num1, num2) {
    let sum = (num1 + num2)
    return sum
}

let summedNumbers = calculate (number1 = Number(prompt("Please enter a value.")), number2 = Number(prompt("Please enter a second value.")))
console.log(`The sum of ${number1} and ${number2} is ${summedNumbers}.`)
