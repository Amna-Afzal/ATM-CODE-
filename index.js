#! /usr/bin/env node
import inquirer from "inquirer";
let userbalance = 20000;
// in dollars
let userpin = 2578;
console.log("WELCOME TO MY AUTOMATED TELLER MACHINE!!");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "ENTER YOUR PIN",
        type: "number"
    }
]);
if (pinAnswer.pin === userpin) {
    console.log("valid pin!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "PLEASE SELECT ONE",
            choices: ["withdraw", "check your balance", "fast cash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountanswer = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "ENTERED REQUIRED AMOUNT TO WITHDRAW",
            }
        ]);
        let amount = amountanswer.amount;
        if (userbalance >= amount) {
            userbalance -= amount;
            console.log("your remaining balance is:" + userbalance);
        }
        else {
            console.log("insufficient funds");
        }
    }
    else if (operationAns.operation === "check your balance") {
        console.log("your remaining balance is:" + userbalance);
    }
    else if (operationAns.operation === "fast cash") {
        let selectamount = await inquirer.prompt([
            {
                name: "select",
                type: "rawlist",
                message: "please select your amount",
                choices: [5000, 10000, 15000, 20000],
            },
        ]);
        userbalance -= selectamount.select;
        console.log("remaining balance is:" + userbalance);
    }
}
else {
    console.log("invalid pin!!please check again.");
}
console.log("THANKYOU FOR USING!!");
