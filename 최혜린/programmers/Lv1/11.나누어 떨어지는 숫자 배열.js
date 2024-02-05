function solution(arr, divisor) {
  let ans = [];

  for (elem of arr) {
    if (elem % divisor === 0)
      ans.push(elem);
  }

  return ans.length !== 0 ? ans.sort((a,b) => (a-b)) : [-1];
}