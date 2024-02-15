//팩토리얼
let input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("test.txt")
  .toString()
  .split("\n")
  .map(Number);

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(input[0]));
