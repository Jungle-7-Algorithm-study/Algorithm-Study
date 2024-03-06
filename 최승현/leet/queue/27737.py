"""
https://boj.kr/27737
"""

from sys import stdin
from collections import deque
from math import ceil

input = stdin.readline
DELTAS = [-1, 0, 1, 0]


def deltas():
    for i in range(4):
        yield DELTAS[i], DELTAS[(i + 1) % 4]


def sol(n, m, k, board) -> tuple[bool, int]:
    """
    bfs
    """
    if m == 0:
        return False, 0

    is_possible = False

    for i in range(n):
        for j in range(n):
            if not board[i][j]:
                continue
            """do bfs traverse and count all cells that can be planted"""
            q = deque()
            cnt = 0

            q.append((i, j))

            while q:
                y, x = q.popleft()

                if not board[y][x]:
                    continue
                # visit
                board[y][x] = False
                cnt += 1

                for di, dj in deltas():
                    ci, cj = y + di, x + dj
                    if not (0 <= ci < n and 0 <= cj < n):
                        continue
                    if board[ci][cj]:
                        q.append((ci, cj))

            """determine the number of spores needed"""
            is_possible = True
            spores_need = ceil(cnt / k)
            m -= spores_need
            if m < 0:
                return False, 0

        # end for
    # end for

    if is_possible:
        return True, m
    return False, 0


if __name__ == "__main__":
    n, m, k = [int(x) for x in input().strip().split()]

    board = [[True if x == "0" else False for x in input().strip().split()] for _ in range(n)]

    is_possible, remain_spore = sol(n, m, k, board)

    if is_possible:
        print("POSSIBLE")
        print(remain_spore)
    else:
        print("IMPOSSIBLE")
