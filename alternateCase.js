#!/usr/bin/env node
var { argv } = require("yargs")
  .scriptName("alternateCase")
  .usage("Usage: $0 -c num")
  .example(
    "$0 -c Hello World",
    "Alternate each case of each of 'string' given."
  )
  .option("c", {
    alias: "str",
    describe: "Alternate each case of each of 'string' given.",
    demandOption: "'string' is required.",
    type: "string",
    nargs: 1,
  })
  .describe("help", "Show help.") // Override --help usage message.
  .describe("version", "Show version number.") // Override --version usage message.
  .epilog("logic test 2022");
const { str } = argv;
console.log(`alternateCase(${str})  -->  ${alternateCase(str)}`);

function alternateCase(str) {
  chars = str.split('');
  for (i = 0; i < chars.length; i++) {
    if (chars[i] == chars[i].toLowerCase())
    {
      //lowercase
      chars[i] = chars[i].toUpperCase();
    }
    else
    {
      //uppercase
      chars[i] = chars[i].toLowerCase();
    }
  }
  return chars.join("");
}