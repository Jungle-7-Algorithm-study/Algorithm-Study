// 외판원 순회 2
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const graph = input.slice(1).map((line) => line.split(" ").map(Number));
const visited = new Array(n).fill(false);
let answer = 1e9;

function dfs(depth, start, sum) {
  if (depth === n - 1 && graph[start][0] !== 0) {
    answer = Math.min(answer, sum + graph[start][0]);
    return;
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i] && graph[start][i] !== 0) {
      visited[i] = true;
      dfs(depth + 1, i, sum + graph[start][i]);
      visited[i] = false;
    }
  }
}

visited[0] = true;
dfs(0, 0, 0);

console.log(answer);
