// 일곱 난쟁이
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const arr = input.map((i) => parseInt(i));
const sum = arr.reduce((a, b) => a + b, 0) - 100;
let answer = arr;

for (let i = 0; i < 9; i++) {
  if (answer.length === 7) {
    break;
  }
  for (let j = i + 1; j < 9; j++) {
    if (arr[i] + arr[j] === sum) {
      answer.splice(i, 1);
      answer.splice(j - 1, 1);
      break;
    }
  }
}

answer.sort((a, b) => a - b);
for (let i = 0; i < 7; i++) {
  console.log(answer[i]);
}
