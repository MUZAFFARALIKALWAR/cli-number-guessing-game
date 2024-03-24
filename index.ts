#! /usr/bin/env node

import inquirer from "inquirer";
const randomNuber = Math.floor(Math.random() *6 +1)
const answer = await inquirer.prompt([
    {
        name:"userguessedNumber",
        type:"number",
        message:"please guess a number 1-6",
    },
]);
if(answer.userguessedNumber === randomNuber){
    console.log("congratulations you guessed right Number");
    
}else{
    console.log("you guessed wrong Number");
    
};

