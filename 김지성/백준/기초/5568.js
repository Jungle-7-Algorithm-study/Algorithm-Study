// 카드 놓기
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const K = +input[1];
const visited = Array(N).fill(false);
const arr = [];
const answer = new Set();

for (let i = 2; i <= N + 1; i++) arr.push(input[i].trim());

dfs("", 0);
console.log(answer.size);

function dfs(str, cnt) {
  if (cnt === K) {
    answer.add(str);
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    dfs(str + arr[i], cnt + 1);
    visited[i] = false;
  }
}
