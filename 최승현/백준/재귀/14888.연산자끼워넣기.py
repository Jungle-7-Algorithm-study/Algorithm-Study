"""
http://boj.kr/14888
"""

from collections.abc import Sequence, Callable
from dataclasses import dataclass
from sys import stdin

input = stdin.readline


@dataclass
class OpCountAndExecute:
    count: int  # 남은 연산자의 개수
    execute: Callable[[int, int], int]  # 호출자


g_max = -(1 << 30)
g_min = 1 << 30


def recurse(
    n: int,
    i: int,
    result: int,
    operators: Sequence[OpCountAndExecute],
    seq: Sequence[int],
) -> None:
    global g_max, g_min

    if i >= n:
        g_max = max(g_max, result)
        g_min = min(g_min, result)
        return

    # print(f"i={i}, seq[{i}]={seq[i]}, result={result}")

    for op in operators:
        if op.count > 0:
            op.count -= 1
            recurse(n, i + 1, op.execute(result, seq[i]), operators, seq)
            op.count += 1


if __name__ == "__main__":
    n = int(input())
    seq = [int(x) for x in input().strip().split()]
    plus, minus, mult, div = map(int, input().strip().split())

    operators = [
        OpCountAndExecute(plus, lambda x, y: x + y),
        OpCountAndExecute(minus, lambda x, y: x - y),
        OpCountAndExecute(mult, lambda x, y: x * y),
        OpCountAndExecute(div, lambda x, y: abs(x) // y * (-1 if x < 0 else 1)),
    ]

    recurse(n, 1, seq[0], operators, seq)

    print(g_max)
    print(g_min)
