"""
http://boj.kr/9663

중복된 답을 걸러내지 못해 틀린 답. + O(N!)를 최적화하지 못해 느린 답.

[1년 전의 풀이](https://www.acmicpc.net/source/64978116)를 참고하여 다시 풀어보자.

row_visited, ne_visited, se_visited를 사용하여 각 열에 대해서만 반복하고, 행 중복, 우상향 대각선, 우하향 대각선 중복을 제거하는 로직을 사용했다.

```python
row_visited = [False for _ in range(SIDE)]

ne_visited = [False for _ in range(SIDE * 2 - 1)]

se_visited = [False for _ in range(SIDE * 2 - 1)]
```
"""

from collections.abc import Generator


def queen_paths(n: int, cur: tuple[int, int]) -> Generator[tuple[int, int]]:
    """
    cur에 퀸이 놓여있을 때 nxn 체스판에서 해당 퀸이 움직일 수 있는 모든 위치를 리턴하라
    """
    deltas = (
        lambda i, j: (i - 1, j - 1),
        lambda i, j: (i - 1, j),
        lambda i, j: (i - 1, j + 1),
        lambda i, j: (i, j - 1),
        lambda i, j: (i, j + 1),
        lambda i, j: (i + 1, j - 1),
        lambda i, j: (i + 1, j),
        lambda i, j: (i + 1, j + 1),
    )

    for delta_fn in deltas:
        i, j = delta_fn(*cur)

        while 0 <= i < n and 0 <= j < n:
            yield i, j
            i, j = delta_fn(i, j)


def recurse(n: int, mat: list[list[bool]], cur: tuple[int, int], remain: int) -> int:
    """
    - n: 체스판의 크기
    - mat: 체스판의 상태. 둘 수 없는 자리를 False로 설정한다. 이미 둔 자리도 False로 설정한다.
    - cur: 마지막으로 둔 퀸의 자리. 이 자리로부터 탐색을 시작한다.
    - remain: 남은 퀸의 수.
    - returns: 이 재귀에서 가능한 퀸 배치의 수

    *탐색*: (i, j)쌍이 주어졌을 때 j가 먼저 증가하고 j>=n일 경우 i를 1 증가시키고 j를 0으로 초기화시킨다.
    """

    if remain <= 0:
        return 1

    cnt = 0

    i, j = cur[0], cur[1]

    while i < n:
        while j < n:
            if mat[i][j]:
                newcur = (i, j)
                # 퀸을 배치했으니 그 자리를 비롯한 해당 퀸이 움직일 수 있는 공간들을 전부 False로 메운다.
                # mat[i][j] = False
                for qi, qj in queen_paths(n, newcur):
                    mat[qi][qj] = False

                cnt += recurse(n, mat, newcur, remain - 1)

                # 퀸 배치를 빼야하니 그 자리를 비롯한 해당 퀸이 움직일 수 있는 공간들을 전부 True로 돌려놓는다.
                for qi, qj in queen_paths(n, newcur):
                    mat[qi][qj] = True
                # mat[i][j] = True
            # endif

            j += 1
        # endwhile

        j = 0
        i += 1
    # endwhile

    return cnt


def main(n: int) -> int:
    mat = [[True for _ in range(n)] for _ in range(n)]
    return recurse(n, mat, (0, 0), n)


if __name__ == "__main__":
    n = int(input())
    print(main(n))

