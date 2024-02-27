"""
https://www.codingame.com/ide/puzzle/moves-in-maze
"""

from copy import deepcopy
from collections import deque
from typing import Generator, List, Tuple

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

w, h = [int(i) for i in input().split()]
rows: List[List[str]] = []
for i in range(h):
    rows.append(list(input()))


def encode_base36(num: int) -> str:
    if 0 <= num <= 9:
        return str(num)
    return chr(num - 10 + ord("A"))


def decode_base36(c: str) -> int:
    if ord("0") <= ord(c) <= ord("9"):
        return ord(c) - ord("0")
    if ord("A") <= ord(c) <= ord("Z"):
        return ord(c) - ord("A") + 10
    raise Exception("cannot decode")


DELTAS = [-1, 0, 1, 0]


def deltas() -> Generator[Tuple[int, int], None, None]:
    for i in range(4):
        yield DELTAS[i], DELTAS[(i + 1) % 4]


def bfs(_i, _j):
    """
    '.' => unvisited, other => visited인채로 BFS를 수행한다.
    # 바로 직전 블럭의 숫자 + 1한 값을 현재 위치에 작성한 뒤 상하좌우 인접노드를 queue에 집어넣는다.
    """
    global rows, w, h
    q = deque()
    q.append((_i, _j))

    while q:
        i, j = q.popleft()
        distance = decode_base36(rows[i][j])

        for di, dj in deltas():
            ni, nj = (i + di) % h, (j + dj) % w

            if rows[ni][nj] != ".":
                continue
            rows[ni][nj] = encode_base36(distance + 1)
            q.append((ni, nj))


# S의 위치를 찾는다 그 위치에 0으로 채운다.
brk = False
for i in range(h):
    for j in range(w):
        if rows[i][j] == "S":
            rows[i][j] = "0"
            bfs(i, j)
            brk = True
            break
    if brk:
        break


for i in range(h):

    # Write an answer using print
    # To debug: print("Debug messages...", file=sys.stderr, flush=True)

    print("".join(rows[i]))
