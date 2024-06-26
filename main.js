#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow("\n \tWelcome To Currency Convertor App\n"));
const currency = {
    PKR: 1,
    USD: 0.003592,
    INR: 0.299755,
    AED: 0.013174,
    EUR: 0.003360,
    CNY: 0.026063,
    BIT: 0.000000058,
    KWD: 0.0011,
};
let answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ["AED", "EUR", "BIT", "CNY", "IND", "KWD", "PKR", "USD",],
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ["AED", "EUR", "BIT", "CNY", "IND", "KWD", "PKR", "USD",],
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number",
    },
]);
let fromAnswer = currency[answer.from];
let toAnswer = currency[answer.to];
let amountAnwser = answer.amount;
let baseAmount = amountAnwser / fromAnswer;
let convertAmount = baseAmount * toAnswer;
console.log(chalk.gray(`Converted Amount = ${chalk.red(convertAmount.toFixed(2))}`));
