#!/usr/bin/env node
var { argv } = require("yargs")
  .scriptName("productArray")
  .usage("Usage: $0 -arr string")
  .example(
    "$0 -arr 12,20",
    "Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i]."
  )
  .option("arr", {
    alias: "array",
    describe: "array/list [] of integers.",
    demandOption: "use comma to separate -> 12,20",
    type: "string",
    nargs: 1,
  })
  .describe("help", "Show help.") // Override --help usage message.
  .describe("version", "Show version number.") // Override --version usage message.
  .epilog("logic test 2022");
const { array } = argv;
console.log(`productArray(${array})  -->  ${productArray(array)}`);

function productArray(arr) {
  arr = arr.split(',');
  n = arr.length;
 
  // Initialize memory to all arrays
  left = new Array(n);
  right = new Array(n);
  result = new Array(n);


  /* Left most element of left array
  is always 1 */
  left[0] = 1;

  /* Rightmost most element of right
  array is always 1 */
  right[n - 1] = 1;

  /* Construct the left array */
  for (i = 1; i < n; i++)
      left[i] = arr[i - 1] * left[i - 1];

  /* Construct the right array */
  for (j = n - 2; j >= 0; j--)
      right[j] = arr[j + 1] * right[j + 1];

  /* Construct the product array using
  left[] and right[] */
  for (i = 0; i < n; i++)
  result[i] = left[i] * right[i];


  return result;

}