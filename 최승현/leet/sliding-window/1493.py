"""
https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element

[1004.py] 문제와 동일한 거 아님? 근데 k = 1인
"""

from typing import List


class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        l, r = 0, 1  # inclusive l, exclusive r
        chance_used = False  # deletion chance
        longest = 0

        if nums[0] == 0:
            chance_used = True

        while r < len(nums) and l < r:
            if nums[r] == 0:
                if chance_used:
                    while l < r and nums[l] != 0:
                        l += 1
                    l += 1
                else:
                    chance_used = True

            r += 1
            longest = max(longest, r - l - int(chance_used))

        if not chance_used:
            longest = len(nums) - 1
        return longest


if __name__ == "__main__":
    s = Solution()

    print(s.longestSubarray([1, 1, 0, 1]))
    print(s.longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]))
    print(s.longestSubarray([1, 1, 1]))
    print(s.longestSubarray([1, 1, 0, 0, 1, 1, 1, 0, 1]))
    print(s.longestSubarray([1]))
