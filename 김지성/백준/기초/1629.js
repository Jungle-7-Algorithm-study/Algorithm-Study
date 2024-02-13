// 곱셈
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

const [A, B, C] = input;

const pow = (a, b) => {
  if (b === 1n) {
    return a;
  }
  const temp = pow(a, b / 2n);
  if (b % 2n === 0n) {
    return (temp * temp) % C;
  } else {
    return (temp * temp * a) % C;
  }
};

console.log(Number(pow(A, B) % C));
