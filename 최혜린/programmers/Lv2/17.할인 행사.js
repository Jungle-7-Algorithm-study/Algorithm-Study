function solution(want, number, discount) {
  let cnt = 0;
  const isMatch = (list) => {
    const wantMap = new Map();
    list.forEach((item) => {
      if (wantMap.has(item)) wantMap.set(item, wantMap.get(item) + 1);
      else wantMap.set(item, 1);
    });
    console.log('@@@list: ', list);
    console.log(wantMap);
    // 개수 맞는지 확인
    // 총 개수가 10개로 정해져있기 때문에 할인중인 제품의 수량이 더 많더라도 그냥 바로 false 반환
    for (let i = 0; i < want.length; i++) {
      if (wantMap.get(want[i]) !== number[i]) return false;
    }
    return true;
  };

  for (let i = 0; i <= discount.length - 10; i++) {
    // 10개만 뽑는 과정
    const list = discount.slice(i, i + 10);
    if (isMatch(list)) cnt++;
  }
  return cnt;
}

// 변태의 코드
function solution2(want, number, discount) {
  let cnt = 0;
  for (let i=0; i<=discount.length-10; i++) {
    const arr = discount.slice(i, i+10);

    let flag = true;
    for (let j=0; j<want.length; j++) {
      if (arr.filter((item) => item === want[j]).length !== number[j]) {
        flag = false;
        break;
      }
    }
    if (flag) cnt++;
  }
  return cnt;
}

console.log(solution2(["banana", "apple", "rice", "pork", "pot"], [3, 2, 2, 2, 1], ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]));