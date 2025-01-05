"""
http://boj.kr/2110

Binary Search => Parametric Search로의 확장을 보여주는 대표적인 문제
"""

from collections.abc import Sequence
from sys import stdin

def input():
    return stdin.readline().strip()


def is_gap_possible(c: int, sorted_x: Sequence[int], gap: int) -> bool:
    cnt = 1  # ∵ 0번째 인덱스에 공유기를 심는 것이 항상 최적의 선택이거든.
    distance = 0
    for i in range(len(sorted_x) - 1):
        xi = sorted_x[i]
        xj = sorted_x[i + 1]

        distance += (xj - xi)

        if distance > gap:
            cnt += 1
            distance = 0

        if cnt >= c:
            # Horray~
            return True

    return False


def first_true(begin, end, predicate):
    """
    FFF...FFFFTTTTTT
              ^
    """
    left = begin
    right = end

    while left != right:
        m = left + (right - left) // 2  # overflow 방지목적
        if predicate(m):
            # move left
            # next range is [l, m)
            right = m
        else:
            # move right
            # next range is [m + 1, r)
            left = m + 1

    return left


def main(c: int, x: Sequence[int]) -> int:
    """
    c: 공유기의 개수
    x: 각 집의 좌표, 각 집에는 공유기를 최대 한대만 설치할 수 있다.
    returns: 가장 인접한 두 공유기 사이의 최대 거리
    """
    optimized_gap = first_true(
        1,
        max(x) - min(x) + 1,
        # not을 붙이는 이유는 가장 인접한 두 공유기 사이의 거리가 최대가 
        # 되어야 하기 때문!
        lambda gap: not is_gap_possible(c, sorted(x), gap),
    )

    return optimized_gap 


if __name__ == "__main__":
    n, c = map(int, input().split())
    x = [int(input()) for _ in range(n)]

    print(main(c, x))

