// 수 정렬하기
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const arr = input.slice(1).map(Number);

arr.sort((a, b) => a - b);
arr.forEach((num) => console.log(num));
