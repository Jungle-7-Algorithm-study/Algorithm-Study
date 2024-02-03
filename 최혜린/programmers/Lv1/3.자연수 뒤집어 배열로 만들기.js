function solution(n) {
  let ans = [];
  strN = n+"";

  for (let i=strN.length-1; i>=0; i--) {
    ans.push(strN[i]/1);
  }
  return ans;
}