// N-Queen
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const N = Number(input);

let answer = 0;
let row = Array.from({ length: N + 1 }, () => 0);

function check(L) {
  for (let i = 0; i < L; i++) {
    if (row[L] === row[i] || L - i === Math.abs(row[L] - row[i])) {
      return false;
    }
  }
  return true;
}

function DFS(L) {
  if (L === N) {
    answer++;
  } else {
    for (let i = 0; i < N; i++) {
      row[L] = i;
      if (check(L)) {
        DFS(L + 1);
      }
    }
  }
}

DFS(0);
console.log(answer);
