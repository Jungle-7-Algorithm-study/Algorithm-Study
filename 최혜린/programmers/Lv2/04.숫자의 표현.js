function solution(n) {
  var cnt = 0;

  for (var i=1; i<=n; i++) {
    if (n % i == 0 && i % 2 == 1) {
      cnt += 1;
    }
  }

  return cnt;
}