// 시간초과
function solution(s) {
  let stackCnt = 0;

  for (let i = 0; i < s.length; i++) {
    stackCnt += s[i] === '(' ? 1 : -1;
    if (stackCnt < 0)
      return false;
  }
  return stackCnt === 0 ? true : false;
}

s = "()()"
console.log(solution(s));