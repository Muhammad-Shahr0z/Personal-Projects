#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    {
        message: "Enter Your Math : Marks  100/",
        type: "number",
        name: "MathMarks",
    },
    {
        message: "Enter Your Chemistry : Marks 100/",
        type: "number",
        name: "ChemistryMarks",
    },
    {
        message: "Enter Your Biology : Marks 100/",
        type: "number",
        name: "bioMarks",
    },
    {
        message: "Enter Your Urdu : Marks 100/",
        type: "number",
        name: "UrduMarks",
    },
    {
        message: "Enter Your Physics : Marks 100/",
        type: "number",
        name: "PhysicsMarks",
    },
]);
const markObtain = answer.MathMarks +
    answer.ChemistryMarks +
    answer.bioMarks +
    answer.UrduMarks +
    answer.PhysicsMarks;
const totalMarks = 500;
if (markObtain <= 500) {
    const percentageResult = (markObtain / totalMarks) * 100;
    console.log(`
    01 - MATH       100 / ${answer.MathMarks}
    02 - CHEMISTRY  100 / ${answer.ChemistryMarks} 
    03 - BIOLOGY    100 / ${answer.bioMarks}
    04 - URDU       100 / ${answer.UrduMarks}
    05 - PHYSICS    100 / ${answer.PhysicsMarks}\n`);
    console.log(`You Got ${markObtain} Marks Out Of ${totalMarks} Marks\n`);
    console.log(chalk.greenBright(Math.floor(percentageResult) + "%"));
}
else {
    console.log(chalk.redBright("\nInvalid Input"));
}
