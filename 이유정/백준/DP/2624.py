import sys

T = int(sys.stdin.readline())
K = int(sys.stdin.readline())
cash = []
dp = [0] * (T+1)
dp[0] = 1
for _ in range(K):
    coin, cnt = map(int, sys.stdin.readline().split())
    cash.append([coin, cnt])

for coin, count in cash:
    for money in range(T, 0, -1):
        for i in range(1, count+1):
            if money - coin * i >= 0:
                dp[money] += dp[money - coin * i]
print(dp[T])