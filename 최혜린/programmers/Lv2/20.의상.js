function solution(clothes) {
  let ans = 1;  // 의상 수 최소 1개
  const obj = {};

  clothes.forEach((item) => {
    // key는 의상 종류
    const key = item[1];

    // key별 의상 이름 저장
    if (obj[key] === undefined) // 해당 종류의 의상 처음 추가되는 경우
      obj[key] = [item[0]];
    else  // 해당 종류의 의상이 이미 존재한다면 배열에 push
      obj[key].push(item[0]);
  });

  // for ... in -> obj의 key 순회
  for (let key of obj)
    // 해당 종류의 의상을 아예 입지 않은 경우도 고려해서 의상수 + 1 해줌
    ans *= (obj[key].length + 1);
  // 모든 종류의 의상 조합 개수 - 모든 의상을 입지 않는 경우(1)
  return ans - 1;
}