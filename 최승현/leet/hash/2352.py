"""
https://leetcode.com/problems/equal-row-and-column-pairs

Ri 행과 Cj 열이 같은 시퀀스를 갖도록 만드는 모든 i,j 쌍의 개수를 구하여라 
"""

from typing import List
from collections import defaultdict


class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        N = len(grid)
        M = len(grid[0])

        row_hashs = defaultdict(int)
        col_hashs = defaultdict(int)

        for i in range(N):
            row_hashs[hash(tuple(grid[i][:]))] += 1
        for j in range(M):
            col_hashs[hash(tuple(grid[i][j] for i in range(N)))] += 1

        result = 0

        for key, count in row_hashs.items():
            for _ in range(count):
                result += col_hashs[key]

        return result


if __name__ == "__main__":
    s = Solution()

    print(s.equalPairs([[3, 2, 1], [1, 7, 6], [2, 7, 7]]))
    print(s.equalPairs([[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]))
