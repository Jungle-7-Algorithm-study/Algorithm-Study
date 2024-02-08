function solution(absolutes, signs) {
  let ans = 0;

  for (let i=0; i<signs.length; i++)
    signs[i] ? ans += absolutes[i] : ans -= absolutes[i]

  return ans;
}