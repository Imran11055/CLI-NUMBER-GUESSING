#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([{
name: "userGuessedNumber",
type: "number",
message: "Please Guess a Random Number to start a game:",
}]);
console.log(answer);

if (answer.userGuessedNumber === randomNumber){
console.log("Congratulation you Win.");
}else { console.log("You guess a wrong number.");

}