"""
https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero
"""

from typing import List
from collections import defaultdict


class Solution:
    def minReorder(self, n: int, connections: List[List[int]]) -> int:
        """
        0번 도시에서 모든 도시로 가는 경로가 존재하게 만들어라. (거꾸로 DFS)

        자료구조: Dict[idx, List[Tuple[adj_idx: int, easy_flow: bool]]]

        ex)
        connections: [[0,1], [1,3], [2,3], [4,0], [4,5]]
        adjs: {
            0: [(1, False), (4, True)],
            1: [(3, False), (0, True)],
            2: [(3, False)],
            3: [(1, True), (2, True)],
            4: [(0, False), (5, False)],
            5: [(4, True)]
        }

        보면 알겠지만 모든 방향을 거꾸로 뒤집어놨다. 그래야 0부터 출발할때 편하지

        그리고 0에서부터 DFS를 시작한다. 방문 순서대로 작성한다.
        1(flip):
            3(flip):
                1(visited)
                2(pass):
                    3(visited)
                    pop
                pop
            0(visited)
            pop
        4(pass):
            0(visited)
            5(flip):
                4(visited)
                pop
            pop
        HALT

        여기에서 만난 flip의 수를 센다.
        """
        # 인접 사전을 만든다
        adjs: dict[int, list[tuple[int, bool]]] = defaultdict(list)
        visited: dict[int, bool] = {}

        for ai, bi in connections:
            # 문제에서 정의한 방향과는 반대로 bi ⟶ a1로 향하는 그래프를 만든다
            adjs[ai].append((bi, False))
            adjs[bi].append((ai, True))
            visited[ai] = False
            visited[bi] = False

        # DFS from city-0
        stack = [0]
        visited[0] = True
        flip_cnt = 0

        while stack:
            cur = stack.pop()
            for adj, easy_flow in adjs[cur]:
                if visited[adj]:
                    continue
                visited[adj] = True
                if not easy_flow:
                    flip_cnt += 1
                stack.append(adj)

        return flip_cnt