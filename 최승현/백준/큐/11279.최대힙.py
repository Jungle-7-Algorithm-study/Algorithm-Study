"""
http://boj.kr/11279
"""

from heapq import heappush, heappop
from collections.abc import Iterable, Generator
from sys import stdin


def input() -> str:
    return stdin.readline().strip()


def main(cmds: Iterable[int]) -> Generator[int, None, None]:
    q = []
    for cmd in cmds:
        match cmd:
            case 0:
                # 배열에서 가장 큰 값을 출력하고, 그 값을 배열에서 제거한다.
                yield -heappop(q) if q else 0
            case _:
                # 배열에 자연수 x를 넣는다.
                heappush(q, -cmd)


if __name__ == "__main__":
    n = int(input())
    for answer in main(int(input()) for _ in range(n)):
        print(answer)
