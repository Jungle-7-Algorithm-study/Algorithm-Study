function solution(a, b) {
  let ans = 0;

  if (a>b) {
    let temp = a;
    a = b;
    b = temp;
  }

  for (let i=a; i<=b; i++) {
    ans += i;
  }

  return ans;
}