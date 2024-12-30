"""
http://boj.kr/2630

N*N 정사각형의 종이에 하얀색 또는 파란색이 각각 색칠되어있을 때 각각의 세그먼트들이 모두 하얀색 또는 파란색으로 칠해져 있을 수 있도록 세그먼트를 나눈다. 더 이상 나눌 수 없을 때까지 세그먼트를 나누었을 때 하얀색 세그먼트와 파란색 세그먼트의 개수를 구하라.

"세그먼트를 나눈다"의 정의는 종이를 (N/2)*(N/2) 크기의 작은 종이로 나누는 것을 의미한다.
"""

from sys import stdin

input = stdin.readline
g_segment = []


def recurse(
    pos: tuple[int, int],  # 시작지점
    n: int,  # 한 변의 길이
) -> tuple[int, int]:
    """
    pos: 시작지점
    n: 한 변의 길이
    returns: (하얀 색으로 칠해진 칸, 파란색으로 칠해진 칸)
    """
    global g_segment
    i, j = pos[0], pos[1]
    # print(i, j, n)

    if n == 1:
        return (0, 1) if g_segment[i][j] else (1, 0)

    seg_sample = g_segment[i][j]
    if all(all(seg_sample == x for x in row[j : j + n]) for row in g_segment[i : i + n]):
        return (0, 1) if seg_sample else (1, 0)

    # segmentation
    nextn = n // 2
    seg_result: tuple[tuple[int, int]] = (
        recurse((i, j), nextn),
        recurse((i, j + nextn), nextn),
        recurse((i + nextn, j), nextn),
        recurse((i + nextn, j + nextn), nextn),
    )

    lhs, rhs = zip(*seg_result)

    return sum(lhs), sum(rhs)


if __name__ == "__main__":
    n = int(input())

    for _ in range(n):
        g_segment.append([True if x == "1" else False for x in input().strip().split()])

    result = recurse((0, 0), n)
    print(result[0])
    print(result[1])
