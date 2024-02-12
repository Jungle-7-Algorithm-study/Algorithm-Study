"""
https://boj.kr/4811
DP?

https://cheon2308.tistory.com/entry/백준-4811번-파이썬-알약 참고함.

H가 등장하는 위치 앞쪽에는 H보다 W가 많거나 같아야 한다.

0w0h = 0, 1w0h = 2w0h = 3w0h = ... = 1
1w1h = WH = 1, 2w1h = WWH, WHW = 2, 3w1h = W(WWH), W(WHW), W(HWW) = 3, 
2w2h = (WWH)H, (WHW)H = 2, 3w2h = (3w1h)H, (2w2h)W = 5

...

iwjh = (i-1)wjh + iw(j-1)h
"""

import sys

input = sys.stdin.readline

dp = [[0 for _ in range(31)] for _ in range(31)]
dp[0] = [1 for _ in range(31)]
dp[0][0] = 0

for i in range(1, 31):
    for j in range(i, 31):
        dp[i][j] = dp[i-1][j] + dp[i][j-1]



if __name__ == "__main__":
    while True:
        n = int(input())
        if n == 0:
            break
        print(dp[n][n])
