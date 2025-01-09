"""
http://boj.kr/8983
"""

from bisect import bisect_left, bisect_right
from collections.abc import Iterable, Sequence
from sys import stdin


def input() -> str:
    return stdin.readline().strip()

def log(s):
    global LOG
    if LOG:
        print(s)

type intx = int
type inty = int
type Position = tuple[intx, inty]
type SortedSequence[T] = Sequence[T]


def distance(s: intx, pos: Position) -> int:
    """맨하탄 거리"""
    return abs(s - pos[0]) + pos[1]


def main(A: SortedSequence[Position], S: Iterable[intx], L: int) -> int:
    """
    A: 동물의 위치들
    S: 사대의 위치들
    L: 총의 사거리

    returns: 전체 사대를 놓고 보았을 때 잡을 수 있는 동물의 수
    """
    log(A)
    result: set[Position] = set()

    for s in S:
        # x구간 [s-L, s+L] 사이의 동물들과의 거리를 비교
        start_idx = bisect_left(A, s - L, key=lambda x: x[0])
        end_idx = bisect_right(A, s + L, key=lambda x: x[0])
        for idx in range(start_idx, end_idx):
            if len(A) <= idx:
                break
            if distance(s, A[idx]) <= L:
                result.add(A[idx])

    log(result)
    return len(result)


if __name__ == "__main__":
    LOG = False
    M, N, L = map(int, input().split())
    sadaes = map(int, input().split())
    A: list[tuple[int, int]] = []
    for _ in range(N):
        x, y = input().split()
        A.append((int(x), int(y)))

    print(main(sorted(A), sadaes, L))
