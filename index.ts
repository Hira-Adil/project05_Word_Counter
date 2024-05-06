#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

 // Print welcome message
console.log(chalk.green("\n \t Welcome To Word Counter App\n"));

let anser = await inquirer.prompt({

    type: "input",
    name: "words",
    message: "Enter Your Sentence"
});

let wordCount = anser.words.trim().split(" ").length

console.log(`Your Sentence has ${wordCount} words.`);

console.log(chalk.green("\nThanks For Using Word Counter App\n"));
 
        