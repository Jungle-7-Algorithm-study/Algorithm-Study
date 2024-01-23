// DFS를 활용하여 모든 경우의 조합을 ans 대입
// 기존 ans와 cnt중에 max 값으로 ans 갱신
function solution (k, dungeons) {
  let ans = 0;
  const visited = Array(dungeons.length).fill(false);

  function dfs(cnt, k) {
    ans = Math.max(ans, cnt);

    for (let i=0; i<dungeons.length; i++) {
      let current = dungeons[i];
      if (k >= current[0] && !visited[i]) {
        visited[i] = true;
        dfs(cnt+1, k-current[1]);
        visited[i] = false; // 다른 경우에서도 탐색해야하므로 돌려놓기
      }
    }
  }
  dfs(0, k);

  return ans;
}

dungeons = [[80,20],[50,40],[30,10]];
k = 80;

console.log(solution(k, dungeons));