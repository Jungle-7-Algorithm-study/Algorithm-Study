function solution(citations) {
  let ans = 0;
  for (let h = 0; h <= citations.length; h++) {
    let moreThanCnt = 0;
    let lessThanCnt = 0;
    citations.forEach((item) => {
      if (item >= h) {
        moreThanCnt++;
      } else {
        lessThanCnt++;
      }
    });
    if (lessThanCnt < h && moreThanCnt >= h) ans = h;
  }
  return ans;
}

citations = [3, 0, 6, 1, 5];
console.log(solution(citations));
