// 최대공약수 구하는 함수: 유클리드 호제법
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function solution(arr) {
  return arr.reduce((a, b) => (a * b) / gcd(a, b));
}