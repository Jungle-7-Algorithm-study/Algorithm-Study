// 런타임에러 난 코드.. O(n^2)이라서 시간초과 난 듯
function solution(n, left, right) {
  let ans = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      ans.push(Math.max(i, j));
    }
  }
  return ans.slice(left, right + 1);
}

// 해답
function solution2(n, left, right) {
  let ans = [];

  while (left <= right) {
    ans.push(Math.max(Math.floor(left / n), left % n) + 1);
    left++;
  }
  return ans;
}

n = 4;
left = 7;
right = 14;
console.log(solution2(n, left, right));