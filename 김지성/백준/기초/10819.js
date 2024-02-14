// 차이를 최대로
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

let answer = 0;

let visited = new Array(N).fill(false);
let temp = new Array(N).fill(0);

const dfs = (depth) => {
  if (depth === N) {
    let sum = 0;
    for (let i = 0; i < N - 1; i++) {
      sum += Math.abs(temp[i] - temp[i + 1]);
    }
    answer = Math.max(answer, sum);
    return;
  }
  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    temp[depth] = arr[i];
    dfs(depth + 1);
    visited[i] = false;
  }
};

dfs(0);
console.log(answer);
