"""
http://boj.kr/2470

시간초과 💀💀💀💀💀💀💀💀
"""

from collections.abc import Iterable
from itertools import combinations


def main(seq: Iterable[int]) -> tuple[int, int]:
    """
    임의의 두 원소를 더해 0에 가장 가깝게 만드는
    두 원소를 리턴하라
    """
    it = (
        (
            (a, b),  # combinations
            a + b,  # key for min
        )
        for a, b in combinations(seq, 2)
    )
    return min(it, key=lambda x: abs(x[1]))[0]


if __name__ == "__main__":
    n = int(input())
    seq = map(int, input().strip().split())

    print(" ".join(map(str, sorted(main(seq)))))
