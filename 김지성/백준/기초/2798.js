// 일곱 난쟁이
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let answer = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = arr[i] + arr[j] + arr[k];
      if (sum <= M) {
        answer = Math.max(answer, sum);
      }
    }
  }
}
console.log(answer);
