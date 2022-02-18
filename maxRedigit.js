#!/usr/bin/env node
var { argv } = require("yargs")
  .scriptName("maxRedigit")
  .usage("Usage: $0 -d num")
  .example(
    "$0 -d 123",
    "Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer."
  )
  .option("d", {
    alias: "digit",
    describe: "the three digit integer.",
    demandOption: "Three digit integer is required.",
    type: "number",
    nargs: 1,
  })
  .describe("help", "Show help.") // Override --help usage message.
  .describe("version", "Show version number.") // Override --version usage message.
  .epilog("logic test 2022");
const { digit } = argv;
console.log(`maxRedigit(${digit})  -->  ${maxRedigit(digit)}`);

function maxRedigit(d) {
  if(d < 100 || d > 999) {
    return null;
  } else {
    d = d.toString().split('').sort((a, b) => b - a).join('');
    return d;
  }
}