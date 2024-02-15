const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [width, height] = input.shift().split(" ").map(Number);
const n = Number(input.shift());

let horizontalCuts = [0, height]; // 세로로 자른 점선 (가로 길이 변화)
let verticalCuts = [0, width]; // 가로로 자른 점선 (세로 길이 변화)

for (let i = 0; i < n; i++) {
  const [cutType, cutLine] = input.shift().split(" ").map(Number);
  if (cutType === 0) {
    // 가로 점선
    horizontalCuts.push(cutLine);
  } else {
    // 세로 점선
    verticalCuts.push(cutLine);
  }
}

// 정렬
horizontalCuts.sort((a, b) => a - b);
verticalCuts.sort((a, b) => a - b);

// 가장 큰 간격 찾기
let maxArea = 0;
for (let i = 0; i < horizontalCuts.length - 1; i++) {
  for (let j = 0; j < verticalCuts.length - 1; j++) {
    const area =
      (horizontalCuts[i + 1] - horizontalCuts[i]) *
      (verticalCuts[j + 1] - verticalCuts[j]);
    maxArea = Math.max(maxArea, area);
  }
}

console.log(maxArea);
