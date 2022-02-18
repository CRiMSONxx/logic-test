#!/usr/bin/env node
var { argv } = require("yargs")
  .scriptName("solution")
  .usage("Usage: $0 -d num")
  .example(
    "$0 -d 123",
    "Create solution function that accept 1 parameter that be will multiple number 3 and 5 while each result of that multiplication is still lower than parameter inputed."
  )
  .option("d", {
    alias: "digit",
    describe: "1 parameter of number.",
    demandOption: "1 parameter of number is required.",
    type: "number",
    nargs: 1,
  })
  .describe("help", "Show help.") // Override --help usage message.
  .describe("version", "Show version number.") // Override --version usage message.
  .epilog("logic test 2022");
const { digit } = argv;
console.log(`solution(${digit})  -->  ${solution(digit)}`);

function solution(d) {
  i=result=0;
  res=3
  text='';
  while (res < d) {
    if (res % 3 == 0 || res % 5 == 0){
      text += res + " + ";
      result += res;
    }
    res++;

  }
  text = text.slice(0, -3);
  return result + ' = ' + text;
}