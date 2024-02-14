const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2 5
1 2
3 4`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function mulMat(mata, matb) {
  // tmpmat init
  let tmpmat = new Array(size);
  for (let i = 0; i < size; i++) {
    tmpmat[i] = new Array(size);
  }
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      tmpmat[i][j] = 0;
    }
  }

  // mul
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      for (let k = 0; k < size; k++) {
        tmpmat[i][j] += mata[i][k] * matb[k][j];
      }
      tmpmat[i][j] %= 1000;
    }
  }

  return tmpmat;
}

// init
const f = input().split(" ").map(Number);
const size = f[0];
let pow = f[1];
let matrix = [];

for (let i = 0; i < size; i++) {
  matrix.push(input().split(" ").map(Number)); //deep copy
}

// unit matrix
let tmpmat = new Array(size);
for (let i = 0; i < size; i++) {
  tmpmat[i] = new Array(size);
}
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    tmpmat[i][j] = 0;
  }
  tmpmat[i][i] = 1;
}

while (pow) {
  if (pow % 2 == 1) {
    tmpmat = mulMat(tmpmat, matrix);
    pow--;
  }
  pow /= 2;
  matrix = mulMat(matrix, matrix);
}

// answer
for (let i = 0; i < size; i++) {
  let tmp = "";
  for (let j = 0; j < size; j++) {
    tmp += tmpmat[i][j] + " ";
  }
  console.log(tmp);
}
