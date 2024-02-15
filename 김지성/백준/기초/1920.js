// 곱셈
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const arr = input.shift().split(" ").map(Number);
const M = +input.shift();
const nums = input.shift().split(" ").map(Number);

arr.sort((a, b) => a - b);

// 이분탐색
const binarySearch = (list, target, left, right, mid) => {
  mid = Math.floor((left + right) / 2);

  if (right < left) {
    return list[mid] == target ? 1 : 0;
  }

  if (list[mid] > target) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }

  return binarySearch(list, target, left, right, mid);
};

const result = nums.map((num) => binarySearch(arr, num, 0, arr.length - 1, 0));
console.log(result.join("\n"));

// // short version
// const fs = require("fs");
// const input1 = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const [n, A, m, B] = input1.map((v) => v.split(" "));
// const array = new Set(A);
// const answer = B.map((v) => (array.has(v) ? 1 : 0));
// console.log(answer.join("\n"));
