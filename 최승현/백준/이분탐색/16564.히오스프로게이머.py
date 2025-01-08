"""
http://boj.kr/16564
"""

from collections.abc import Iterable
from typing import TypeVar
from sys import stdin

def input() -> str:
    return stdin.readline().strip()

T = TypeVar("T")
type Sorted[T] = Iterable[int]

MAX_X = 1_000_000_000
MAX_K = 1_000_000_000
MAX_LEVEL = MAX_X + MAX_K


def predicate(t: int, X: Sorted[int], k: int) -> bool:
    """
    t: 목표레벨, min(X_i) where 1 <= i <= N
    X: N개의 캐릭터들의 레벨이 들어있는 집합, SORTED
    k: 앞으로 게임이 끝날 때까지 올릴 수 있는 레벨
    returns: t만큼의 목표레벨을 달성할 수 있는가
    """
    return sum(t - xi for xi in X if xi < t) <= k


def first_true(lo, hi, predicate) -> int:
    """
    FFFFFFTTTTT
          ^
    """
    left = lo
    right = hi

    while left != right:
        mid = left + (right - left) // 2
        if predicate(mid):
            # go left
            right = mid
        else:
            # go right
            left = mid + 1

    return left


def main(X: Iterable[int], k: int) -> int:
    """
    X: N개의 캐릭터들의 레벨이 들어있는 집합
    k: 앞으로 게임이 끝날 때까지 올릴 수 있는 레벨
    returns: k만큼의 레벨을 올렸을 때 달성할 수 있는 최대 팀 목표레벨
    """
    X = sorted(X)
    first_false = first_true(
        1,
        MAX_LEVEL,
        lambda mid: not predicate(mid, X, k),
    )

    return first_false - 1


if __name__ == "__main__":
    n, k = map(int, input().split())
    X = [int(input()) for _ in range(n)]

    print(main(X, k))
