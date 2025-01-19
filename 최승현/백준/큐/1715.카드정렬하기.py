"""
http://boj.kr/1715
"""

from heapq import heapify, heappop, heappush
from sys import stdin


def input() -> str:
    return stdin.readline().strip()


def main(s: list[int]) -> int:
    """
    returns: 최소 비교 횟수를 구하라
    """
    heapify(s)
    result = 0

    while len(s) > 1:
        candidate1 = heappop(s)
        candidate2 = heappop(s)

        result += candidate1 + candidate2

        heappush(s, candidate1 + candidate2)

    return result


if __name__ == "__main__":
    n = int(input())
    s = [int(input()) for _ in range(n)]

    print(main(s))
