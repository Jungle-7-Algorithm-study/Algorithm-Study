"""
소인수분해
"""
from math import sqrt

MAX = 10_000_000
SQRT_MAX = 3163

sieve = [False for _ in range(MAX)]

N = int(input())
n = N
ans = []

for i in range(2, N + 1):
    if not sieve[i]:
        # sieve[i의 배수] = True
        for j in range(i, SQRT_MAX, i):
            sieve[j] = True
        while n % i == 0:
            ans.append(i)
            n //= i

for a in ans:
    print(a)