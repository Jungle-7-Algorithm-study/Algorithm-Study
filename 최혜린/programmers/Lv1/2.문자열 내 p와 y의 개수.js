function solution(s) {
  let cnt = 0;
  s = s.toLowerCase();

  if (!s.includes('p') && !s.includes('y'))
    return true;

  for (char of s) {
    if (char === 'p')
      cnt++;
    if (char === 'y')
      cnt--;
  }

  if (cnt === 0)
    return true;
  else {
    return false;
  }
}

s = "pPoooyY";
console.log(solution(s));