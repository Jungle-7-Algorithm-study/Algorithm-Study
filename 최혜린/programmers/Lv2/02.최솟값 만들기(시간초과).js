// 내가 푼 코드 -> 시간 초과
function solution(A, B) {
  var ans = 0;
  var len = A.length;
  console.log(len)

  while (len > 0) {
    var a = A.splice(A.indexOf(Math.min(...A)), 1);
    var b = B.splice(B.indexOf(Math.max(...B)), 1);
    ans += a * b;
    len -= 1;
  }
  return ans;
}