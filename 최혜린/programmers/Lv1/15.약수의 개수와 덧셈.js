function solution(left, right) {
  let ans = 0;

  for (let i = left; i <= right; i++) {
    let cnt = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0)
        cnt++;
    }

    if (cnt % 2 === 0)
      ans += i;
    else
      ans -= i;
  }

  return ans;
}

// 제곱근이 정수면 약수의 개수는 홀수다..wow
function solution2(left, right) {
  let ans = 0;

  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i)))
      ans -= i;
    else
      ans += i;
  }
  return ans;
}