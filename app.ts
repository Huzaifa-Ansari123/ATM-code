 import inquirer from "inquirer";

let myBalance = 100000; // Dollars
let myPin = 1122;
console.log(`Your Current Balance is ${myBalance}`);

const pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    },
]);

if (pinAnswer.pin === myPin) {
    console.log("Correct Pin code !!!");

    const answer = await inquirer.prompt([
        {
            message: "What would you like to do?",
            type: "list",
            name: "operation",
            choices: ["Withdraw", "Check Current Balance"],
        },
    ]);

    if (answer.operation === "Withdraw") {
        const withdrawAnswer = await inquirer.prompt([
            {
                name: "withdraw",
                message: "Enter the amount to withdraw",
                type: "number",
            },
        ]);

        if (withdrawAnswer.withdraw <= myBalance) {
            const remainingBalance = myBalance - withdrawAnswer.withdraw;
            console.log(`Your remaining balance is ${remainingBalance}`);
        } else {
            console.log("Insufficient funds. Enter a valid value.");
        }
    } else if (answer.operation === "Check Current Balance") {
        console.log(`Your current balance is ${myBalance}`);
    
    }
} else {
    console.log("Wrong Pincode");
}






// import inquirer from 'inquirer';

// let balance: number = 1000; // Initial balance

// console.log("Welcome to the ATM!");

// inquirer.prompt([
//     {
//         type: 'list',
//         name: 'action',
//         message: 'What would you like to do?',
//         choices: ['Check Balance', 'Deposit', 'Withdraw', 'Exit']
//     }
// ]).then(answers => {
//     let action = answers.action;

//     if (action === 'Check Balance') {
//         console.log(`Your current balance is: $${balance}`);
//     } else if (action === 'Deposit') {
//         inquirer.prompt([
//             {
//                 type: 'input',
//                 name: 'amount',
//                 message: 'Enter the amount to deposit:',
//                 validate: (input: string) => {
//                     let num = parseFloat(input);
//                     return num > 0 || 'Deposit amount must be positive.';
//                 }
//             }
//         ]).then(answers => {
//             let amount = parseFloat(answers.amount);
//             balance += amount;
//             console.log(`Successfully deposited $${amount}. New balance: $${balance}.`);
//         });
//     } else if (action === 'Withdraw') {
//         inquirer.prompt([
//             {
//                 type: 'input',
//                 name: 'amount',
//                 message: 'Enter the amount to withdraw:',
//                 validate: (input: string) => {
//                     let num = parseFloat(input);
//                     if (num <= 0) {
//                         return 'Withdrawal amount must be positive.';
//                     } else if (num > balance) {
//                         return 'Insufficient balance.';
//                     }
//                     return true;
//                 }
//             }
//         ]).then(answers => {
//             let amount = parseFloat(answers.amount);
//             balance -= amount;
//             console.log(`Successfully withdrew $${amount}. New balance: $${balance}.`);
//         });
//     } else if (action === 'Exit') {
//         console.log('Thank you for using the ATM. Goodbye!');
//     }
// });

