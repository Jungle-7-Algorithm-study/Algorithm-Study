"""
Find Polygon With the Largest Perimeter
둘레가 가장 큰 다각형 찾기
"""


import itertools
from typing import List


class Solution:
    def largestPerimeter(self, nums: List[int]) -> int:
        nums.sort()
        acc = list(itertools.accumulate(nums))

        for end in range(len(nums) - 1, 1, -1):
            start = end - 1
            right = nums[end]
            if acc[start] > right:
                return acc[start] + right

        return -1


if __name__ == "__main__":
    TC = [[5, 5, 5], [1, 12, 1, 2, 5, 50, 3], [5, 5, 50], [2, 5, 4, 5]]

    sol = Solution()

    for tc in TC:
        ans = sol.largestPerimeter(tc)
        print(f"ans: {ans}")
