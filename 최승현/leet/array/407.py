"""
https://leetcode.com/problems/trapping-rain-water-ii/
42.py 차원 증가버전
"""

from typing import Callable, Generator, Iterator, List, Self, Tuple
from heapq import heappush, heappop


def water(heights: Iterator[int]) -> Generator:
    last_max = 0
    for h in heights:
        if h <= last_max:
            yield last_max - h
        else:
            last_max = h
            yield 0


class Solution:
    def trapRainWater(self, heightMap: List[List[int]]) -> int:
        """
        2 * m * n개의 결과 리스트를 교집합 취하면 되긴 함

        ❌ 예외케이스:
        [[12,13,1,12],[13,4,13,12],[13,8,10,12],[12,13,12,12],[13,13,13,13]]
        Output: 15
        Expected: 14

        NOTE - 현재 오답인 코드. 일차원적인 42.py 문제를 확장해서 풀었을때 명확한
        예외케이스를 발견함. 바로 물이 row 또는 col에만 채워지는 것이 아니라는 것.
        그러니까 현실에서의 물처럼 어떤 수조에 물꼬가 트이면 그 길을 통하여 수조의 물이
        전부 빠져나가는 현상을 구현하지 못해 오답처리가 발생한다.

        아마도 각 층별로 BFS를 해봐야 할 것 같다.
        """
        N = len(heightMap)
        M = len(heightMap[0])
        leftrights = [[] for _ in range(N)]
        rightlefts = [[] for _ in range(N)]
        updowns = [[] for _ in range(M)]
        downups = [[] for _ in range(M)]

        for row in range(N):
            leftrights[row] = list(water(iter(heightMap[row])))
        for row in range(N):
            rightlefts[row] = list(
                reversed(list(water(heightMap[row][col] for col in range(M - 1, -1, -1))))
            )
        for col in range(M):
            updowns[col] = list(water(heightMap[row][col] for row in range(N)))
        for col in range(M):
            downups[col] = list(
                reversed(list(water(heightMap[row][col] for row in range(N - 1, -1, -1))))
            )

        # print(leftrights)
        # print(rightlefts)
        # print(updowns)
        # print(downups)

        ret = 0
        for row in range(N):
            for col in range(M):
                ret += min(
                    leftrights[row][col],
                    rightlefts[row][col],
                    updowns[col][row],
                    downups[col][row],
                )
        return ret


DELTAS = [-1, 0, 1, 0]


def deltas() -> Generator[Tuple[int, int], None, None]:
    for i in range(4):
        yield (DELTAS[i], DELTAS[(i + 1) % 4])


class Solution2:
    def trapRainWater(self, heightMap: List[List[int]]) -> int:
        """
        0층부터 각각 DFS를 시도한다. 가장자리부터 탐색을 시작하며, 가장자리와 연결된
        모든 순회 가능한 지점들은 총 덧셈에 포함하지 않는다.

        ⌛️ heightMap[i][j] <= 2 * 10**4 라서 수가 너무 크다

        BFS + minheap을 사용한 풀이법이 있던데 그거 참조하면서 다시 풀어보자.
        """
        N = len(heightMap)
        M = len(heightMap[0])
        # MAX_HEIGHT = max(max(l) for l in heightMap)
        MAX_HEIGHT = 2 * 10**4

        def dfs(i: int, j: int, height: int, visited: List[List[bool]]) -> int:
            if i < 0 or N <= i or j < 0 or M <= j:
                return 0
            if visited[i][j] or heightMap[i][j] > height:
                return 0
            visited[i][j] = True

            # print(i, j)

            cnt = 1
            for di, dj in deltas():
                cnt += dfs(i + di, j + dj, height, visited)
            return cnt

        ret = 0

        visited = [[False for _ in range(M)] for _ in range(N)]
        for height in range(MAX_HEIGHT):

            for i in range(N):
                for j in range(M):
                    visited[i][j] = False

            # 가장자리
            for col in range(M):
                if heightMap[0][col] <= height:
                    dfs(0, col, height, visited)
                if heightMap[-1][col] <= height:
                    dfs(N - 1, col, height, visited)
            for row in range(N):
                if heightMap[row][0] <= height:
                    dfs(row, 0, height, visited)
                if heightMap[row][-1] <= height:
                    dfs(row, M - 1, height, visited)

            # 비가장자리
            for i in range(1, N - 1):
                for j in range(1, M - 1):
                    if heightMap[i][j] <= height:
                        ret += dfs(i, j, height, visited)

        return ret


class Solution3:

    def trapRainWater(self, heightMap: List[List[int]]) -> int:
        """
        MinHeap과 BFS를 활용한 방법
        1. 가장자리는 언제나 물을 가둘 수 없기 때문에 MinHeap(이하 queue)에 추가한다.
        2. queue에서 셀을 꺼낼 때마다 최소높이가 튀나오기 때문에 물을 가둘 수 있는 최소수위 level이 된다.
            level은 감소하지 않는다.
        3. 튀어나온 셀의 인접 셀을 비교했을 때 현재 level보다 낮은 셀을 발견한다면 그 셀은 물을 가둘 수
            있게 된다. 그 차이만큼 ret에 추가한다. queue에 인접 셀들을 추가한다.
        """

        class Cell:
            def __init__(self, i: int, j: int, height: int) -> None:
                self.i = i
                self.j = j
                self.height = height

            def __lt__(self, other: Self) -> bool:
                return self.height < other.height

            def __repr__(self) -> str:
                return f"(i:{self.i}, j:{self.j}, h:{self.height})"

        N = len(heightMap)
        M = len(heightMap[0])
        cell_map = [
            [Cell(i, j, height) for j, height in enumerate(line)]
            for i, line in enumerate(heightMap)
        ]
        q: List[Cell] = []

        ## 1.

        visited = [[False for _ in range(M)] for _ in range(N)]
        level = 0
        for col in range(M):
            heappush(q, cell_map[0][col])
            heappush(q, cell_map[-1][col])
            visited[0][col] = True
            visited[-1][col] = True

        for row in range(N):
            heappush(q, cell_map[row][0])
            heappush(q, cell_map[row][-1])
            visited[row][0] = True
            visited[row][-1] = True

        visit_cnt = 2 * (N + M) - 4

        ## 2.

        ret = 0

        while q:
            if visit_cnt == N * M:
                break
            cell = heappop(q)
            level = max(level, cell.height)

            for di, dj in deltas():
                i = cell.i + di
                j = cell.j + dj
                if i < 0 or N <= i or j < 0 or M <= j:
                    continue
                if visited[i][j]:
                    continue
                visited[i][j] = True
                visit_cnt += 1

                ## 3.

                ret += max(0, level - cell_map[i][j].height)

                heappush(q, cell_map[i][j])

        return ret


if __name__ == "__main__":
    s = Solution3()
    print(s.trapRainWater([[1, 4, 3, 1, 3, 2], [3, 2, 1, 3, 2, 4], [2, 3, 3, 2, 3, 1]]))
    print(
        s.trapRainWater(
            [[3, 3, 3, 3, 3], [3, 2, 2, 2, 3], [3, 2, 1, 2, 3], [3, 2, 2, 2, 3], [3, 3, 3, 3, 3]]
        )
    )
    # 아래 구조는 [0][2]에 생긴 구멍에 의해 3*3 수조에 찬 물이 전부 다 빠져야 한다.
    print(
        s.trapRainWater(
            [[3, 3, 2, 3, 3], [3, 2, 2, 2, 3], [3, 2, 2, 2, 3], [3, 2, 2, 2, 3], [3, 3, 3, 3, 3]]
        )
    )
