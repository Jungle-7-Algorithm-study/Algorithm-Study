// 연산자 끼워넣기
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const nums = input[1].split(" ").map(Number);
const operator = input[2].split(" ").map(Number);

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

const calculator = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => parseInt(a / b),
];

const dfs = (count, result) => {
  //연산자 갯수만큼 반복하다가 max, min 판정
  if (count === N - 1) {
    max = Math.max(max, result);
    min = Math.min(min, result);
  } else {
    for (let i = 0; i < operator.length; i++) {
      if (operator[i] === 0) {
        continue;
      }
      operator[i]--;
      dfs(count + 1, calculator[i](result, nums[count + 1]));
      //배열 원상복구
      operator[i]++;
    }
  }
};

dfs(0, nums[0]);

console.log(max ? max : 0);
console.log(min ? min : 0);
