#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let Currencies_Rate = {
    AED: 1,
    PKR: 75.69,
    NZD: 0.45,
    UAH: 10.56,
    USD: 0.27,
    HKD: 1,
    PKR_01: 35.45,
    AZN: 0.22,
    TRY: 4.10,
    JPY: 1,
    PKR_02: 1.83,
    UYU: 0.25,
    THB: 0.24,
    SDG: 3.87,
};
console.log(chalk.yellowBright("Wellcome to Exchange_Currency_Converter"));
console.log("\n");
let Exchange_Currency = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: " Please enter your currency ? ",
        choices: ["AED", "HKD", "JPY", "NZD", "USD", "UAH", "PKR", "UYU", "AZN", "TRY", "THB", "SDG", "PKR_01", "PKR_02"],
    },
    {
        name: "to",
        type: "list",
        message: " Please enter your Exchange_Currency? ",
        choices: ["AED", "HKD", "JPY", "NZD", "USD", "UAH", "PKR", "UYU", "AZN", "TRY", "THB", "SDG", "PKR_01", "PKR_02"],
    },
    {
        name: "Amount",
        type: "number",
        message: " Please enter your Amount ? ",
    },
]);
if (Exchange_Currency.from == "AED" && Exchange_Currency.to == "PKR" && Exchange_Currency.Amount || Exchange_Currency.from == "PKR" && Exchange_Currency.to == "AED" && Exchange_Currency.Amount) {
    let from_currency = Currencies_Rate[Exchange_Currency.from];
    let to_currency = Currencies_Rate[Exchange_Currency.to];
    let Amount = Exchange_Currency.Amount;
    let base = Amount / from_currency;
    let Exchange_Currency_Result = base * to_currency;
    console.log(chalk.greenBright("Exchange_Currency_Amount : ", Exchange_Currency_Result));
}
else if (Exchange_Currency.from == "AED" && Exchange_Currency.to == "USD" && Exchange_Currency.Amount || Exchange_Currency.from == "USD" && Exchange_Currency.to == "AED" && Exchange_Currency.Amount) {
    let from_currency = Currencies_Rate[Exchange_Currency.from];
    let to_currency = Currencies_Rate[Exchange_Currency.to];
    let Amount = Exchange_Currency.Amount;
    let base = Amount / from_currency;
    let Exchange_Currency_Result = base * to_currency;
    console.log(chalk.greenBright("Exchange_Currency_Amount : ", Exchange_Currency_Result));
}
else if (Exchange_Currency.from == "HKD" && Exchange_Currency.to == "AZN" && Exchange_Currency.Amount || Exchange_Currency.from == "AZN" && Exchange_Currency.to == "HKD" && Exchange_Currency.Amount) {
    let from_currency = Currencies_Rate[Exchange_Currency.from];
    let to_currency = Currencies_Rate[Exchange_Currency.to];
    let Amount = Exchange_Currency.Amount;
    let base = Amount / from_currency;
    let Exchange_Currency_Result = base * to_currency;
    console.log(chalk.greenBright("Exchange_Currency_Amount : ", Exchange_Currency_Result));
}
else if (Exchange_Currency.from == "HKD" && Exchange_Currency.to == "TRY" && Exchange_Currency.Amount || Exchange_Currency.from == "TRY" && Exchange_Currency.to == "HKD" && Exchange_Currency.Amount) {
    let from_currency = Currencies_Rate[Exchange_Currency.from];
    let to_currency = Currencies_Rate[Exchange_Currency.to];
    let Amount = Exchange_Currency.Amount;
    let base = Amount / from_currency;
    let Exchange_Currency_Result = base * to_currency;
    console.log(chalk.greenBright("Exchange_Currency_Amount : ", Exchange_Currency_Result));
}
else if (Exchange_Currency.from == "HKD" && Exchange_Currency.to == "PKR_01" && Exchange_Currency.Amount || Exchange_Currency.from == "PKR_01" && Exchange_Currency.to == "HKD" && Exchange_Currency.Amount) {
    let from_currency = Currencies_Rate[Exchange_Currency.from];
    let to_currency = Currencies_Rate[Exchange_Currency.to];
    let Amount = Exchange_Currency.Amount;
    let base = Amount / from_currency;
    let Exchange_Currency_Result = base * to_currency;
    console.log(chalk.greenBright("Exchange_Currency_Amount : ", Exchange_Currency_Result));
}
else if (Exchange_Currency.from == "JPY" && Exchange_Currency.to == "SDG" && Exchange_Currency.Amount || Exchange_Currency.from == "SDG" && Exchange_Currency.to == "JPY" && Exchange_Currency.Amount) {
    let from_currency = Currencies_Rate[Exchange_Currency.from];
    let to_currency = Currencies_Rate[Exchange_Currency.to];
    let Amount = Exchange_Currency.Amount;
    let base = Amount / from_currency;
    let Exchange_Currency_Result = base * to_currency;
    console.log(chalk.greenBright("Exchange_Currency_Amount : ", Exchange_Currency_Result));
}
else if (Exchange_Currency.from == "JPY" && Exchange_Currency.to == "UYU" && Exchange_Currency.Amount || Exchange_Currency.from == "UYU" && Exchange_Currency.to == "JPY" && Exchange_Currency.Amount) {
    let from_currency = Currencies_Rate[Exchange_Currency.from];
    let to_currency = Currencies_Rate[Exchange_Currency.to];
    let Amount = Exchange_Currency.Amount;
    let base = Amount / from_currency;
    let Exchange_Currency_Result = base * to_currency;
    console.log(chalk.greenBright("Exchange_Currency_Amount : ", Exchange_Currency_Result));
}
else if (Exchange_Currency.from == "JPY" && Exchange_Currency.to == "PKR_02" && Exchange_Currency.Amount || Exchange_Currency.from == "PKR_02" && Exchange_Currency.to == "JPY" && Exchange_Currency.Amount) {
    let from_currency = Currencies_Rate[Exchange_Currency.from];
    let to_currency = Currencies_Rate[Exchange_Currency.to];
    let Amount = Exchange_Currency.Amount;
    let base = Amount / from_currency;
    let Exchange_Currency_Result = base * to_currency;
    console.log(chalk.greenBright("Exchange_Currency_Amount : ", Exchange_Currency_Result));
}
else {
    console.log("Invalid Currency_Exchange!");
}
