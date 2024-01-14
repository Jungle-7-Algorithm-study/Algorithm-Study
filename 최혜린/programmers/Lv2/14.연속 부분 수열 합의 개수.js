function solution(elements) {
  const sumSet = new Set();
  const circleArr = [...elements, ...elements];

  // i: 구간의 길이
  for (let i=1; i<=elements.length; i++) {
    // j: 연속 부분 수열 시작 지점 인덱스
    for (let j=0; j+i<circleArr.length; j++) {
      const subTotal = circleArr.slice(j, j+i).reduce((a,b) => a+b, 0);
      sumSet.add(subTotal);
    }
  }
  return sumSet.size;
}

// 슬라이딩 윈도우 (속도 차이 미쳤음)
function solution2(elements) {
  const sumSet = new Set();
  const len = elements.length;

  for (let i=1; i<=len; i++) {
    let sum = 0;
    for (let j=0; j<len; j++) {
      // 최초 한 번의 윈도우에 대해서만 직접 합을 구하기
      if (j===0) {
        // 길이만큼의 구간합 구해줌
        for (let k=0; k<i; k++) {
          sum += elements[k];
        }
      }
      // 이후 윈도우에 대해서는 이전 구간합 사용하기
      else {
        // 현재 윈도우의 합 = 이전 윈도우의 합 - 첫 번째 원소
        sum -= elements[j-1];
        // 현재 윈도우의 끝에 해당하는 원소 더해주기
        sum += elements[(j+i-1) % len];
      }
      sumSet.add(sum);
    }
  }
  return sumSet.size;
}

let elements = [7,9,1,1,4];
console.log(solution2(elements));