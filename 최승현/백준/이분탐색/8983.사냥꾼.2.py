"""
http://boj.kr/8983

https://western-sky.tistory.com/140의 풀이를 참고하여 사대 좌표를 정렬하여 각 동물이 사냥당할 수 있는지 여부를 판별하는 것이 더 효율적인 프로그램이 될 것이다.
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


def main(A: Iterable[Position], S: SortedSequence[intx], L: int) -> int:
    """
    A: 동물의 위치들
    S: 사대의 위치들
    L: 총의 사거리

    returns: 전체 사대를 놓고 보았을 때 잡을 수 있는 동물의 수
    """
    cnt = 0
    for animal in A:
        """
        │    a
        │  ╱ ┊ ╲
        └─z──┴──w─

        어떤 동물 a의 좌표가 (x,y)라고 하자, 이 동물이 사냥당하기 위해선 적어도 범위 [x+y-l, x-y+l] 안에 사대가 있어야 한다.

        증명은 다음 식을 z와 w에 대해서 각각 풀면 된다:

        abs(x-z) + y <= l
        """
        x, y = animal
        left_idx = bisect_left(S, x + y - L)
        right_idx = bisect_right(S, x - y + L)

        if left_idx < right_idx:
            # can be shot
            cnt += 1

    return cnt


if __name__ == "__main__":
    LOG = False
    M, N, L = map(int, input().split())
    sadaes = map(int, input().split())
    A: list[tuple[int, int]] = []
    for _ in range(N):
        x, y = map(int, input().split())
        if y > L:
            continue
        A.append((x, y))

    print(main(A, sorted(sadaes), L))
