"""
http://boj.kr/1920
"""

from bisect import bisect_left
from collections.abc import Sequence
from sys import stdin

input = lambda: stdin.readline().strip()


def main(seq: Sequence[int], num: int) -> bool:
    """
    seq: sorted sequence
    """

    idx =  bisect_left(seq, num)

    return idx < len(seq) and seq[idx] == num


if __name__ == "__main__":
    n = int(input())
    seq = sorted(list(map(int, input().split())))
    m = int(input())
    queries = map(int, input().split())

    for num in queries:
        print(1 if main(seq, num) else 0)

