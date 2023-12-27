"""
중량제한

--- coach's solution

BFS + 이분탐색으로 문제를 풀 수도 있다.

다리의 값이 k보다 크기만 하면 되는데, B 지점까지 갈 수 있냐 없냐를 가지고 이분탐색(parametric search)
"""

from collections import defaultdict, deque
import sys

input = sys.stdin.readline
max_c = float("-inf")


class Solution:
    """
    BFS + 이분탐색
    C_MAX / 2 중량의 짐을 A ⟶ B로 옮길 수 있는지 이분탐색. BFS 실패시 go left, 성공시 go right
    """

    def maximum_weight(
        self, adj_dict: dict[int, list[tuple[int, int]]], n: int, a: int, b: int, max_c: int
    ) -> int:
        """
        adj_dict: {v1: [(v2, w12), (v3, w13), ...]} vice versa
        """
        l: int = 1
        r: int = max_c

        while l != r:
            # deliver 할 수 있는 가장 큰 무게를 구하라: Last True를 구하라
            m = (l + r) // 2
            if self.can_deliver(adj_dict, m, n, a, b):
                # go right
                l = m + 1
            else:
                # go left
                r = m
        return l - 1  # last true

    def can_deliver(
        self, adj_dict: dict[int, list[tuple[int, int]]], weight: int, n: int, a: int, b: int
    ) -> bool:
        """
        BFS 탐색을 하며 weight 무게 물품을 A ⟶ B로 향하는 경로가 존재하는지 판단
        """
        visited = [False for _ in range(n + 1)]  # 1-indexed
        visited[a] = True
        dq = deque([a])
        # print(f"dq: {dq}")

        while dq:
            cur = dq.popleft()
            if cur == b:
                return True
            # print(f"cur: {cur}")
            for v, w in adj_dict[cur]:
                # print(f"adj, capacity: {adj}, {capacity}")
                if not visited[v] and w >= weight:
                    visited[v] = True
                    dq.append(v)
        return False


def adj_list_to_dict(adj_list: list[list[int]]) -> dict[int, list[tuple[int, int]]]:
    """
    input:
    1 2 2
    3 1 3
    2 3 2
    2 1 1_000_000_000
    output:
    {
        1: [(2, 2), (3, 3)],
        2: [(1, 2), (3, 2)],
        3: [(1, 3), (2, 2)]
    }

    두 정점 사이에 여러 간선이 존재할 수 있으나, 가장 큰 weight를 남기고 제거한다.
    """
    global max_c
    ret = defaultdict(list)

    for a, b, w in adj_list:
        ret[a].append((b, w))
        ret[b].append((a, w))
        max_c = max(max_c, w)

    return ret


if __name__ == "__main__":
    n, m = [int(n) for n in input().split()]
    adj_list = [[int(n) for n in input().split()] for _ in range(m)]
    a, b = [int(n) for n in input().split()]

    adj_dict = adj_list_to_dict(adj_list)
    # print(f"adj_dict: {adj_dict}")

    sol = Solution()
    ans = sol.maximum_weight(adj_dict, n, a, b, int(max_c))

    print(ans)
