"""
https://algospot.com/judge/problem/read/DICTIONARY
"""

from sys import stdin
from typing import Set


def input():
    return stdin.readline().strip()


def int2chr(i: int):
    """0 ~ 26 사이의 숫자가 들어오면 a ~ z 의 알파벳으로 변환"""
    return chr(ord("a") + i)


# (i, j)를 원소를 가지고 있다 => i 가 j보다 앞에 온다
adj: Set[str] = set()


def make_graph(words):
    """
    주어진 단어들로부터 알파벳 선후관계 그래프를 생성한다.
    """
    global adj
    adj.clear()

    for j in range(1, len(words)):
        i = j - 1
        length = min(len(words[i]), len(words[j]))

        # word[i]가 word[j] 앞에 오는 이유를 찾는다
        for k in range(length):
            if words[i][k] != words[j][k]:
                # 찾았다!
                adj.add((words[i][k], words[j][k]))
                break


visited = set()
order = []


def dfs(cur: str):
    """
    깊이우선 탐색을 수행하며 dfs가 종료하는 순서를 기억했다가 위상정렬에 활용한다.
    """
    global adj, visited, order

    visited.add(cur)

    for i in range(26):
        alphabet = int2chr(i)
        if (cur, alphabet) in adj and alphabet not in visited:
            dfs(alphabet)

    # after all traversal
    order.append(cur)


def topological_sort():
    """
    adj에 주어진 그래프를 위상정렬한 결과를 반환하라.
    만약 DAG(Direct Acyclic Graph)가 아닌 경우, None을 반환하라.
    """
    global adj, visited, order

    visited.clear()
    order.clear()

    # Create order
    for i in range(26):
        alphabet = int2chr(i)
        if alphabet not in visited:
            dfs(alphabet)

    # 현재 가장 마지막에 오는 알파벳이 첫번째로 저장돼 있기 때문에
    # reverse를 취한다.
    order.reverse()
    # print(order)

    # DAG 판단: Cycle 판별
    for i in range(len(order)):
        for j in range(i + 1, len(order)):
            a, b = order[i], order[j]
            if (b, a) in adj:
                # Cycle 발생!
                return None

    return order


def main(words):
    """
    단어들의 목록이 순서대로 주어질 때 이 언어에서 알파벳의 순서를 계산하시오.

    @returns 만약 알파벳들의 순서에 모순이 있다면 "INVALID HYPOTHESIS"를 반환하고, 모순이 없다면 26개의 소문자로 알파벳의 순서를 반환한다.
    """
    global order, adj

    make_graph(words)
    # print(adj)
    result = topological_sort()

    if result is None:
        return "INVALID HYPOTHESIS"

    return "".join(order)


if __name__ == "__main__":
    c = int(input())
    for _ in range(c):
        n = int(input())
        print(main([input() for _ in range(n)]))
