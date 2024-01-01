"""
https://leetcode.com/problems/kids-with-the-greatest-number-of-candies
"""

from typing import List


class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        maximum = max(candies)
        return [False if x + extraCandies < maximum else True for x in candies]


if __name__ == "__main__":
    s = Solution()
    print(s.kidsWithCandies([2,3,5,1,3], 3))
    print(s.kidsWithCandies([4,2,1,1,2], 1))