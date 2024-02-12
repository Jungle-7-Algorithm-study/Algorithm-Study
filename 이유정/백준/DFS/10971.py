import sys


def dfs(start, now, value, cnt):
    global ans
    if cnt == N:
        if W[now][start]:
            value += W[now][start]
            if ans > value:
                ans = value
        return
    if value > ans:
        return
    for i in range(N):
        if not visited[i] and W[now][i]:
            visited[i] = 1
            dfs(start, i, value + W[now][i], cnt + 1)
            visited[i] = 0
N = int(sys.stdin.readline())
W = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]
ans = sys.maxsize
visited = [0] * N
for i in range(N):
    visited[i] = 1
    dfs(i, i, 0, 1)
print(ans)