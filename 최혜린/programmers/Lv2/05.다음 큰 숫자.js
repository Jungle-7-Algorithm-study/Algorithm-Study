// num의 이진수로 변환했을 때 1의 갯수
function cntOne(num) {
  let cnt = 0;
  let ejin = num.toString(2).split('');

  for (let i = 0; i < ejin.length; i++) {
    if (ejin[i] == 1) {
      cnt++;
    }
  }
  return cnt;
}

// n을 이진수로 변환했을 때 1의 갯수와
// 다음 자연수들의 1의 갯수를 비교하고 일치하는 값을 찾았을 때 멈추는 함수
function solution(n) {
  let target = n;
  while (true) {
    target++;
    if (cntOne(n) == cntOne(target)) {
      return target;
    }
  }
}

console.log(solution(15));