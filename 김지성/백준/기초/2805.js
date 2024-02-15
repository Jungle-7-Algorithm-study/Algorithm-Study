// 나무 자르기
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((i) => +i);
const tree = input[1].split(" ").map((i) => +i);

let start = 0;
let end = Math.max(...tree);
let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let sum = 0;

  for (let i = 0; i < N; i++) {
    if (tree[i] > mid) {
      sum += tree[i] - mid;
    }
  }

  if (sum < M) {
    end = mid - 1;
  } else {
    start = mid + 1;
    result = mid;
  }
}

console.log(result);
