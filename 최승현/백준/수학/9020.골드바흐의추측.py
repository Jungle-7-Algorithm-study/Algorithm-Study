"""
http://boj.kr/9020

2 < n <= 10000 given n is even number

Every n must have goldbach partition where the sum of two prime numbers equals to n

1. primes 리스트를 뽑아낸다.
2. i=0부터 시작하여 primes[i]에 대해 n - primes[i]가 primes 내에 존재하는지 검사한다. (bisect_left 사용) 
    until primes[i] > n // 2
3. on found: result 쌍을 각각 primes[i]와 n - primes[i]로 치환한다.
"""

from math import ceil, floor, sqrt
from collections.abc import Sequence
from bisect import bisect_left


def preprocess(MAXN: int) -> list[int]:
    """
    create primes in range[2,MAXN]
    """
    MAXI = MAXN + 1
    seive = [True] * MAXI
    seive[0] = False
    seive[1] = False

    for i in range(2, floor(sqrt(MAXI))):
        if not seive[i]:
            continue
        for j in range(2, ceil(MAXI / i)):
            seive[i * j] = False

    return [i for i, e in enumerate(seive) if e]


def found(seq: Sequence[int], key: int) -> bool:
    """seq 안에 key가 존재하는지 여부 판단"""
    idx = bisect_left(seq, key)
    return idx < len(seq) and seq[idx] == key


def main(primes: Sequence[int], n: int) -> tuple[int, int]:
    out: tuple[int, int] = (0, 0)

    for prime in primes:
        if prime > n // 2:
            break

        pair = n - prime
        if found(primes, pair):
            out = (prime, pair)

    return out


if __name__ == "__main__":
    primes = preprocess(10_000)

    n = int(input())
    for _ in range(n):
        print(" ".join(map(str, main(primes, int(input())))))
