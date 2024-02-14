// 공유기 설치
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [N, C] = input[0].split(" ").map((i) => +i);
const house = input.slice(1).map((i) => +i).sort((a, b) => a - b);

let start = 1;
let end = house[N - 1] - house[0];
let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let value = house[0];
  let cnt = 1;

  for (let i = 1; i < N; i++) {
    if (house[i] >= value + mid) {
      value = house[i];
      cnt++;
    }
  }

  if (cnt < C) {
    end = mid - 1;
  } else {
    start = mid + 1;
    result = mid;
  }
}

console.log(result);