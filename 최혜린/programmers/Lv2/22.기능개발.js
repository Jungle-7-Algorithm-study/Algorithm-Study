function solution(progresses, speeds) {
  let stack = [];
  let ans = [];

  for (let i = 0; i < progresses.length; i++) {
    let days = Math.ceil((100 - progresses[i]) / speeds[i]);
    stack.push(days);
  }

  let maxDay = stack[0];  // 비교 대상(소요 일수)
  let cnt = 1;
  for (let i = 1; i <= stack.length; i++) {
    if (maxDay >= stack[i])
      cnt++;
    else {
      ans.push(cnt);
      cnt = 1;
      // 이제부터 배포 다른 날 되므로 maxDay focus도 변경해줌
      maxDay = stack[i];
    }
  }
  return ans;
}

progresses = [93, 30, 55];
speeds = [1, 30, 5];

console.log(solution(progresses, speeds));
