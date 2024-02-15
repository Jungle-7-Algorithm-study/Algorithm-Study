// 가장 가까운 두
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input.shift());
const arr = input.map((i) => {
  let parts = i.split(" ");
  return [parseInt(parts[0]), parseInt(parts[1])];
});

function getDistance(p1, p2) {
  return Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2);
}

function closestPair(points, start, end) {
  if (end - start <= 3) {
    let minDist = Infinity;
    for (let i = start; i < end; i++) {
      for (let j = i + 1; j < end; j++) {
        minDist = Math.min(minDist, getDistance(points[i], points[j]));
      }
    }
    return minDist;
  }

  const mid = Math.floor((start + end) / 2);
  const left = closestPair(points, start, mid);
  const right = closestPair(points, mid, end);
  let minDist = Math.min(left, right);

  const strip = [];
  for (let i = start; i < end; i++) {
    if (Math.pow(points[i][0] - points[mid][0], 2) < minDist) {
      strip.push(points[i]);
    }
  }

  strip.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < strip.length; i++) {
    for (
      let j = i + 1;
      j < strip.length && Math.pow(strip[j][1] - strip[i][1], 2) < minDist;
      j++
    ) {
      minDist = Math.min(minDist, getDistance(strip[i], strip[j]));
    }
  }

  return minDist;
}

function findClosestPair(points) {
  points.sort((a, b) => a[0] - b[0]);
  return closestPair(points, 0, points.length);
}

console.log(findClosestPair(arr));
