"""
http://boj.kr/10773
"""

from collections.abc import Iterable
from sys import stdin


def input() -> str:
    return stdin.readline().strip()


def main(k: Iterable[int]) -> int:
    """
    sum of k where range [0, 1000000] elements if k equals to 0 then erase the latest element
    """
    stack: list[int] = []

    for e in k:
        if e == 0:
            stack.pop()
        else:
            stack.append(e)

    return sum(stack)


if __name__ == "__main__":
    k = int(input())
    print(main(int(input()) for _ in range(k)))
