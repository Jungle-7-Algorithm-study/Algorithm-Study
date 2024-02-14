// 색종이 만들기
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const paper = input.slice(1).map((i) => i.split(" ").map(Number));

let white = 0;
let blue = 0;

const check = (x, y, n) => {
  const color = paper[x][y];
  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      if (color !== paper[i][j]) {
        return false;
      }
    }
  }
  return true;
};

const divide = (x, y, n) => {
  if (check(x, y, n)) {
    paper[x][y] === 1 ? blue++ : white++;
    return;
  }
  const m = n / 2;
  divide(x, y, m);
  divide(x, y + m, m);
  divide(x + m, y, m);
  divide(x + m, y + m, m);
};

divide(0, 0, N);
console.log(white);
console.log(blue);
