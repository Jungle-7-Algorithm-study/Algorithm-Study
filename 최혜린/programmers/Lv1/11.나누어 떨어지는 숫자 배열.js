function solution(arr, divisor) {
  // let ans = [];
  //
  // for (elem of arr) {
  //   if (elem % divisor === 0)
  //     ans.push(elem);
  // }

  // filter 쓰자!
  let ans = arr.filter(i => i % divisor === 0)

  return ans.length !== 0 ? ans.sort((a,b) => (a-b)) : [-1];
}