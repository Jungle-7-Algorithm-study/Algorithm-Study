"""
https://leetcode.com/problems/trapping-rain-water-ii/
42.py 차원 증가버전
"""

from typing import Generator, Iterator, List


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

        NOTE - 현재 오답인 코드. 일차원적인 42.py 문제를 확장해서 풀었을때 명확한
        예외케이스를 발견함. 바로 물이 row 또는 col에만 채워지는 것이 아니라는 것.
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


if __name__ == "__main__":
    s = Solution()
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
