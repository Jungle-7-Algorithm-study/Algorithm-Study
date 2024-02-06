function solution(x) {
  let ans = false;
  let strX = (x+'').split('');
  let sum = strX.reduce((a,b) => (a/1 + b/1));

  if (x % sum === 0)
    ans = true;
  return ans;
}
