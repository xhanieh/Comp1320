const getDayOfTheWeek = require("./lab-two");
// const makeCalender = require("./lab-two").makeCalender;
const readline = require("readline-sync");

const year = readline.question("Enter a Year:");
const month = readline.question("Enter a month:");
const date = readline.question("Enter a day:");

getDayOfTheWeek(year, months, date);
makeCalender();
