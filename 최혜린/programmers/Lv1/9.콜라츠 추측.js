function solution(num) {
  let cnt = 0;

  if (num == 1)
    return 0;

  while (num !== 1) {
    if (cnt == 500)
      return -1;

    num%2 === 0 ? num/=2 : num = num*3+1;
    cnt++;
  }

  return cnt;
}