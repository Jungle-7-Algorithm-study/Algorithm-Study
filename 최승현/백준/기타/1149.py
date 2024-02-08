"""
RGB거리
https://boj.kr/1149
"""
from sys import stdin

input = stdin.readline

MAXN = 1000

# dp[i][j]: i 번째 집을 각각 Red, Green, Blue로 칠할때의 최소비용 (i는 1부터 출발)
dp = [[0, 0, 0] for _ in range(MAXN + 1)]

if __name__ == "__main__":
    n = int(input())

    dp[0][0] = dp[0][1] = dp[0][2] = 0

    for i in range(1, n + 1):
        cost = [int(k) for k in input().strip().split()]
        print(cost)
        dp[i][0] = min(dp[i - 1][1], dp[i - 1][2]) + cost[0]
        dp[i][1] = min(dp[i - 1][0], dp[i - 1][2]) + cost[1]
        dp[i][2] = min(dp[i - 1][0], dp[i - 1][1]) + cost[2]

    print(min(dp[n][0], dp[n][1], dp[n][2]))
