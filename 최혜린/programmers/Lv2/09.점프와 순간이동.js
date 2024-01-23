function solution(n) {
  if (n === 1)
    return 1;
  // 숫자 n을 이진수 문자열로 변환한 후 배열에 담는다.
  const nArr = Array.from(n.toString(2));
  // nArr 각 요소를 숫자로 변환 후 그 숫자들 더하기
  return nArr.reduce((a, b) => (+a) + (+b));
}