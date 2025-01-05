"""
http://boj.kr/2798
"""

from collections.abc import Sequence
from itertools import combinations
from sys import stdin

input = stdin.readline


def main(cards: Sequence[int], m: int) -> int:
    """
    m을 넘지 않으면서 m에 최대한 가까운 카드 3장의 합을 구하시오
    """
    return max(sum(tup) for tup in combinations(cards, 3) if sum(tup) <= m)


if __name__ == "__main__":
    n, m = map(int, input().strip().split())
    cards = map(int, input().strip().split())

    print(main(cards, m))
