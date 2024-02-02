function solution(n) {
  let ans = 0;
  let strN = (n+'').split('');
  strN = strN.sort((a,b) => (b/1-a/1));

  return strN.join('')/1;
}

n= 118372;
console.log(solution(n));