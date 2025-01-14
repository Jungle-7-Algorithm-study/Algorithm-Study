"""
http://boj.kr/10000

[기억]
뭔가 정렬을 한 뒤에 스택으로 풀었던 것 같은데 원이 끝나는 지점을 중심으로 정렬하고 새로 탐색한 원이 기존의 원들을 덮어버리는 경우에 따라서 영역의 수를 하나 더 카운트하고 스택을 비워버리는 방식이었던 것 같다.
"""

from collections.abc import Generator, Iterable, Sequence
from sys import stdin

type centerx = int
type radius = int
type area_cnt = int
type leftx = int
type rightx = int


def input() -> str:
    return stdin.readline().strip()


def main(circles: Iterable[tuple[centerx, radius]]) -> area_cnt:
    """
    서로 접할 수 있지만 교차하지 않는 circle이 주어졌을 때, 원들로 만들어지는
    영역의 수를 구하라
    """
    # circles를 원들이 출발하는 지점과 끝나는 지점으로 변환하고 끝나는 지점을
    # 기준으로 정렬하라
    _circles: Sequence[tuple[leftx, rightx]] = sorted(
        map(lambda tup: (tup[0] - tup[1], tup[0] + tup[1]), circles),
        # right를 기준으로 1차 정렬하고, 만약 같을 경우, left를 기준으로
        # **역순**으로 정렬해야 하기 때문에 음수를 붙였다.
        # left를 역순으로 정렬해야 하는 이유는 내부 원을 다 읽은 다음에
        # 외부 원을 읽어야 하기 때문.
        key=lambda tup: (tup[1], -tup[0]),
    )
    cnt = 1

    stack: list[tuple[leftx, rightx]] = []
    for left, right in _circles:
        # TOP을 새 원이 감싸게 되는 경우, 내부에 싸여진 원들을 하나씩 pop한다.
        # 이때 내부 원들이 외부 원을 완벽히 나누는지 확인해야 한다.
        diameter = 0
        while len(stack) > 0 and left <= stack[-1][0]:
            popped = stack.pop()
            diameter += popped[1] - popped[0]

        if diameter == right - left:
            # 내부 원들이 외부 원을 완벽히 나눈다
            cnt += 1

        stack.append((left, right))
        cnt += 1  # 이건 원 그 자체로 만든 영역

    return cnt


if __name__ == "__main__":
    DEBUG = False

    n = int(input())

    def circle_reader(n: int) -> Generator[tuple[centerx, radius], None, None]:
        for _ in range(n):
            c, r = map(int, input().split())
            yield c, r

    circles = circle_reader(n)

    print(main(circles))
