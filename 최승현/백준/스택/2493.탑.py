"""
http://boj.kr/2493
"""

from collections.abc import Generator, Iterable
from sys import stdin


def input():
    return stdin.readline().strip()


type height = int
type index = int


def main(seq: Iterable[height]) -> Generator[index | None, None, None]:
    """
    seq: 각 원소는 탑의 높이를 의미, 순서대로 왼쪽서부터 오른쪽 방향으로 탑을 세운다.
    returns: 모든 탑에서 왼쪽 방향으로 레이저를 쏘았을 때 레이저를 수신하는 탑의 인덱스를 리턴하라. 만약 어떤 탑도 레이저를 수신할 수 없는 경우, None을 리턴한다.
    """
    yield None  # 제일 왼쪽의 레이저는 항상 수신탑이 존재하지 않는다.

    it = iter(seq)
    stack: list[tuple[height, index]] = [(next(it), 0)]

    for i, h in enumerate(it, start=1):
        # print(i, h, stack)
        while len(stack) > 0 and stack[-1][0] <= h:
            stack.pop()  # 새로 세울 탑보다 높이가 낮은 탑들은 앞으로 레이저를 수신할 수 없음.
        if len(stack) > 0:
            yield stack[-1][1]
        else:
            yield None

        stack.append((h, i))


if __name__ == "__main__":

    def result_to_output(result: index | None) -> int:
        if result is None:
            return 0
        return result + 1  # 1부터 세는 인덱싱

    n = int(input())

    print(" ".join(str(result_to_output(x)) for x in main(map(int, input().split()))))
