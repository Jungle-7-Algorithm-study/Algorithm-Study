// 문제 설명
// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
// 예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

// 제한 조건
// s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.

function solution(s) {
  let arr = s.split(" ");
  return `${Math.min(...arr)} ${Math.max(...arr)}`;
}

// 공백을 기준으로 split된 배열을 만들고, Math.min, Math.max를 이용해 최소값과 최대값을 구한다.
// 이때 javascript 특성으로 인해 Math.min, Math.max를 사용하게 되어 arr가 string에서 number로 바뀌게 된다.
// 그리고 스테이블을 이용해 arr를 가져와서 풀었다.
