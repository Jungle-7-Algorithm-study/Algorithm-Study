function solution(numbers, target) {
  let ans = 0;
  const len = numbers.length;

  function dfs(cnt, sum) {
    if (cnt === len) {
      if (target === sum)
        ans++;
      return;
    }

    dfs(cnt+1, sum+numbers[cnt]);
    dfs(cnt+1, sum-numbers[cnt]);
  }

  dfs(0, 0);

  return ans;
}

numbers = [1, 1, 1, 1, 1];
target = 3;
console.log(solution(numbers, target));